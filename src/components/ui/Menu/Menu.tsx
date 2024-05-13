import { cn } from "@/lib";
import { Menu as UiMenu } from "@headlessui/react";
import { FC, Fragment, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  position?: "left" | "right";
}

interface ItemProps {
  children?: ReactNode;
  className?: string;
  active?: boolean;
  onClick?: any;
}

interface StaticComponents {
  Button?: FC<Props>;
  Items?: FC<Props>;
  Item?: FC<ItemProps>;
}

export const Menu: FC<Props> & StaticComponents = ({ children, className }) => {
  return (
    <UiMenu
      as="div"
      className={cn("relative inline-block rounded-xl text-left", className)}
    >
      {children}
    </UiMenu>
  );
};

const Button = ({ children }: Props) => {
  return <UiMenu.Button as={Fragment}>{children}</UiMenu.Button>;
};

const Items = ({ children, className, position = "left" }: Props) => (
  <UiMenu.Items
    className={cn(
      "shadow bg-white bg-opacity-80 dark:bg-opacity-90 backdrop-blur-sm text-black dark:bg-blue-darker z-50 border border-gray-50 dark:border-gray-300 absolute mt-1 p-1 rounded-xl w-max max-h-[450px] overflow-y-auto",
      {
        "left-0": position === "left",
        "right-0": position === "right",
      },
      className
    )}
  >
    {children}
  </UiMenu.Items>
);

const Item = ({ onClick, children, className }: ItemProps) => (
  <UiMenu.Item
    as="button"
    className={cn(
      "block hover:bg-primary dark:text-white transition rounded-lg w-full text-left py-2 px-4",
      className
    )}
    onClick={onClick}
  >
    {children}
  </UiMenu.Item>
);

Menu.Button = Button;
Menu.Items = Items;
Menu.Item = Item;
