import React, { ChangeEvent } from "react";
import { Field, FieldProps, useField } from "formik";
import { HTMLContractViewer } from "@/components/ui";

interface ContractComponentProps {
  contractHtmlContent: string;
}

export const ContractField: React.FC<ContractComponentProps> = ({
  contractHtmlContent,
}) => {
  const [field, meta, helpers] = useField<boolean>("preagreementContract");

  const handleAcceptContract = () => {
    // Handle the logic for accepting the contract
    // You can update the form values or perform any other necessary actions
    helpers.setValue(true); // Update the value of the preagreementContract field
  };

  return (
    <>
      <div>
        <HTMLContractViewer
          htmlContent={contractHtmlContent}
          onAccept={handleAcceptContract}
        />
      </div>
    </>
  );
};
