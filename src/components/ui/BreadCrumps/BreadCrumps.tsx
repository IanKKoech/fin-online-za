import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import { Flex } from "..";
import { cn } from "@/lib";
interface BreadCrump {
  name: string;
  url: string;
}

export const BreadCrumps = ({ breadCrumps }: { breadCrumps: BreadCrump[] }) => {
  return (
    <Flex className="mb-4 gap-2">
      {breadCrumps.map(({ name, url }, idx) => (
        <Link
          className={cn(
            "flex items-center gap-2 text-[0.95rem] font-semibold capitalize text-gray-300/60 transition hover:text-primary dark:text-gray-200 dark:hover:text-primary",
            {
              "text-gray-300/90 dark:text-white":
                idx + 1 === breadCrumps.length,
            }
          )}
          key={idx}
          href={url}
        >
          {name.toLocaleLowerCase()}
          <IoIosArrowForward
            className={cn("h-[0.8rem] w-auto", {
              hidden: idx + 1 === breadCrumps.length,
            })}
          />
        </Link>
      ))}
    </Flex>
  );
};
