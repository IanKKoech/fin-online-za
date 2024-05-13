import React, { useRef, useState } from "react";
import { Qoute } from "../Quote/Quote";
import { QouteClose } from "../QuoteClose/QuoteClose";
import Image from "next/image";
import { cn } from "@/lib";

interface CarouselItem {
  name: string;
  role: string;
  imageSrc: any;
  alt: string;
  quote: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">(
    "right"
  );

  const scrollItems = items.concat(items); // Duplicate items for seamless looping

  const goToPreviousItem = () => {
    setScrollDirection("left"); // Change scroll direction to left
  };

  const goToNextItem = () => {
    setScrollDirection("right"); // Change scroll direction to right
  };

  return (
    <div className="carousel-wrapper pt-10 relative">
      <button className="carousel-chevron left" onClick={goToPreviousItem}>
        &lt;{/* Left chevron */}
      </button>
      <div className={cn("carousel p-10", scrollDirection)} ref={carouselRef}>
        {scrollItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="flex w-4/5 flex-col h-full  p-10 relative rounded-xl shadow-xl">
              <div className="flex w-full pb-5">
                <div className="flex top-0 text-black text-opacity-90 text-lg font-normal leading-loose">
                  {item.quote}
                  <br />
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex w-full border border-zinc-500" />
                <div className="flex justify-start pt-5 items-center gap-4 ">
                  <Image
                    src={item.imageSrc}
                    alt="Laura"
                    height={48}
                    width={48}
                  />

                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="text-black text-2xl font-medium">
                      {item.name}
                    </div>
                    <div className="text-black text-base font-normal">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-chevron right" onClick={goToNextItem}>
        &gt;{/* Right chevron */}
      </button>
    </div>
  );
};
