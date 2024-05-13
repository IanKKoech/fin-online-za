// Custom Yup validation function for check digit validation
import * as Yup from "yup";

export const bankAccountCDVSchema = (
  accountType: number,
  accountIndicator: number,
  weightingDigits: string,
  fudgeFactor: number,
  modulus: number,
  exceptCode: string,
  validLength: string
) => {
  return Yup.string().test(
    "checkDigit",
    "Invalid Bank Account",
    function (value) {
      if (!value) {
        console.log("No value provided");
        return true; // Skip validation if value is not provided
      }
      if (
        !accountIndicator &&
        !weightingDigits &&
        !fudgeFactor &&
        !modulus &&
        !exceptCode &&
        !validLength
      ) {
        console.log("No configurations exist");
        return true; // Skip validation if no configurations exist
      }
      return isValidRsaAccountNumber(
        value,
        accountType,
        accountIndicator,
        weightingDigits,
        fudgeFactor,
        modulus,
        exceptCode,
        validLength
      );
    }
  );
};

function isValidRsaAccountNumber(
  accountNumber,
  accountType,
  accountIndicator,
  weightingDigits,
  fudgeFactor,
  modulus,
  exceptCode,
  validLengths
) {
  if (accountIndicator === 0) {
    return true;
  }

  if (validLengths !== "") {
    console.log("validLengths", validLengths);
    const validLengthList = validLengths.split(",");
    let isValidLength = false;
    for (const validLength of validLengthList) {
      const lengthVal = parseInt(validLength, 10);
      if (!isNaN(lengthVal) && accountNumber.length === lengthVal) {
        isValidLength = true;
      }
    }

    if (!isValidLength) {
      console.log("Invalid length");
      return false;
    }
  }

  if (exceptCode === "f") {
    console.log("exceptCode f");
    if (
      accountNumber.length === 11 &&
      accountNumber.startsWith("53") &&
      isValidRsaAccountNumber(
        accountNumber,
        2,
        4,
        "00000000000",
        0,
        0,
        null,
        validLengths
      )
    ) {
      console.log("exceptCode f - 53");
      return true;
    }

    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        "17329874321",
        0,
        10,
        null,
        validLengths
      )
    ) {
      console.log("exceptCode f - 17329874321");
      return true;
    }

    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        "14327654321",
        0,
        11,
        null,
        validLengths
      )
    ) {
      console.log("exceptCode f - 14327654321");
      return true;
    }

    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        "54327654321",
        0,
        11,
        "ff",
        validLengths
      )
    ) {
      return true;
    }

    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        "11327654321",
        0,
        11,
        null,
        validLengths
      )
    ) {
      console.log("exceptCode f - 11327654321");
      return true;
    }

    if (accountNumber.length < 10) {
      if (
        isValidRsaAccountNumber(
          accountNumber,
          accountType,
          accountIndicator,
          "11327654321",
          0,
          11,
          "fff",
          validLengths
        )
      ) {
        return true;
      }
    }

    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        "14329874321",
        0,
        10,
        null,
        validLengths
      )
    ) {
      return true;
    }

    return false;
  }

  if (exceptCode === "i") {
    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        weightingDigits,
        fudgeFactor,
        modulus,
        null,
        validLengths
      )
    ) {
      return true;
    }

    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        "DCBA987654321",
        0,
        11,
        null,
        validLengths
      )
    ) {
      return true;
    }

    return false;
  }

  if (exceptCode === "m") {
    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        weightingDigits,
        fudgeFactor,
        modulus,
        null,
        validLengths
      )
    ) {
      return true;
    }

    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        "DC987654321",
        0,
        11,
        null,
        validLengths
      )
    ) {
      return true;
    }

    return false;
  }

  if (exceptCode === "n") {
    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        weightingDigits,
        fudgeFactor,
        modulus,
        null,
        validLengths
      )
    ) {
      return true;
    }

    if (!accountNumber.startsWith("6")) {
      return false;
    }

    if (
      isValidRsaAccountNumber(
        accountNumber,
        accountType,
        accountIndicator,
        "DC987654321",
        0,
        11,
        null,
        validLengths
      )
    ) {
      return true;
    }

    return false;
  }

  if (accountNumber.length < weightingDigits.length) {
    accountNumber = accountNumber.padStart(weightingDigits.length, "0");
  }

  if (weightingDigits.length < accountNumber.length) {
    weightingDigits = weightingDigits.padStart(accountNumber.length, "0");
  }

  let sumTotal = 0;
  let pos = accountNumber.length - 1;
  while (pos >= 0) {
    let accDigit = parseInt(accountNumber[pos]);
    let weightDigit = 0;
    if (!isNaN(parseInt(weightingDigits[pos]))) {
      weightDigit = parseInt(weightingDigits[pos]);
    } else {
      weightDigit = weightingDigits.toUpperCase().charCodeAt(pos) - 55;
    }

    if (exceptCode === "fff" && pos === accountNumber.length - 1) {
      accDigit += 6;
      if (accDigit > 10) {
        accDigit -= 10;
      }
    }

    sumTotal += accDigit * weightDigit;
    pos--;
  }

  let moduloResult =
    sumTotal + fudgeFactor === 0 && modulus === 0
      ? 0
      : (sumTotal + fudgeFactor) % modulus;

  if (
    exceptCode === "ff" &&
    moduloResult === 1 &&
    (accountNumber.endsWith("0") || accountNumber.endsWith("1"))
  ) {
    return true;
  }

  if (exceptCode === "p" && moduloResult !== 0 && accountType === 2) {
    weightingDigits = "14329874321";
    fudgeFactor = 0;
    modulus = 10;

    sumTotal = 0;
    pos = accountNumber.length - 1;
    while (pos >= 0) {
      const accDigit = parseInt(accountNumber[pos]);
      let weightDigit = 0;
      if (!isNaN(parseInt(weightingDigits[pos]))) {
        weightDigit = parseInt(weightingDigits[pos]);
      } else {
        weightDigit = weightingDigits.toUpperCase().charCodeAt(pos) - 64;
      }

      sumTotal += accDigit * weightDigit;
      pos--;
    }

    if (sumTotal + fudgeFactor === 0) {
      return false;
    }

    moduloResult = (sumTotal + fudgeFactor) % modulus;
  }

  if (
    moduloResult !== 0 &&
    weightingDigits.includes("12121212121") &&
    accountType === 1
  ) {
    return isValidRsaAccountNumber(
      accountNumber,
      accountType,
      accountIndicator,
      "DA987654321",
      0,
      11,
      null,
      validLengths
    );
  }
  console.log("moduloResult", moduloResult);
  return moduloResult === 0;
}

export const validateBankAccount = (
  accountNumber: string,
  accountType: number,
  accountIndicator: number,
  weightingDigits: string,
  fudgeFactor: number,
  modulus: number,
  exceptCode: string,
  validLength: string
) => {
  return bankAccountCDVSchema(
    accountType,
    accountIndicator,
    weightingDigits,
    fudgeFactor,
    modulus,
    exceptCode,
    validLength
  ).isValidSync(accountNumber);
};
