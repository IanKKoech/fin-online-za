import React, { useState } from "react";
import { Field, FieldProps, useFormikContext } from "formik";
import styles from "./Slider.module.scss"; // Import the SCSS module
import {
  CurrencyFormat,
  Dialog,
  ErrorList,
  ErrorMessage,
} from "@/components/ui";
import { cn } from "@/lib";

interface SliderFieldProps {
  name: string;
  min: number;
  max: number;
  step: number;
  label: string;
  prefix?: string;
  required?: boolean;
  disabled?: boolean;
  setSliderValues: React.Dispatch<React.SetStateAction<any>>;
}

export const Slider: React.FC<SliderFieldProps> = ({
  name,
  min,
  max,
  step,
  label,
  required,
  disabled,
  setSliderValues,
  prefix,
}) => {
  const { isSubmitting, setFieldValue, setFieldError } = useFormikContext();
  const [hasError, setHasError] = useState(false);
  const [errors, setErrors] = useState({ errorMessage: "" });
  const excludedValues: number[] = [7, 8, 10, 11];
  const handleAmountSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = +e.currentTarget.value;
    const field = e.currentTarget.name;

    setSliderValues((prevFormValues) => ({
      ...prevFormValues,
      [field]: newValue,
    }));
    setFieldValue(field, newValue);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.currentTarget.name;
    let newValue = +e.currentTarget.value;
    if (excludedValues.includes(newValue)) {
      newValue = findClosestAllowedValue(newValue);
    }

    setSliderValues((prevFormValues) => ({
      ...prevFormValues,
      [field]: newValue,
    }));
    setFieldValue(field, newValue);
  };

  const findClosestAllowedValue = (val: number): number => {
    let closestValue = val;
    while (excludedValues.includes(closestValue)) {
      closestValue--;
      if (closestValue < 3) {
        closestValue = val;
        while (excludedValues.includes(closestValue)) {
          closestValue++;
          if (closestValue > 12) {
            return val;
          }
        }
        return closestValue;
      }
    }
    return closestValue;
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.currentTarget.name.replace("-text", "");
    const newValue = +e.currentTarget.value;

    setSliderValues((prevFormValues) => ({
      ...prevFormValues,
      [field]: newValue,
    }));
    setFieldValue(field, newValue);
  };

  const handleInputedText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.currentTarget.value;
    const field = e.currentTarget.name.replace("-text", "");
    if (newValue > max || newValue < min) {
      setErrors({
        errorMessage: `${field} cannot be greater than ${max} or less than ${min}`,
      });
      setHasError(true);
      setSliderValues((prevFormValues) => ({
        ...prevFormValues,
        [field]: 0,
      }));
      setFieldValue(field, 0);
    }
  };

  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps<number>) => (
        <div className="flex flex-col items-center pt-10 w-full">
          <div className="md:w-1/2 w-full lg:h-32 px-3.5 py-4 rounded-tl-lg rounded-tr-lg rounded-bl-sm rounded-br-sm border-l-2 border-r-2 border-t-2 border-gray-textbox justify-between items-start gap-2.5 inline-flex">
            <div className="w-full flex-col justify-center items-center gap-1.5 inline-flex">
              <div className="text-gray-300 py-2 lg:text-xl text-xs font-semibold uppercase">
                {label}
              </div>
              {name == "loanAmount" ? <div className="text-slate-950 text-base font-semibold">
                <CurrencyFormat
                  amount={field.value}
                  className="lg:text-3xl text-xl"
                />
              </div>:<div className="text-slate-950 text-base font-semibold lg:text-3xl text-xl">
                
              {field.value} months
              </div>}
            </div>
            {/* <div className="justify-center items-center flex">
                <div className="text-right py-2 text-gray-300 lg:text-xl text-xs font-semibold">
                  RANDS
                </div>
              </div> */}
          </div>

          <div className="md:w-1/2 w-full pb-4 flex items-end justify-center mb-[-1px]">
            <input
              type="range"
              className=" w-full slider-input"
              name={`${field.name}-text`}
              max={max}
              min={min}
              value={field.value}
              step={step}
              {...field}
              onChange={handleAmountSliderChange}
              aria-label={label}
              style={
                {
                  "--progress-value": `${
                    ((field.value - min) / (max - min)) * 100
                  }%`,
                } as React.CSSProperties
              }
            />
          </div>
        </div>
      )}
    </Field>
  );
};
