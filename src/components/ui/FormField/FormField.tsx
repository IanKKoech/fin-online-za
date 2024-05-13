import { cn } from "@/lib";
import { useField, Field, ErrorMessage } from "formik";
import React from "react";

interface FormFieldProps {
  fieldName: string;
  type: string;
}

export const FormField: React.FC<FormFieldProps> = ({ fieldName, type }) => {
  const [fieldProps, meta] = useField(fieldName);

  return (
    <React.Fragment>
      <label htmlFor={fieldName}>
        <span className="mb-3 block dark:text-white">{fieldName}</span>
        <Field
          className={cn(
            "w-full rounded border dark:bg-transparent border-gray-100 dark:border-gray-300 dark:ring-offset-blue-dark py-3 px-5 placeholder:text-gray-200 read-only:cursor-default focus:border-gray-100 dark:focus:border-gray-300 focus:outline-0 focus:ring focus:ring-primary focus:ring-offset-2 read-only:focus:ring-0 2xl:py-3 dark:text-white",
            { "border-red-500": meta.touched && meta.error } // Add error styling conditionally
          )}
          id={fieldName}
          as={type} // Use the "type" prop as the "as" prop value
          {...fieldProps}
        />
      </label>
      <ErrorMessage name={fieldName} component="div" className="error" />
    </React.Fragment>
  );
};
