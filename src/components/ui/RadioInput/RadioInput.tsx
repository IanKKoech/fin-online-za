import React from "react";
import { Field, useField, useFormikContext } from "formik";
import Link from "next/link";
import { CheckMark } from "../CheckMark/CheckMark";
import { ErrorMessage, Text } from "@/components/ui";

interface RadioInputProps {
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

export const RadioInput: React.FC<RadioInputProps> = ({
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

  return (
    <div className="flex items-center">
      <div className="flex flex-col">
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
          {options.map((option) => (
            <div key={option.label} className="flex items-center">
              <Field
                type="radio"
                id={`${name}-${option.value}`}
                name={name}
                value={option.value}
                checked={field.value === option.value}
                className="hidden"
                onChange={() => setFieldValue(name, option.value)}
              />
              <label
                htmlFor={`${name}-${option.value}`}
                className="cursor-pointer font-bold text-lg dark:text-white flex items-center"
              >
                <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-100 dark:ring-offset-blue-dark dark:bg-transparent mr-2 flex-shrink-0 items-center justify-center">
                  {field.value === option.value && <CheckMark />}
                </div>
                {option.label}
              </label>
            </div>
          ))}
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
    </div>
  );
};
