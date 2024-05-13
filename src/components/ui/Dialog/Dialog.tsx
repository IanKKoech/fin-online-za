import { ReactNode } from "react";
import { Dialog as HeDialog } from "@headlessui/react";
import { MdOutlineClose } from "react-icons/md";
import { cn } from "@/lib";

import { Text, Flex } from "@/components/ui";

interface Props {
  size?: "sm" | "md" | "lg";
  title?: string | ReactNode;
  children: ReactNode;
  hideClose?: boolean;
  hideButton?: boolean;
  isOpen: boolean;
  backdropFill?: "bg-black/30" | "bg-black/70";
  onClose: () => void;
}

export const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  hideClose = false,
  hideButton = false,
  backdropFill = "bg-black/30",
  size = "md",
}: Props) => {
  return (
    <HeDialog open={isOpen} onClose={onClose} className="relative z-[200]">
      <div
        className={`fixed inset-0 flex items-center justify-center ${backdropFill} p-4 backdrop-blur-[2px] dark:bg-black/80`}
      >
        <HeDialog.Panel
          className={cn(
            "w-full rounded-2xl bg-white overflow-hidden shadow-lg shadow-black/40 dark:bg-blue-dark",
            {
              "max-w-md": size === "sm",
              "max-w-xl": size === "md",
              "max-w-6xl": size === "lg",
            }
          )}
        >
          {title && (
            <Flex
              align="center"
              justify="center"
              className={cn("relative rounded-t px-4 py-3", {
                "py-4": hideClose,
              })}
            >
              <Text
                as="h3"
                fontWeight="bold"
                fontSize="xl"
                className="relative top-[2px]"
              >
                {title}
              </Text>
              {!hideClose && (
                <button
                  onClick={onClose}
                  className="absolute right-0 top-0 flex-shrink p-2 "
                >
                  <MdOutlineClose className="h-8 w-auto rounded-xl bg-black/5 ring-danger/70 ring-offset-2 transition hover:bg-danger/20 hover:text-danger hover:ring focus:outline-0 focus:ring focus:ring-black/30 dark:bg-blue-darker dark:text-white dark:ring-offset-blue-dark" />
                </button>
              )}
            </Flex>
          )}
          <div className="max-h-[85vh] overflow-y-auto">{children}</div>
          {!hideButton && (
            <div className="flex flex-shrink justify-center p-6">
              <button onClick={onClose}>
                <Text
                  as="h3"
                  fontWeight="medium"
                  fontSize="2xl"
                  className="relative top-[2px]"
                >
                  Close
                </Text>
              </button>
            </div>
          )}
        </HeDialog.Panel>
      </div>
    </HeDialog>
  );
};
