import { FormikErrors, FormikValues } from "formik";
import { DashboardTitle } from "../Title/DashboardTitle";
import { BiError } from "react-icons/bi";

export const ErrorList: React.FC<{ errors: FormikErrors<FormikValues> }> = ({
  errors,
}) => {
  function getUniqueMessages(errors: FormikErrors<FormikValues>): string[] {
    // Extract all values, including nested arrays and FormikErrors
    const allValues: (
      | string
      | string[]
      | FormikErrors<any>
      | FormikErrors<any>[]
    )[] = Object.values(errors);

    // Flatten the array and filter out non-string values
    const messages: string[] = allValues
      .flat(Infinity) // Flatten the array, handling nested arrays
      .filter((value): value is string => typeof value === "string");

    // Use a Set to store unique messages
    const uniqueMessages = new Set(messages);

    // Convert the Set back to an array to get unique messages
    const uniqueMessagesArray = Array.from(uniqueMessages);

    return uniqueMessagesArray;
  }

  console.log(getUniqueMessages(errors));

  return (
    <div className="px-10 py-5 items-center dark:text-white flex flex-col justify-center">
      <BiError color="red" size={40} />
      <DashboardTitle
        text={"Please Clear These Validation Errors To Proceed"}
        additionalStyles="text-center"
      />
      <ul className="mt-4 space-y-2">
        {getUniqueMessages(errors).map((message) => (
          <li key={message} className="border-l-4 border-red-500 pl-2">
            {`${message}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
