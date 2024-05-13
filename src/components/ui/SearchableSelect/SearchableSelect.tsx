import React, { useState } from "react";
import { useField } from "formik";
import Select, { StylesConfig } from "react-select";
import styles from "./SearchableSelect.module.scss";
import { Option } from "AppTypes";
import { Transition } from "react-transition-group";
import { cn } from "@/lib";

interface SearchableSelectProps {
  name: string;
  options: Option[];
  required?: boolean;
  disabled?: boolean;
  label: string;
}

export const SearchableSelect: React.FC<SearchableSelectProps> = ({
  name,
  options,
  required,
  disabled,
  label,
}) => {
  const [field, meta, helpers] = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    helpers.setValue(selectedOption?.value || null);
  };

  const handleBlur = () => {
    helpers.setTouched(true);
    setIsFocused(false);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const selectedOption = options.find((option) => option.value === field.value);
  return (
    <div className="relative">
      <Transition in={isFocused} timeout={300}>
        {(state) => (
          <label
            htmlFor={name}
            className={`absolute transition-all duration-300 ${
              state === "entered" || field.value !== ""
                ? "text-gray-600 text-sm -top-2 left-2 bg-white font-bold block dark:text-white"
                : "text-gray-500 text-base top-3 left-5"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {label}
            {required && <span className="text-danger">*</span>}
          </label>
        )}
      </Transition>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleInputFocus}
        isSearchable
        classNames={{
          control: (state) =>
            state.isFocused ? "focus:ring-ed" : "border-grey-300",
        }}
      />

      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  );
};
