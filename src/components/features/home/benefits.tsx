import { AiOutlineArrowRight } from "react-icons/ai";
import { GoCheckCircle } from "react-icons/go";
import Image from "next/image";
import lady from "../../../../public/assets/nicelady.png";
import { Container } from "@/components/ui";
import { useMediaQuery } from "@react-hook/media-query";

export const Benefits = () => {
  const isMediumToLargeScreen = useMediaQuery("(min-width: 768px)");
  return (
    <div className="relative">
      <div className="w-full pt-10 pb-10 lg:pb-20 text-center text-black text-opacity-90 text-4xl lg:text-5xl font-black leading-10">
        Why Fin ?
      </div>
      <div className="md:flex hidden relative h-[500px]">
        <div className="md:w-2/4 pt-20 items-center relative bg-[url(/assets/images/wierd.svg)] flex-col justify-start md:flex" />{" "}
        <div className="md:w-2/4 self-stretch bg-[#8AF1BB] justify-end items-center inline-flex" />
      </div>

      <Container className="md:absolute md:pt-40 md:pb-0 py-16 inset-0">
        <div className="flex flex-col md:flex-row w-full md:justify-between">
          <div
            className={`md:flex-col md:w-1/2 lg:h-[500px] ${
              isMediumToLargeScreen ? "" : "bg-[url(/assets/images/wierd.svg)]"
            } pl-5 justify-center md:inline-flex md:order-0 order-1`}
          >
            <div className="w-full p-3 text-white text-xl lg:text-4xl font-black">
              Benefits of using us?
            </div>
            <div className="flex-col p-3 lg:pt-10 justify-start items-start gap-8 inline-flex ">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col justify-start lg:gap-8 gap-5 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <GoCheckCircle className="text-white" />
                    <div className=" text-white lg:text-2xl font-normal">
                      Flexible Loans Up to R7,100
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <GoCheckCircle className="text-white" />
                    <div className=" text-white lg:text-2xl font-normal">
                      Easy Online Application
                    </div>
                  </div>
                  <div className=" justify-start items-center gap-3 inline-flex">
                    <GoCheckCircle className="text-white" />
                    <div className=" text-white lg:text-2xl font-normal">
                      Get your money instantly
                    </div>
                  </div>
                  <div className=" justify-start items-center gap-3 inline-flex">
                    <GoCheckCircle className="text-white" />
                    <div className=" text-white lg:text-2xl font-normal">
                      Apply anytime & anywhere
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="justify-center items-center gap-3 inline-flex"
                onClick={() => {
                  window.location.href =
                    "https://onlineloans.fin.africa/how-to-apply/";
                }}
              >
                <div className="text-white text-xl lg:text-2xl font-black">
                  Learn More
                </div>
                <AiOutlineArrowRight className="text-white" />
              </div>
            </div>
          </div>

          <div className="md:flex md:w-1/2 self-stretch md:order-1 order-0 px-5 justify-center items-center inline-flex md:bg-opacity-0 bg-[#8AF1BB] justify-end">
            <Image src={lady} alt="nice lady" height={500} width={500} />
          </div>
        </div>
      </Container>
    </div>
  );
};
