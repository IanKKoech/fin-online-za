import React, { useState } from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import { Field, useField, useFormikContext } from "formik";
import { DashboardTitle, Dialog, ErrorMessage } from "@/components/ui";
import { cn } from "@/lib";
import { BiError } from "react-icons/bi";

export const FormInputField = ({
  name,
  disabled,
  type,
  hidden,
  required,
  label,
  options,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const isDateType = type === "date";

  let isSalaryPaymentDate = false;

  if (name == "next_salary_payment_date") isSalaryPaymentDate = true;

  const today = new Date();
  const minDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days from now

  const numericPattern: RegExp = /^(?:0|\d*\.?\d+|\d+\.?)$/;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === "number" && event.target.value.startsWith("0")) {
      event.target.value = event.target.value.replace(/^0/, "");
    }
    const userInput = event.target.value;

    if (event.target.type === "number" && !numericPattern.test(userInput)) {
      setIsOpen(true);
      setFieldValue(event.target.name, 0);
    } else {
      setFieldValue(event.target.name, userInput);
    }
  };

  return (
    <div className={cn("relative", hidden && "hidden")}>
      <Transition in={isFocused} timeout={300}>
        {(state) => (
          <label
            htmlFor={name}
            className={`absolute transition-all duration-300 ${
              state === "entered" ||
              field.value !== "" ||
              type === "date" ||
              name === "bank_name" ||
              name === "branch_code"
                ? "text-gray-600 text-sm -top-2 left-2 bg-white font-bold block dark:text-white"
                : "text-gray-500 text-base top-3 left-5"
            }`}
          >
            {label}
            {required && <span className="text-danger">*</span>}
          </label>
        )}
      </Transition>

      <Field
        type={type}
        as={type === "select" ? type : null}
        name={name}
        onChange={(e) => {
          handleInputChange(e);
        }}
        id={name}
        disabled={disabled}
        hidden={hidden}
        min={
          isDateType && isSalaryPaymentDate
            ? minDate.toISOString().split("T")[0]
            : undefined
        }
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder=""
        className={cn(
          "w-full p-2 pl-8 bg-transparent dark:text-white dark:ring-offset-blue-dark dark:border-gray-300 dark:focus:border-gray-300 py-3 px-5 placeholder:text-gray-200 focus:border-gray-100 focus:outline-0 focus:ring focus:ring-primary focus:ring-offset-2 2xl:py-4",
          isFocused
            ? "rounded-full border-b border-gray-600"
            : "border-b border-gray-100",
          disabled && "cursor-not-allowed dark:bg-gray-700",
          meta.error && "border-red focus:ring-red animate-shake-slightly"
        )}
      >
        {options && (
          <>
            <option value=""></option>
            {options.map((option, index) => (
              <option value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </>
        )}
      </Field>
      <Dialog
        hideClose={false}
        hideButton={false}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="px-10 py-5 items-center dark:text-white flex flex-col justify-center">
          <BiError color="red" size={40} />
          <DashboardTitle
            text={"Please Clear These Validation Errors To Proceed"}
            additionalStyles="text-center"
          />
          <ul className="mt-4 space-y-2">
            <li className="border-l-4 border-red-500 pl-2">
              Only numerical values allowed
            </li>
          </ul>
        </div>
      </Dialog>
    </div>
  );
};

FormInputField.propTypes = {
  prefix: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  required: PropTypes.bool,
  session: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string,
};
