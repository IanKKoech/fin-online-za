import {
  FC,
  forwardRef,
  ButtonHTMLAttributes,
  JSXElementConstructor,
  ReactElement,
} from "react";
import Link from "next/link";
import { cn } from "@/lib";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import s from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
  active?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  size?: "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "pulse"
    | "danger"
    | "info"
    | "warning"
    | "secondary"
    | "outline"
    | "naked"
    | "outlinedanger"
    | "rounded"
    | "dashboardPrimary"
    | "dashboardSecondary";
  as?: "button" | "a" | JSXElementConstructor<any>;
}

export const Button: FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    as: Tag = "button",
    variant = "primary",
    size = "md",
    target = "_self",
    loading = false,
    href,
    active,
    rightIcon,
    leftIcon,
    className,
    disabled,
    children,
    ...rest
  } = props;

  // Calculate explicit width based on size
  const explicitWidth =
    size === "lg" ? "150px" : size === "sm" ? "100px" : "150px";

  const classes = cn(
    s.root,
    {
      [s.primary]: variant === "primary",
      [s.pulse]: variant === "pulse",
      [s.danger]: variant === "danger",
      [s.info]: variant === "info",
      [s.warning]: variant === "warning",
      [s.naked]: variant === "naked",
      [s.outline]: variant === "outline",
      [s.outlinedanger]: variant === "outlinedanger",
      [s.secondary]: variant === "secondary",
      [s.rounded]: variant === "rounded",
      [s.dashboardPrimary]: variant === "dashboardPrimary",
      [s.dashboardSecondary]: variant === "dashboardSecondary",
      [s.md]: size === "md",
      [s.sm]: size === "sm",
      [s.lg]: size === "lg",
      [s.dFlex]: (rightIcon || leftIcon || loading) && size === "lg",
      [s.dFlexSm]:
        (rightIcon || leftIcon || loading) && (size === "sm" || size === "md"),
      [s.active]: active,
    },
    className
  );

  // Add explicit width style to the Tag element
  const tagProps = {
    ...rest,
    style: { width: explicitWidth },
    disabled: disabled,
    className: classes,
    ref: buttonRef,
  };

  return (
    <>
      {href ? (
        <Tag {...tagProps}>
          <Link href={href} target={target} passHref>
            <a className={classes}>
              {leftIcon}
              {children}
              {rightIcon}
            </a>
          </Link>
        </Tag>
      ) : (
        <Tag {...tagProps}>
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin" />
              Loading...
            </>
          ) : (
            <>
              {leftIcon}
              {children}
              {rightIcon}
            </>
          )}
        </Tag>
      )}
    </>
  );
});

Button.displayName = "Button";
