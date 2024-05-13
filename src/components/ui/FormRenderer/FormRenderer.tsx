import React, { ReactNode, useEffect, useState } from "react";
import { AddressData, FormField, Product, ProductCharges } from "AppTypes";
import {
  AddressDetails,
  BankDetails,
  CDEInput,
  CheckboxInput,
  Container,
  CreditLifeField,
  DocumentUpload,
  FormInputField,
  HTMLContractViewer,
  InstalmentField,
  OTPInput,
  PreAgreementField,
  RadioInput,
  Slider,
  SwitchInput,
  Text,
  TruIDKickOff,
} from "@/components/ui";
import { useFormikContext } from "formik";
import { Database as SupabaseDB } from "@/types/supabase";
import { OTPReveal } from "../OTPReveal/OTPReveal";
import { MerchantDetails } from "../MerchantDetails/MerchantDetails";
type OrganisationProduct =
  SupabaseDB["public"]["Tables"]["organisation_products"]["Row"] & {
    products: SupabaseDB["public"]["Tables"]["products"]["Row"];
  };

interface FormRendererProps {
  fields: FormField[];
  setAcceptNiftyCoverContract: React.Dispatch<React.SetStateAction<boolean>>;
  acceptNiftyCoverContract: boolean;
  errors: any;
  touched: any;
  order: string;
  instalment: number;
  products: Product[];
  setInstalment: React.Dispatch<React.SetStateAction<number>>;
  setCharges: React.Dispatch<React.SetStateAction<any>>;
  handleAcceptContract: () => void;
  acceptContract: boolean;
  sliderValues: { loanAmount: number; term: number };
  setSliderValues: React.Dispatch<React.SetStateAction<any>>;
  setIsOnProbation: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCity: AddressData;
  setSelectedCity: React.Dispatch<React.SetStateAction<AddressData>>;
  isOnProbation: boolean;
  contract: string;
  product_charges?: Array<ProductCharges>;
  organisation_product?: OrganisationProduct;
  session?: {
    user?: {
      id: string;
    };
  };
}

export const FormRenderer: React.FC<FormRendererProps> = ({
  fields,
  errors,
  touched,
  order,
  session,
  setAcceptNiftyCoverContract,
  acceptNiftyCoverContract,
  instalment,
  setInstalment,
  setCharges,
  acceptContract,
  handleAcceptContract,
  contract,
  products,
  sliderValues,
  setSliderValues,
  setIsOnProbation,
  setIsLoading,
  isOnProbation,
  selectedCity,
  setSelectedCity,
  product_charges,
  organisation_product,
}) => {
  const [selectedProduct, setSelectedProducts] = useState<Product>({
    term: 0,
    minimum: 0,
    maximum: 0,
  });

  const [isOnContract, setIsOnContract] = useState(false);
  const [isProductSelected, setIsProductSelected] = useState(false);

  const { setFieldValue, values } = useFormikContext();

  useEffect(() => {
    setInstalment(0);
    setFieldValue("instalment", 0);
  }, [sliderValues]);

  useEffect(() => {
    setIsProductSelected(selectedProduct.term === 0);
  }, [selectedProduct]);

  useEffect(() => {
    function isYoungerThanThreeMonths(givenDate: Date): boolean {
      const currentDate = new Date();
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

      return givenDate > threeMonthsAgo;
    }
    setIsOnProbation(
      isYoungerThanThreeMonths(new Date(values["employment_start_date"]))
    );
    setIsOnContract(values["employment_type"] === "4");
  }, [values["employment_start_date"], values["employment_type"]]);

  if (!fields || fields.length === 0) {
    return <div>No fields to render.</div>;
  }

  const renderLabel = (label: string, required: boolean): ReactNode => (
    <span className="mb-3 font-bold block dark:text-white">
      {label}
      {required && <span className="text-danger">*</span>}
    </span>
  );

  const renderError = (fieldName: string): ReactNode => {
    const fieldError = errors[fieldName];
    const shouldShowError = fieldError;
    if (shouldShowError) {
      return <div className="text-red">{fieldError}</div>;
    }
    return null;
  };

  const renderField = (field: FormField): ReactNode => {
    const {
      name,
      label,
      required,
      type,
      prefix,
      signInDisabled,
      options,
      fileType,
      min,
      max,
      step,
      description,
      hidden,
      html,
      requireProduct,
      length,
      link,
      color,
    } = field;

    const renderInputField = (inputType: string): ReactNode => (
      <div className=" w-full">
        <FormInputField
          label={label}
          prefix={prefix}
          name={name}
          disabled={signInDisabled && session?.user?.id ? true : false}
          session={session}
          type={inputType}
          hidden={hidden}
          required={required}
          options={options}
        />
      </div>
    );

    const renderFormField = (): ReactNode => (
      <React.Fragment key={name}>
        <label htmlFor={name}>
          {renderInputField(type)}
          {renderError(name)}
        </label>
      </React.Fragment>
    );

    switch (type) {
      case "select":
        return renderFormField();

      case "text":
        return renderFormField();

      case "number":
        return renderFormField();

      case "date":
        return renderFormField();

      case "otp":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              {renderLabel(label, required)}
              <div className="flex">
                <OTPInput name={name} length={length} />
              </div>
              {renderError(name)}
            </label>
          </React.Fragment>
        );

      case "document":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              {renderLabel(label, required)}
              <div className="flex">
                <DocumentUpload
                  name={name}
                  accept={fileType}
                  allowedSize={10 * 1024 * 1024}
                />
              </div>
              {renderError(name)}
            </label>
          </React.Fragment>
        );

      case "employment_letter":
        return (
          (isOnProbation || isOnContract) && (
            <React.Fragment key={name}>
              <label htmlFor={name}>
                {renderLabel(label, required)}
                <div className="flex">
                  <DocumentUpload
                    name={name}
                    accept={fileType}
                    allowedSize={10 * 1024 * 1024}
                  />
                </div>
                {renderError(name)}
              </label>
            </React.Fragment>
          )
        );

      case "slider":
        return (
          <React.Fragment key={name}>
            <div className="flex">
              <Slider
                name={name}
                min={min}
                max={max}
                step={step}
                prefix={prefix}
                label={label}
                required={required}
                setSliderValues={setSliderValues}
              />
            </div>
            {renderError(name)}
          </React.Fragment>
        );

      case "checkbox":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              <div className="flex">
                <CheckboxInput
                  required={required}
                  name={name}
                  label={label}
                  description={description}
                  link={link}
                />
              </div>

              {renderError(name)}
            </label>
          </React.Fragment>
        );

      case "toggle-checkbox":
        return (
          <React.Fragment key={name}>
            {values["C0014"] && name == "niftyCoverTermsAndConditions" && (
              <label htmlFor={name}>
                <div className="flex">
                  <CheckboxInput
                    required={required}
                    name={name}
                    label={label}
                    description={description}
                    link={link}
                  />
                </div>

                {renderError(name)}
              </label>
            )}
          </React.Fragment>
        );

      case "radio":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              <div className="flex">
                <RadioInput
                  required={required}
                  name={name}
                  label={label}
                  description={description}
                  options={[
                    { value: true, label: "Yes" },
                    { value: false, label: "No" },
                  ]}
                />
              </div>

              {renderError(name)}
            </label>
          </React.Fragment>
        );

      case "switch":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              <div className="flex">
                <SwitchInput
                  required={required}
                  name={name}
                  label={label}
                  description={description}
                  options={[
                    { value: true, label: "Yes" },
                    { value: false, label: "No" },
                  ]}
                />
              </div>

              {renderError(name)}
            </label>
          </React.Fragment>
        );

      case "credit-life-narration":
        return (
          <React.Fragment key={name}>
            <p className="text-center">
              We have you covered with FIN credit life insurance. You will enjoy
              benefits of:
            </p>
            <ul className="ml-8 text-center">
              <li>Retrenchment Cover</li>
              <li>Death Cover</li>
              <li>Temporary and Permanent Disability Cover</li>
            </ul>
            <p className="text-center">
              You can opt to replace our awesome insurance with your own should
              you choose to!
            </p>
          </React.Fragment>
        );

      case "narration":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              <div className="flex p-2">
                <Text
                  fontSize="sm"
                  color="muted"
                  className={`mt-2 text-${color}`}
                >
                  {description}
                </Text>
              </div>
              {renderError(name)}
            </label>
          </React.Fragment>
        );

      case "bank":
        return (
          <React.Fragment key={name}>
            <BankDetails name={name} options={options} errors={errors} />

            {renderError(name)}
          </React.Fragment>
        );

      case "truid":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              <div className="flex">
                <TruIDKickOff
                  description={description}
                  label={label}
                  orderId={order}
                  setIsLoading={setIsLoading}
                />
              </div>
              {renderError(name)}
            </label>
          </React.Fragment>
        );

      case "merchant_details":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              {renderLabel(label, required)}
              <div className="flex">
                <MerchantDetails name={name} orderId={order} errors={errors} />
              </div>
              {renderError(name)}
            </label>
          </React.Fragment>
        );

      case "instalment":
        return (
          <React.Fragment key={name}>
            <div className="flex">
              <InstalmentField
                name={name}
                prefix={prefix}
                sliderValues={sliderValues}
                setInstalment={setInstalment}
                instalment={instalment}
                setCharges={setCharges}
                product_charges={product_charges}
                organisation_product={organisation_product}
                disabled={isProductSelected && requireProduct}
              />
            </div>
            {renderError(name)}
          </React.Fragment>
        );

      case "cde":
        return (
          <React.Fragment key={name}>
            <div className="flex">
              <CDEInput
                setSliderValues={setSliderValues}
                setSelectedProducts={setSelectedProducts}
                selectedProduct={selectedProduct}
                products={products}
              />
            </div>
            {renderError(name)}
          </React.Fragment>
        );

      case "address":
        return (
          <React.Fragment key={name}>
            <AddressDetails
              name={name}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </React.Fragment>
        );

      case "html":
        return (
          <React.Fragment key={name}>
            {values["C0014"] && name == "creditLife" && (
              <label htmlFor={name}>
                {renderLabel(label, required)}
                <div className="flex">
                  <HTMLContractViewer
                    htmlContent={html}
                    onAccept={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </div>
              </label>
            )}
          </React.Fragment>
        );

      case "creditLife":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              {renderLabel(label, required)}
              <div className="flex">
                <CreditLifeField
                  name={name}
                  accept={fileType}
                  contract={html}
                  acceptNiftyCoverContract={acceptNiftyCoverContract}
                  setAcceptNiftyCoverContract={setAcceptNiftyCoverContract}
                />
              </div>
              {renderError(name)}
            </label>
          </React.Fragment>
        );

      case "otp_reveal":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              {renderLabel(label, required)}
              <OTPReveal />
            </label>
          </React.Fragment>
        );

      case "contract":
        return (
          <React.Fragment key={name}>
            <label htmlFor={name}>
              {renderLabel(label, required)}
              <div className="flex">
                <PreAgreementField
                  acceptContract={acceptContract}
                  contract={contract}
                  handleAcceptContract={handleAcceptContract}
                />
              </div>
              {renderError(name)}
            </label>
          </React.Fragment>
        );
      default:
        return null;
    }
  };

  return <>{fields.map((field) => renderField(field))}</>;
};
