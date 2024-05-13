import { CSSProperties, ReactNode, FC, JSXElementConstructor } from "react";
import { cn } from "@/lib";

interface Props {
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: ReactNode;
  as?: "div" | "section" | "nav" | "header" | JSXElementConstructor<any>;
  full?: boolean;
}

export const Container: FC<Props> = ({
  className = "",
  style = {},
  as: Tag = "div",
  id,
  children,
  full,
  ...rest
}) => {
  const classes = cn(
    {
      "mx-auto max-w-[90rem] md:px-16": !full,
    },
    className
  );

  return (
    <Tag className={classes} id={id} {...rest}>
      {children}
    </Tag>
  );
};
