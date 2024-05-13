import * as Yup from "yup";
import { idNumberLuhnSchema } from "@/utils/idNumberLuhn";
import Filter from "bad-words";
import { validateBankAccount } from "./bankAccountCDV";
import { RootState, useAppSelector } from "@/services/store";

// Create a reusable profanity filter instance
const profanityFilter = new Filter();
profanityFilter.addWords(
  "Fok",
  "Kont",
  "Poes",
  "Slet",
  "Drol",
  "Doos",
  "soutpiel",
  "stront",
  "draadtrek",
  "naaier",
  "bokker",
  "bokkerol",
  "tjorts",
  "Poes",
  "Slet",
  "Kont",
  "Doos",
  "Donner",
  "Vok",
  "Bliksem",
  "Hoer",
  "Gat",
  "Piel",
  "Holnaaier",
  "jirre"
);

// Common validation methods
const requiredValidation = (fieldName: string) =>
  Yup.mixed().required(`${fieldName} is required`);
const positiveNumberValidation = (message: string) =>
  Yup.number().moreThan(0, message);
const lessThanValidation = (value: number, message: string) =>
  Yup.number()
    .test("decimal-places", "Up to two decimal places allowed", (value) => {
      if (value !== undefined && value !== null) {
        const decimalPlaces = (value.toString().split(".")[1] || "").length;
        return decimalPlaces <= 2;
      }
      return true;
    })
    .lessThan(value, message);

const atLeastValidation = (value: number, message: string) =>
  Yup.number()
    .test("decimal-places", "Up to two decimal places allowed", (value) => {
      if (value !== undefined && value !== null) {
        const decimalPlaces = (value.toString().split(".")[1] || "").length;
        return decimalPlaces <= 2;
      }
      return true;
    })
    .required()
    .min(value, message);
const matchesValidation = (pattern: RegExp, message: string) =>
  Yup.string().matches(pattern, message);

// Exported validation schemas
export const useBankAccountValidationSA = () => {
  const selectedBank = useAppSelector(
    (state: RootState) => state.app.bankDetails
  );
  const bankAccountValidationSA = Yup.string()
    .min(9)
    .max(11)
    .matches(/^0?\d+$/, "Must contain only numbers")
    .matches(/^\S*$/, "No spaces allowed in your Bank Account number")
    .required("Bank Account is required")
    .test(
      "isValidAccount",
      "A valid bank account number is required. Please check your account number and your account type and try again.",
      function (value) {
        let account_type = 1;
        let accountIndicator = selectedBank?.accountIndicator || null;
        let weightingDigits = selectedBank?.weightingDigits || null;
        let fudgeFactor = selectedBank?.fudgeFactor || null;
        let modulus = selectedBank?.modulus || null;
        let exceptCode = selectedBank?.exceptCode || null;
        let validLengths = selectedBank?.validLengths || null;
        if (
          this.parent.account_type === "Savings Account" &&
          selectedBank?.name === "Nedbank Limited"
        ) {
          account_type = 2;
          accountIndicator = 4;
          weightingDigits = "11987654321";
          fudgeFactor = 18;
          modulus = 11;
          exceptCode = "p";
          validLengths = "10";
        }
        console.log("Selected Bank", selectedBank?.name);
        console.log("Account Type Code:", account_type);
        return validateBankAccount(
          value,
          account_type,
          accountIndicator,
          weightingDigits,
          fudgeFactor,
          modulus,
          exceptCode,
          validLengths
        );
      }
    );
  return bankAccountValidationSA;
};

export const loanAmountValidation = (fieldName: string) =>
  Yup.number()
    .test("decimal-places", "Up to two decimal places allowed", (value) => {
      if (value !== undefined && value !== null) {
        const decimalPlaces = (value.toString().split(".")[1] || "").length;
        return decimalPlaces <= 2;
      }
      return true;
    })
    .lessThan(12001)
    .moreThan(0)
    .required(`${fieldName} must not be greater than 12000`);

export const loanTermValidation = (fieldName: string) =>
  Yup.number()
    .test("decimal-places", "Up to two decimal places allowed", (value) => {
      if (value !== undefined && value !== null) {
        const decimalPlaces = (value.toString().split(".")[1] || "").length;
        return decimalPlaces <= 2;
      }
      return true;
    })
    .lessThan(13)
    .moreThan(2)
    .notOneOf([7, 8, 10, 11])
    .required(`${fieldName} is required`);

export const instalmentValidation = positiveNumberValidation(
  "Please click the calculate Instalment button above to get your instalment to proceed"
);

export const personNameValidation = (fieldName: string) =>
  Yup.string()
    .min(2, `${fieldName} must be at least 2 characters`)
    .max(50, `${fieldName} cannot exceed 50 characters`)
    .required(`${fieldName} is required`)
    .matches(
      /^[A-Za-z\s'-]+$/,
      `${fieldName} can only contain letters, spaces, hyphens, and apostrophes`
    )
    .test("profanity", "Profanity words are not allowed", (value) => {
      return !profanityFilter.isProfane(value || "");
    });

export const nameValidation = (fieldName: string) =>
  requiredValidation(fieldName).test(
    "profanity",
    "Profanity words are not allowed",
    (value) => {
      return !profanityFilter.isProfane(value || "");
    }
  );

export const mobileNumberValidationSA = (fieldName: string) =>
  matchesValidation(
    /^(?:\+27|0)(?:\d{9}|\d{2}\s\d{3}\s\d{4}|\d{2}-\d{3}-\d{4})$/,
    "Invalid South African mobile number"
  ).required(`${fieldName} is required`);

export const idNumberValidationSA = idNumberLuhnSchema;

export const grossSalaryValidation = Yup.number()
  .test("decimal-places", "Up to two decimal places allowed", (value) => {
    if (value !== undefined && value !== null) {
      const decimalPlaces = (value.toString().split(".")[1] || "").length;
      return decimalPlaces <= 2;
    }
    return true;
  })
  .moreThan(0, "Gross Salary must be greater than zero");

export const netSalaryValidation = Yup.number()
  .test("decimal-places", "Up to two decimal places allowed", (value) => {
    if (value !== undefined && value !== null) {
      const decimalPlaces = (value.toString().split(".")[1] || "").length;
      return decimalPlaces <= 2;
    }
    return true;
  })
  .moreThan(4499, "Net Salary must be at least R4,500")
  .max(
    Yup.ref("grossSalary"),
    "Net Salary must be less than or equal to Gross Salary"
  );

export const requiredFieldValidation = (fieldName: string) =>
  requiredValidation(fieldName);

export const pinValidation = matchesValidation(
  /^[0-9]{4}$/,
  "PIN must be 4 digits"
);

export const consentValidation = (message: string) =>
  Yup.boolean().required(message).oneOf([true], message);

export const creditReferenceCheckConsentValidation = consentValidation(
  "Credit Record Check consent required"
);

export const thirdPartyCheckConsentValidation = consentValidation(
  "Third Party Check consent required"
);

export const solvencyConsentValidation = consentValidation(
  "Solvency consent required"
);

export const citizenConsentValidation = consentValidation(
  "Citizenship consent required"
);

export const upfrontInitiationFeeConsentValidation = consentValidation(
  "Upfront Initiation Fee consent required"
);

export const fppoConsentValidation = Yup.boolean().required(
  "You have to select an option for Foreign Prominent Person consent"
);

export const poppiConsentValidation = consentValidation(
  "POPPI consent required"
);

export const dpipConsentValidation = Yup.boolean().required(
  "You have to select an option for Domestic Influential Persons consent"
);

export const preAgreementConsentValidation = consentValidation(
  "Pre-Agreement consent required"
);

export const loanContractValidation = consentValidation(
  "Loan Contract consent required"
);

export const communicationConsentValidation = (fieldName: string) =>
  consentValidation(
    "You are required to select either to receive communication via email or SMS or both"
  ).test(
    "at-least-one-checked",
    "At least one option must be selected",
    function (value) {
      const { C004, C005, C006 } = this.parent;
      return !C004 || C005 || C006 || value;
    }
  );

export const marketingMaterialConsentValidation = Yup.boolean()
  .required("You have to select an option for Marketing consent")
  .test(
    "if-one-is-selected-required",
    "You are required to select the Marketing consent if you select either to receive Marketing material via email or SMS",
    function (value) {
      const { C004, C005, C006 } = this.parent;
      if ((C005 || C006) && !C004) {
        return this.createError({
          path: "C004",
          message:
            "You are required to select the Marketing consent if you select either to receive Marketing material via email or SMS",
        });
      }
      return true;
    }
  );

export const emailCommunicationConsentValidation = Yup.boolean().test(
  "at-least-one-checked",
  "You are required to select either to receive communication via email or SMS or both",
  function (value) {
    const { C004, C005, C006 } = this.parent;
    return !C004 || C005 || C006 || value;
  }
);
export const smsCommunicationConsentValidation = Yup.boolean().test(
  "at-least-one-checked",
  "You are required to select either to receive communication via email or SMS or both",
  function (value) {
    const { C004, C005, C006 } = this.parent;
    return !C004 || C005 || C006 || value;
  }
);

export const employmentStartDateValidation = Yup.date()
  .required("Employment Start Date Required")
  .max(new Date(), "Employment start date should be in the past");

export const firstPaymentDateValidation = Yup.date()
  .required("Next salary payment date required")
  .min(new Date(), "Next salary payment date cannot be in the past")
  .test(
    "is-more-than-13-days",
    "Next salary payment date should be at least 14 days from today",
    function (value) {
      const today = new Date();
      const thirteenDaysFromNow = new Date(
        today.getTime() + 13 * 24 * 60 * 60 * 1000
      ); // Calculate 13 days from now
      return value > thirteenDaysFromNow;
    }
  );

export const employmentLetterValidation = Yup.lazy((value, schema) => {
  const { employment_start_date, employment_type } = schema.parent;
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  const isStartDateLessThanThreeMonths =
    new Date(employment_start_date) > threeMonthsAgo;
  const isContractEmployment = employment_type === "4";

  if (isStartDateLessThanThreeMonths || isContractEmployment) {
    return Yup.mixed().required();
  }

  return Yup.mixed().notRequired();
});

export const requiredAmountValidation = atLeastValidation(
  0,
  "amount should be greater than or equal to 0"
);

export const affordabilityValidation = Yup.number()
  .test("decimal-places", "Up to two decimal places allowed", (value) => {
    if (value !== undefined && value !== null) {
      const decimalPlaces = (value.toString().split(".")[1] || "").length;
      return decimalPlaces <= 2;
    }
    return true;
  })
  .max(
    Yup.ref("basic_pay"),
    "Net Salary must be less than or equal to Gross Salary"
  )
  .required("net pay is required")
  .min(4499, "Net pay amount must be greater than or equal to R4,500")
  .test("expenseTotal", "Expenses total exceeds net pay", function (value) {
    const expenseFields = [
      this.parent.transport || 0,
      this.parent.education || 0,
      this.parent.housing || 0,
      this.parent.other || 0,
      this.parent.consumables || 0,
      this.parent.medical_aid || 0,
      this.parent.water_electricity || 0,
      this.parent.maintenance || 0,
      this.parent.insurance || 0,
    ];

    const validateExpenseTotal = (expenseFields, netPay) => {
      const expenseSum = expenseFields.reduce(
        (sum, expense) => sum + (expense || 0),
        0
      );
      return expenseSum <= netPay;
    };

    return validateExpenseTotal(expenseFields, value);
  });

export const creditLifeConsentValidation = Yup.boolean().required(
  "You have to select an option for the Credit Life Consent"
);

export const creditLifeValidation = Yup.mixed().test({
  name: "exclusiveFields",
  exclusive: true,
  message:
    "Either accept the credit life terms and conditions provided above or upload your own Credit Life Policy Document to proceed",
  test: function (value) {
    const niftyCoverAccepted =
      this.parent.niftyCoverTermsAndConditions === true;
    const ownCreditLifeProvided = value !== undefined && value !== null;
    return niftyCoverAccepted ? !ownCreditLifeProvided : ownCreditLifeProvided;
  },
});
