import React, { SVGProps } from "react";

interface VerticalDividerProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const VerticalDivider: React.FC<VerticalDividerProps> = ({
  className,
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1"
    height="78"
    className={className}
    {...rest}
  >
    <line x1="0" y1="0" x2="0" y2="100" stroke="black" strokeWidth="1" />
  </svg>
);
