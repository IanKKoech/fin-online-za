import React, { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import { Option } from "AppTypes";
import * as Yup from "yup";
import { FormInputField } from "@/components/ui";
import { validateBankAccount } from "@/utils/bankAccountCDV";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

interface BankDetailsProps {
  options?: Option[];
  name: string;
  errors?: any;
}

export const BankDetails: React.FC<BankDetailsProps> = ({
  name,
  options,
  errors,
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue, setErrors, values } = useFormikContext();
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [selectedBank, setSelectedBank] = useState({
    name: "",
    universalBankCode: "",
    swiftCode: "",
    accountIndicator: 0,
    weightingDigits: null,
    fudgeFactor: null,
    modulus: null,
    exceptCode: "",
    validLengths: "",
  });

  const banks = [
    {
      name: "Absa Bank Limited",
      universalBankCode: "632005",
      swiftCode: "ABSAZAJJXXX",
      accountIndicator: 4,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: "f",
      validLengths: "8,9,10,11",
    },
    {
      name: "African Bank Limited",
      universalBankCode: "430000",
      swiftCode: "AFRCZAJJXXX",
      accountIndicator: null,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: null,
      validLengths: null,
    },
    {
      name: "Bidvest Bank Limited",
      universalBankCode: "462005",
      swiftCode: "BIDBZAJJXXX",
      accountIndicator: null,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: null,
      validLengths: null,
    },
    {
      name: "Capitec Bank Limited",
      universalBankCode: "470010",
      swiftCode: "CABLZAJJXXX",
      accountIndicator: 4,
      weightingDigits: "21987654321",
      fudgeFactor: 0,
      modulus: 11,
      exceptCode: null,
      validLengths: "10",
    },
    {
      name: "Discovery Bank Limited",
      universalBankCode: "679000",
      swiftCode: "DISCZAJJ",
      accountIndicator: null,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: null,
      validLengths: null,
    },
    {
      name: "First National Bank (FNB)",
      universalBankCode: "250655",
      swiftCode: "FIRNZAJJ",
      accountIndicator: 4,
      weightingDigits: "12121212121",
      fudgeFactor: 0,
      modulus: 10,
      exceptCode: null,
      validLengths: "11",
    },
    {
      name: "FirstRand Bank - A subsidiary of First Rand Limited",
      universalBankCode: "250655",
      swiftCode: "FIRNZAJJRSL",
      accountIndicator: null,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: null,
      validLengths: null,
    },
    {
      name: "Grindrod Bank Limited",
      universalBankCode: "223626",
      swiftCode: "GRIDZAJJXXX",
      accountIndicator: null,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: null,
      validLengths: null,
    },
    {
      name: "Investec Bank Limited",
      universalBankCode: "580105",
      swiftCode: "IVESZAJJXXX",
      accountIndicator: 4,
      weightingDigits: "000NJHD7531",
      fudgeFactor: 0,
      modulus: 11,
      exceptCode: null,
      validLengths: "11",
    },
    {
      name: "Mercantile Bank Limited",
      universalBankCode: "450105",
      swiftCode: "LISAZAJJXXX",
      accountIndicator: 4,
      weightingDigits: "1A987654321",
      fudgeFactor: 0,
      modulus: 11,
      exceptCode: null,
      validLengths: "10",
    },
    {
      name: "Nedbank Limited",
      universalBankCode: "198765",
      swiftCode: "NEDSZAJJXXX",
      accountIndicator: 4,
      weightingDigits: "11987654321",
      fudgeFactor: 9,
      modulus: 11,
      exceptCode: null,
      validLengths: "10,11",
    },
    {
      name: "Old Mutual",
      universalBankCode: "462005",
      swiftCode: "OMAMZAJC XXX",
      accountIndicator: null,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: null,
      validLengths: null,
    },
    {
      name: "Sasfin Bank Limited",
      universalBankCode: "683000",
      swiftCode: "SASFZAJJXXX",
      accountIndicator: null,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: null,
      validLengths: null,
    },
    {
      name: "Standard Bank of South Africa",
      universalBankCode: "051001",
      swiftCode: "SBZAZAJJ",
      accountIndicator: 4,
      weightingDigits: "11987654321",
      fudgeFactor: 0,
      modulus: 11,
      exceptCode: "m",
      validLengths: "9,11",
    },
    {
      name: "SA Post Bank (Post Office)",
      universalBankCode: "460005",
      swiftCode: "SBZAZAJJ",
      accountIndicator: null,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: null,
      validLengths: null,
    },
    {
      name: "Tyme Bank",
      universalBankCode: "678910",
      swiftCode: "CBZAZAJJ",
      accountIndicator: null,
      weightingDigits: null,
      fudgeFactor: null,
      modulus: null,
      exceptCode: null,
      validLengths: null,
    },
  ];

  useEffect(() => {
    const handleBankChange = () => {
      const selectedBankName = field.value;
      const bankData = banks.find((bank) => bank.name === selectedBankName);
      if (bankData) {
        setSelectedBank(bankData);
        setFieldValue("branch_code", bankData.universalBankCode);
        setFieldValue("forex_code", bankData.swiftCode);
      }
    };
    handleBankChange();
  }, [field.value]);

  useEffect(() => {
    const bankValidationSchema = Yup.object().shape({
      account_number: Yup.string()
        .min(9)
        .max(11)
        .matches(/^0?\d+$/, "Must contain only numbers")
        .matches(/^\S*$/, "No spaces allowed in your Bank Account number")
        .required("Bank Account is required")
        .test(
          "isValidAccount",
          "A valid bank account number is required",
          function (value) {
            let accountType = 1;
            if (values["account_type"] === "Savings Account") {
              accountType = 2;
            }
            return validateBankAccount(
              value,
              accountType,
              selectedBank.accountIndicator || null,
              selectedBank.weightingDigits || null,
              selectedBank.fudgeFactor || null,
              selectedBank.modulus || null,
              selectedBank.exceptCode || null,
              selectedBank.validLengths || null
            );
          }
        ),
    });

    const validateAccountNumber = async () => {
      // let updatedSelectedBank = { ...selectedBank }; // Create a copy of the selectedBank

      // if (
      //   selectedBank.name === "Nedbank Limited" &&
      //   values["account_type"] === "Savings Account"
      // ) {
      //   updatedSelectedBank = {
      //     name: "Nedbank Limited",
      //     universalBankCode: "198765",
      //     swiftCode: "NEDSZAJJXXX",
      //     accountIndicator: 4,
      //     weightingDigits: "11987654321",
      //     fudgeFactor: 18,
      //     modulus: 11,
      //     exceptCode: "p",
      //     validLengths: "10",
      //   };
      // } else if (
      //   selectedBank.name === "Nedbank Limited" &&
      //   values["account_type"] === "Cheque"
      // ) {
      //   updatedSelectedBank = {
      //     name: "Nedbank Limited",
      //     universalBankCode: "198765",
      //     swiftCode: "NEDSZAJJXXX",
      //     accountIndicator: 4,
      //     weightingDigits: "11987654321",
      //     fudgeFactor: 9,
      //     modulus: 11,
      //     exceptCode: null,
      //     validLengths: "10,11",
      //   };
      // }

      // console.log("SB", updatedSelectedBank);

      // setSelectedBank(updatedSelectedBank); // Update the selectedBank with the new values

      try {
        bankValidationSchema.validateSync({
          account_number: values["account_number"],
        });
        setValidationErrors([]);
      } catch (e) {
        setValidationErrors(e.errors);
        setErrors("error");
      }
    };
    validateAccountNumber();
  }, [values]); // Include selectedBank in the dependency array

  return (
    <div className="flex flex-col w-full gap-8">
      <FormInputField
        name={name}
        disabled
        label={"Bank Name"}
        type={"text"}
        required
      />

      <FormInputField
        name="branch_code"
        disabled
        type="text"
        label="Universal Branch Code"
        required
      />
    </div>
  );
};
