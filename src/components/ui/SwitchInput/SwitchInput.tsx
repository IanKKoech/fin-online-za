import React from "react";
import { Field, useField, useFormikContext } from "formik";
import Link from "next/link";
import { ErrorMessage, Text } from "@/components/ui";

interface SwitchInputProps {
  name: string;
  label: string;
  options: { value: boolean; label: string }[];
  required?: boolean;
  description?: string;
  link?: {
    url: string;
    label: string;
  };
  onClickLink?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const SwitchInput: React.FC<SwitchInputProps> = ({
  name,
  label,
  options,
  description,
  link,
  onClickLink,
  required,
}) => {
  const [field] = useField<boolean>(name);
  const { setFieldValue } = useFormikContext();

  const handleOptionChange = (value: boolean) => {
    setFieldValue(name, value);
  };

  return (
    <div className="flex items-center">
      <div className="flex flex-col">
        <label
          htmlFor={name}
          className="cursor-pointer font-bold text-lg dark:text-white flex items-center"
        >
          {label}
          <span className="mb-3 font-bold block dark:text-white">
            {required && <span className="text-danger">*</span>}
          </span>
        </label>

        <Text fontSize="lg" color="muted" className="mt-2">
          {description}
        </Text>

        <div className="flex items-center">
          <label className="cursor-pointer flex items-center">
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={field.value}
              onChange={() => handleOptionChange(!field.value)}
              className="hidden"
            />
            <div
              className={`relative w-14 h-9 rounded-full p-1 ${
                field.value ? "bg-primary dark:bg-secondary" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute left-0 w-7 h-7 bg-white dark:bg-gray-800 border border-gray-300 rounded-full transition-transform transform ${
                  field.value ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
            <div className="ml-2">
              <span
                className={`text-lg font-bold ${
                  field.value ? "text-green-500" : "text-red-500"
                }`}
              >
                {field.value ? "Yes" : "No"}
              </span>
            </div>
          </label>
        </div>
      </div>

      <div className="flex items-center">
        {link && (
          <Link
            href={link.url}
            style={{ color: "blue", textDecoration: "underline" }}
            onClick={onClickLink}
          >
            {link.label}
          </Link>
        )}
      </div>
    </div>
  );
};
