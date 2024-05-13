import React from "react";
import { Field, FieldProps } from "formik";
import { HTMLContractViewer } from "../HTMLContractViewer/HTMLContractViewer";
import { CheckMark } from "../CheckMark/CheckMark";
import { HtmlRenderer } from "../HTMLContractViewer/HTMLRenderer";

interface PreAgreementContractProps {
  contract: string;
  acceptContract: boolean;
  handleAcceptContract: () => void;
}

export const PreAgreementField: React.FC<PreAgreementContractProps> = ({
  contract,
  acceptContract,
  handleAcceptContract,
}) => {
  return (
    <div className="flex-col">
      <>
        <div className="flex-col">
          <HtmlRenderer htmlContent={contract} />
        </div>
      </>
    </div>
  );
};
