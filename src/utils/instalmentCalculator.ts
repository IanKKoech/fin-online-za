import { SupabaseClient } from "@supabase/supabase-js";
import { Database as SupabaseDB } from "@/types/supabase";

type OrganisationProduct =
  SupabaseDB["public"]["Tables"]["organisation_products"]["Row"];

interface ChargesResultObject {
  description: string;
  value: number;
  charge_time: "Disbursement" | "Installment";
  capitalised: boolean;
}

interface DynamicCharges {
  rules: ChargesRule[];
}

interface ChargesRule {
  max: number;
  min: number;
  diff: number;
  value: number;
  offset: number;
  calculation: string;
}

interface ProductCharges {
  id: number;
  name: string;
  calculation: { id: number; name: string };
  value: number;
  charge_type: number;
  json_values: JSON;
  fin_charge_ref: number;
  is_included_in_capitalised_amount: boolean;
}

enum CalculationType {
  FLAT = 1,
  PERCENTAGE_OF_LOAN_AMOUNT = 2,
  VARIABLE = 3,
  PERCENTAGE_OF_CAPITALIZED_AMOUNT = 4,
}

enum ChargeType {
  DISBURSEMENT = 1,
  INSTALMENT = 2,
}

export async function calculateInstalment(
  amount: any,
  months: number,
  organisation_product: any,
  charges: any
): Promise<{
  calculated_capitalised_amount: number;
  monthlyAmount: number;
  insurance: number;
  initiationFee: number;
  monthlyServiceFee: number;
  vatOnInitiationFee: number;
  vatOnServiceFee: number;
}> {
  console.log("Instalment and charges calculation by loan amount");
  let rate = 0;
  let instalment_charges: ChargesResultObject[] = [];
  let disbursement_charges: ChargesResultObject[] = [];
  let total_instalment = 0;
  let capitalised_loan_amount = amount;

  const calculateChargeValue = (loanAmount: number, rules: ChargesRule[]) => {
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      if (
        loanAmount >= rule.min &&
        (rule.max === null || loanAmount <= rule.max)
      ) {
        switch (rule.calculation) {
          case "flat":
            return rule.value;
          case "percentage":
            const difference = loanAmount - rule.diff || 0;
            const percentage = rule.value;
            const result = difference * percentage;
            return result + rule.offset;
        }
      }
    }
  };

  //Charges associated to the product

  console.log(charges);
  console.log(organisation_product);
  if (
    !organisation_product!.interest_rate ||
    organisation_product!.interest_rate === 0
  ) {
    console.log("Interest is dependant on tenure");
    //check if interest component exists in the charge object

    console.log(organisation_product);
    if (organisation_product.charge_config["interest"]) {
      console.log("Error interest component is mission");
    }
    try {
      rate = organisation_product.charge_config["interest"][months];
    } catch (error) {
      console.log(error);
    }
  } else {
    rate = organisation_product!.interest_rate;
  }

  // calculate disbursement charges charges
  if (charges) {
    console.log("charges exists");
    const filtered_disbursement_charges = charges.filter(
      (item) => item.charge_type === ChargeType.DISBURSEMENT
    );

    // check if filtered disbursement exists before iterating
    if (filtered_disbursement_charges) {
      console.log("disbursement charges exists");
      disbursement_charges = filtered_disbursement_charges.map(
        (item: ProductCharges) => {
          //variable calculation
          if (item.calculation.id === CalculationType.FLAT) {
            return {
              description: item.name,
              value: item.value,
              charge_time: "Disbursement",
              capitalised: item.is_included_in_capitalised_amount,
            };
          } else if (
            item.calculation.id === CalculationType.PERCENTAGE_OF_LOAN_AMOUNT
          ) {
            const value = (item.value / 100) * amount || 0!;
            const rounded_value = Number(value.toFixed(2));
            return {
              description: item.name,
              value: rounded_value,
              charge_time: "Disbursement",
              capitalised: item.is_included_in_capitalised_amount,
            };
          } else if (item.calculation.id === CalculationType.VARIABLE) {
            const charge_rules = item.json_values as unknown as DynamicCharges;
            const calculated_value = calculateChargeValue(
              amount,
              charge_rules.rules
            );
            // actual value of the charge. This will cater for charges that are a percentage of variable calculation. eg VAT of initiation fee
            const actual_value = (calculated_value! * item.value) / 100;
            const rounded_value = Number(actual_value.toFixed(2));
            return {
              description: item.name,
              value: rounded_value,
              charge_time: "Disbursement",
              capitalised: item.is_included_in_capitalised_amount,
            };
          }
          return {} as ChargesResultObject;
        }
      );
    }

    // Calculating capitalised loan amount since we now have disbursement charges
    const capitalised_charges = disbursement_charges.reduce(
      (accumulator: number, currentValue: ChargesResultObject) => {
        return accumulator + currentValue.value;
      },
      0
    );
    capitalised_loan_amount = amount + capitalised_charges;

    //calculate instalment charges charges
    const filtered_instalment_charges = charges.filter(
      (item) => item.charge_type === ChargeType.INSTALMENT
    );

    //check if filtered instalment charges exists before iterating
    if (filtered_instalment_charges) {
      console.log("Instalment charges exists");
      instalment_charges = filtered_instalment_charges.map(
        (item: ProductCharges) => {
          //variable calculation
          if (item.calculation.id === CalculationType.FLAT) {
            return {
              description: item.name,
              value: item.value,
              charge_time: "Installment",
              capitalised: item.is_included_in_capitalised_amount,
            };
          } else if (
            item.calculation.id === CalculationType.PERCENTAGE_OF_LOAN_AMOUNT
          ) {
            const value = (item.value / 100) * amount;
            const rounded_value = Number(value.toFixed(2));
            return {
              description: item.name,
              value: rounded_value,
              charge_time: "Installment",
              capitalised: item.is_included_in_capitalised_amount,
            };
          } else if (item.calculation.id === CalculationType.VARIABLE) {
            const json_values = item.json_values as unknown as DynamicCharges;
            const charge_rules = json_values.rules;
            const calculated_value = calculateChargeValue(amount, charge_rules);
            // actual value of the charge. This will cater for charges that are a percentage of variable calculation. eg VAT of initiation fee
            const actual_value = (calculated_value! * item.value) / 100;
            const rounded_value = Number(actual_value.toFixed(2));
            return {
              description: item.name,
              value: rounded_value,
              charge_time: "Installment",
              capitalised: item.is_included_in_capitalised_amount,
            };
          } else if (
            item.calculation.id ===
            CalculationType.PERCENTAGE_OF_CAPITALIZED_AMOUNT
          ) {
            const value = (item.value / 100) * capitalised_loan_amount;
            const rounded_value = Number(value.toFixed(2));
            return {
              description: item.name,
              value: rounded_value,
              charge_time: "Installment",
              capitalised: item.is_included_in_capitalised_amount,
            };
          }
          return {} as ChargesResultObject;
        }
      );
    }
  }

  //calculate the net instalment
  const presentValue: number = -capitalised_loan_amount;
  console.log("capitalised charges", disbursement_charges);
  console.log("instalment charges", instalment_charges);
  console.log("capitalized amount", capitalised_loan_amount);

  //net instalment before monthly charges
  const net_instalment: number = Math.abs(
    ((rate / 100) * presentValue) / (1 - Math.pow(1 + rate / 100, -months))
  );

  //total instalment after adding monthly charges
  const total_monthly_charges = instalment_charges
    .reduce((accumulator: number, currentValue: ChargesResultObject) => {
      return accumulator + currentValue.value;
    }, 0)
    .toFixed(2);
  console.log("Net instalment", net_instalment);
  console.log("Total monthly charges", total_monthly_charges);
  total_instalment = net_instalment + Number(total_monthly_charges);

  const calculated_capitalised_amount = capitalised_loan_amount;
  const monthlyAmount = total_instalment;
  const calculated_charges = [...disbursement_charges, ...instalment_charges];

  let insurance = 0;
  let initiationFee = 0;
  let monthlyServiceFee = 0;
  let vatOnInitiationFee = 0;
  let vatOnServiceFee = 0;

  interface Charge {
    description: string;
    value: number;
  }

  calculated_charges.forEach((charge: Charge) => {
    if (charge.description === "Insurance") {
      insurance = +charge.value.toFixed(2);
    }
    if (charge.description === "Initiation Fee") {
      initiationFee = +charge.value.toFixed(2);
    }
    if (charge.description === "Monthly Service Fee") {
      monthlyServiceFee = +charge.value.toFixed(2);
    }
    if (charge.description === "VAT on Initiation Fee") {
      vatOnInitiationFee = +charge.value.toFixed(2);
    }
    if (charge.description === "VAT on Monthly Fee") {
      vatOnServiceFee = +charge.value.toFixed(2);
    }
  });

  console.log(monthlyAmount);

  return {
    calculated_capitalised_amount,
    monthlyAmount,
    insurance,
    initiationFee,
    monthlyServiceFee,
    vatOnInitiationFee,
    vatOnServiceFee,
  };
}
