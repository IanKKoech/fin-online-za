import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <>
    <FiAlertTriangle data-tip={message} color="red" />
    <Tooltip className={styles["error-tooltip"]} />
  </>
);
