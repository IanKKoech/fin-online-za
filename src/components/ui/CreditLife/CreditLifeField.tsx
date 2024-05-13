import React, { useState } from "react";
import { Field, FieldProps, ErrorMessage, FormikConsumer } from "formik";
import cn from "classnames";
import { CheckMark, HTMLContractViewer } from "@/components/ui";
import { creditLifePolicy } from "@/utils/creditLifePolicy";

export const CreditLifeField = ({
  name,
  accept,
  contract,
  acceptNiftyCoverContract,
  setAcceptNiftyCoverContract,
}) => {
  const [isNiftyCover, setIsNiftyCover] = useState(true);

  const handleAcceptNiftyCoverContract = () => {
    setAcceptNiftyCoverContract((prevValue) => !prevValue);
  };

  return (
    <div className="flex-col">
      <div className="flex">
        <Field name="niftyCredit">
          {({ field, form }: FieldProps<any>) => (
            <label className="flex items-center">
              <input
                className={cn(
                  "w-5 h-5 aspect-square rounded-sm checked:accent-primary mr-10"
                )}
                id="employmentLetter"
                name="employmentLetter"
                type="radio"
                defaultChecked
                accept={accept}
                required
                onChange={(event) => {
                  field.onChange(event);
                  form.setFieldValue("creditLifePolicy", "Nifty Cover");
                  setIsNiftyCover(true);
                }}
              />
              <span className="mb-3 mt-3 font-bold block dark:text-white">
                Nifty Cover
              </span>
            </label>
          )}
        </Field>
      </div>
      <div className="flex">
        <Field name="ownCreditLife">
          {({ field, form }: FieldProps<any>) => (
            <label className="flex items-center">
              <input
                className={cn(
                  "w-5 h-5 aspect-square rounded-sm checked:accent-primary mr-10"
                )}
                id="employmentLetter"
                name="employmentLetter"
                type="radio"
                accept={accept}
                required
                onChange={(event) => {
                  field.onChange(event);
                  form.setFieldValue("creditLifePolicy", "Own Cover");
                  setIsNiftyCover(false);
                }}
              />
              <span className="mb-3 mt-3 font-bold block dark:text-white">
                Own Cover
              </span>
            </label>
          )}
        </Field>
      </div>
      <FormikConsumer>
        {(form) => (
          <>
            {form.values.creditLifePolicy === "Own Cover" ? (
              <>
                <p>
                  You may choose to provide proof of existing insurance that
                  covers the same minimum benefits offered by Nifty Cover. Your
                  loan application will be suspended until you have supplied the
                  credit provider with the replacement policy T & Cs together
                  with NCR forms 22 and 23. The replacement policy will need to
                  be accepted and ceded to the credit provider.
                </p>
                <span className="mb-3 mt-3 font-bold block dark:text-white">
                  Upload Credit Life Policy
                  <span className="text-danger">*</span>
                </span>
                <div className="flex">
                  <Field name="ownCreditLifeDocument">
                    {({ field }: FieldProps<any>) => (
                      <>
                        <input
                          className={cn(
                            "w-full rounded border dark:bg-transparent border-gray-100 dark:border-gray-300 dark:ring-offset-blue-dark py-3 px-5 placeholder:text-gray-200 read-only:cursor-default focus:border-gray-100 dark:focus:border-gray-300 focus:outline-0 focus:ring focus:ring-primary focus:ring-offset-2 read-only:focus:ring-0 2xl:py-3 dark:text-white"
                          )}
                          disabled={acceptNiftyCoverContract}
                          id="ownCreditLifeDocument"
                          name="ownCreditLifeDocument"
                          type="file"
                          accept={accept}
                          required
                          onChange={(event) => {
                            const file = event.target.files[0];
                            field.onChange(event);
                            form.setFieldValue("ownCreditLifeDocument", file);
                          }}
                        />
                        {acceptNiftyCoverContract && (
                          <p className="error text-red">
                            You have accepted to use Nifty Cover
                          </p>
                        )}
                      </>
                    )}
                  </Field>
                </div>
              </>
            ) : (
              <>
                <div className="flex-col">
                  <HTMLContractViewer
                    htmlContent={creditLifePolicy}
                    onAccept={handleAcceptNiftyCoverContract}
                  />
                </div>

                <Field name="niftyCoverTermsAndConditions">
                  {({ field, form }: FieldProps<boolean>) => (
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="niftyCoverTermsAndConditions"
                          name="niftyCoverTermsAndConditions"
                          className="hidden"
                          checked={field.value}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            form.setFieldValue(
                              "niftyCoverTermsAndConditions",
                              e.target.checked
                            );
                            handleAcceptNiftyCoverContract();
                          }}
                        />
                      </div>
                    </div>
                  )}
                </Field>
              </>
            )}
          </>
        )}
      </FormikConsumer>
    </div>
  );
};
