import * as yup from "yup";

// Create a Yup schema for the bank account number validation
export const idNumberLuhnSchema = yup
  .string()
  .required("ID Number is required")
  .matches(/^\S*$/, "No spaces allowed in your ID number")
  .matches(
    /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7})){1,13}$/,
    "Invalid South African ID number"
  )
  .test("luhn-validation", "Invalid ID number", function (value) {
    if (!value) {
      return true;
    }
    var number = value.substring(0, value.length - 1);
    return generateLuhnDigit(number) === +value[value.length - 1];
  })
  .test("age-validation", "Age must be between 18 and 65", function (value) {
    const age = calculateAge(value);
    return age >= 18 && age <= 65;
  });

const generateLuhnDigit = (inputString: string): number => {
  let total = 0;
  let count = 0;

  for (let i = 0; i < inputString.length; i++) {
    const multiple = (count % 2) + 1;
    count++;
    let temp = multiple * +inputString[i];
    temp = Math.floor(temp / 10) + (temp % 10);
    total += temp;
  }

  total = (total * 9) % 10;

  return total;
};

// Function to calculate age from South African ID number
function calculateAge(idNumber: string): number | null {
  // Check if the ID number is valid
  const idRegex = /^\d{13}$/;
  if (!idRegex.test(idNumber)) {
    console.error("Invalid South African ID number");
    return null;
  }

  // Extract birthdate information from the ID number
  const year = parseInt(idNumber.substr(0, 2), 10);
  const currentYear = new Date().getFullYear();
  const fullYear = year < 30 ? 2000 + year : 1900 + year;
  const month = parseInt(idNumber.substr(2, 2), 10) - 1;
  const day = parseInt(idNumber.substr(4, 2), 10);

  // Create a Date object with the extracted information
  const birthdate = new Date(fullYear, month, day);

  // Calculate age
  const age = currentYear - birthdate.getFullYear();

  // Adjust age based on birthdate within the current year
  if (new Date(currentYear, month, day) > new Date()) {
    return age - 1;
  }
  return age;
}
