import React, { SVGProps } from "react";

interface QouteCloseProps extends SVGProps<SVGSVGElement> {
  primaryColor?: string;
  secondaryColor?: string;
}

export const QouteClose: React.FC<QouteCloseProps> = ({
  width,
  height,
  className = "",
  primaryColor,
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M16.4625 6.54075L16.4438 6.41475L16.4243 6.41925C16.291 5.79603 15.984 5.22327 15.5388 4.76726C15.0936 4.31125 14.5283 3.99062 13.9085 3.84246C13.2886 3.69431 12.6395 3.72468 12.0362 3.93008C11.4329 4.13548 10.9001 4.5075 10.4994 5.00309C10.0987 5.49869 9.84652 6.09761 9.77203 6.73056C9.69755 7.3635 9.8038 8.0046 10.0785 8.57968C10.3532 9.15475 10.7851 9.6403 11.3242 9.98014C11.8634 10.32 12.4877 10.5002 13.125 10.5C13.2923 10.5 13.4528 10.4745 13.6125 10.4513C13.5608 10.6253 13.5075 10.8022 13.422 10.9612C13.3365 11.1922 13.203 11.3925 13.0703 11.5942C12.9593 11.8125 12.7635 11.9602 12.6195 12.147C12.4688 12.3285 12.2633 12.4492 12.1005 12.6C11.9408 12.7575 11.7315 12.8363 11.565 12.9473C11.391 13.047 11.2395 13.1573 11.0775 13.2098L10.6733 13.3762L10.3178 13.524L10.6808 14.9783L11.1285 14.8702C11.2718 14.8342 11.4465 14.7922 11.6453 14.742C11.8485 14.7045 12.0653 14.6017 12.3068 14.508C12.5445 14.4008 12.8213 14.3295 13.0778 14.1578C13.3358 13.9943 13.6335 13.8577 13.896 13.6388C14.1503 13.413 14.457 13.2172 14.6835 12.9307C14.931 12.6622 15.1755 12.3802 15.3653 12.0592C15.585 11.7533 15.7343 11.4172 15.8918 11.085C16.0343 10.7527 16.149 10.413 16.2428 10.083C16.4205 9.4215 16.5 8.793 16.5308 8.25525C16.5563 7.71675 16.5413 7.269 16.5098 6.945C16.4992 6.80969 16.4835 6.67484 16.4625 6.54075ZM8.21254 6.54075L8.19379 6.41475L8.17429 6.41925C8.04102 5.79603 7.73401 5.22327 7.28879 4.76726C6.84358 4.31125 6.27834 3.99062 5.65849 3.84246C5.03863 3.69431 4.3895 3.72468 3.78619 3.93008C3.18289 4.13548 2.65006 4.5075 2.24938 5.00309C1.84869 5.49869 1.59652 6.09761 1.52203 6.73056C1.44755 7.3635 1.5538 8.0046 1.82849 8.57968C2.10318 9.15475 2.53509 9.6403 3.07423 9.98014C3.61338 10.32 4.23773 10.5002 4.87504 10.5C5.04229 10.5 5.20279 10.4745 5.36254 10.4513C5.31079 10.6253 5.25754 10.8022 5.17204 10.9612C5.08654 11.1922 4.95304 11.3925 4.82029 11.5942C4.70929 11.8125 4.51354 11.9602 4.36954 12.147C4.21879 12.3285 4.01329 12.4492 3.85054 12.6C3.69079 12.7575 3.48154 12.8363 3.31504 12.9473C3.14104 13.047 2.98954 13.1573 2.82754 13.2098L2.42329 13.3762C2.19754 13.4685 2.06854 13.5225 2.06854 13.5225L2.43154 14.9767L2.87929 14.8688C3.02254 14.8328 3.19729 14.7907 3.39604 14.7405C3.59929 14.703 3.81604 14.6002 4.05754 14.5065C4.29529 14.3992 4.57204 14.328 4.82854 14.1562C5.08654 13.9928 5.38429 13.8563 5.64679 13.6373C5.90104 13.4115 6.20779 13.2158 6.43429 12.9293C6.68179 12.6608 6.92629 12.3787 7.11604 12.0577C7.33579 11.7517 7.48504 11.4158 7.64254 11.0835C7.78504 10.7512 7.89979 10.4115 7.99354 10.0815C8.17129 9.42 8.25079 8.7915 8.28154 8.25375C8.30704 7.71525 8.29204 7.2675 8.26054 6.9435C8.24934 6.80872 8.23333 6.67439 8.21254 6.54075Z"
      fill="#068353"
    />
  </svg>
);