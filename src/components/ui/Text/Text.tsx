import { cn } from "@/lib/classnames";
import React, { FC, CSSProperties, ReactNode } from "react";

import s from "./Text.module.scss";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type Casing = "uppercase" | "lowercase" | "capitalize" | "none";
type Weight = "light" | "normal" | "medium" | "bold";
type Align = "left" | "center" | "right";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "inherit";
type Color = "primary" | "muted" | "secondary" | "black" | "white";

interface Props {
  as?: Variant;
  title?: string;
  fontSize?: Size;
  color?: Color;
  fontWeight?: Weight;
  textTransform?: Casing;
  align?: Align;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode | any;
  html?: string;
}

export const Text: FC<Props> = ({
  as: Tag = "p",
  fontSize = "inherit",
  fontWeight = "normal",
  textTransform = "none",
  color = "black",
  className = "",
  align,
  style = {},
  children,
  html,
  ...rest
}) => {
  const classes = cn(
    s.root,
    {
      [s.sm]: fontSize === "sm",
      [s.md]: fontSize === "md",
      [s.lg]: fontSize === "lg",
      [s.xl]: fontSize === "xl",
      [s.xxl]: fontSize === "2xl",
      [s.xxxl]: fontSize === "3xl",
      [s.transformNone]: textTransform === "none",
      [s.textUppercase]: textTransform === "uppercase",
      [s.textLowercase]: textTransform === "lowercase",
      [s.textCapitalize]: textTransform === "capitalize",
      [s.left]: align === "left",
      [s.center]: align === "center",
      [s.right]: align === "right",
      [s.weightLight]: fontWeight === "light",
      [s.weightNormal]: fontWeight === "normal",
      [s.weightMedium]: fontWeight === "medium",
      [s.weightBold]: fontWeight === "bold",
      [s.colorPrimary]: color === "primary",
      [s.colorMuted]: color === "muted",
      [s.colorSecondary]: color === "secondary",
      [s.colorBlack]: color === "black",
      [s.colorWhite]: color === "white",
    },
    className
  );

  const htmlProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  return (
    <Tag className={classes} {...rest} {...htmlProps}>
      {children}
    </Tag>
  );
};
