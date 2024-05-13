import { cn } from "@/lib";
import clsx from "clsx";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { CurrencyFormat } from "../CurrencyFormat/CurrencyFormat";

interface RadioButtonCardProps {
  value: string;
  label: string;
  checked: boolean;
  maximum: string;
  minimum: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioCard: React.FC<RadioButtonCardProps> = ({
  value,
  label,
  checked,
  onChange,
  maximum,
  minimum,
}) => {
  return (
    <>
      <div className="flex justify-center">
        <div
          className={cn(
            "w-full text-center flex flex-col justify-centre border border-gray-100 mr-3 ml-3 mb-10",
            checked && "bg-primary/30 border-primary"
          )}
          style={{
            width: 150,
            height: 200,

            boxShadow: "5px 7px 23px rgba(0, 0, 0, 0.25)",
            borderRadius: 22,
          }}
        >
          <div className="w-full h-24 text-center mt-4 text-black text-l ">
            From
            <div className="font-extrabold">{minimum}</div>
          </div>
          <div className="w-full h-24 text-center text-black text-l ">
            Up to
            <div className="font-extrabold">{maximum}</div>
          </div>
          <div className="w-full text-center pr-10 pl-10">
            <div className="w-70 h-px bg-secondary mx-auto" />
          </div>
          <div className="flex justify-center w-full h-20 mt-4 text-center text-black text-2xl font-medium">
            {label} months
          </div>
          <div
            className="GetOffer w-full h-24 bg-secondary text-center text-white text-l font-normal leading-10 flex items-center justify-center"
            style={{
              borderBottomLeftRadius: 22,
              borderBottomRightRadius: 22,
            }}
          >
            Get Offer <BiChevronRight size={25} className="ml-5" />
          </div>
          <input
            type="radio"
            value={value}
            hidden
            checked={checked}
            onChange={(event) => {
              onChange(event);
            }}
            //className={styles.radioButton}
          />
        </div>
      </div>
    </>
  );
};

{
  /* <div className="flex justify-center">
      <div
        className="w-full text-center flex flex-col justify-centre border border-gray-100 mr-3 ml-3 mb-10"
        style={{
          width: 300,
          height: 400,
          background: "white",
          boxShadow: "5px 7px 23px rgba(0, 0, 0, 0.25)",
          borderRadius: 22,
        }}
      >
        <div className="w-full h-24 text-center mt-4 mb-4 text-black text-3xl font-extrabold leading-10">
          Personal
          <br />
          Loan Offer
        </div>
        <div className="w-full text-center pr-10 pl-10">
          <div className="w-70 h-px bg-gray-100 mx-auto" />
        </div>

        <div className="flex justify-center w-full h-20 mt-4 text-center text-black text-3xl font-medium">
          R7, 100.00
        </div>
        <div className="w-full text-center pr-10 pl-10">
          <div className="w-70 h-px bg-gray-100 mx-auto" />
        </div>
        <div className="flex flex-row justify-between w-full h-24 mt-4 mb-4 text-center">
          <div className="ml-10">
            <span className="text-black text-2xl font-normal">
              R1,881.15 p/m
              <br />
              for{" "}
            </span>
            <span className="text-black text-xl font-bold">6 months</span>
          </div>
          <button className="mr-10" aria-label="more about instalment">
            <BiSolidHelpCircle size={20} className="ml-5 text-secondary" />
          </button>
        </div>
        <div className="w-full text-center pr-10 pl-10">
          <div className="w-70 h-px bg-gray-100 mx-auto" />
        </div>
        <div className="flex flex-row justify-between mt-4 mb-4 w-full h-11 text-center">
          <div className="ml-10">
            <span className=" text-black text-xl font-normal">
              Credit Life{" "}
            </span>
            <span className="text-black text-xl font-bold">R435.12</span>
          </div>
          <input
            className="w-5 h-5 aspect-square rounded-sm checked:accent-primary mr-10"
            aria-label="Credit Life"
            type="checkbox"
          />
        </div>
        <button
          className="GetOffer w-full h-24 bg-secondary text-center text-white text-2xl font-normal leading-10 flex items-center justify-center"
          onClick={handleGetOfferClick}
          style={{
            borderBottomLeftRadius: 22,
            borderBottomRightRadius: 22,
          }}
        >
          Get Offer <BiChevronRight size={25} className="ml-5" />
        </button>
      </div>
    </div>


<div className="w-full h-24 text-center mt-4 mb-4 text-black text-3xl font-extrabold leading-10">
          Personal
          <br />
          Loan Offer
        </div>
        <div className="w-full text-center pr-10 pl-10">
          <div className="w-70 h-px bg-gray-100 mx-auto" />
        </div>

        <div className="flex justify-center w-full h-20 mt-4 text-center text-black text-3xl font-medium">
          R7, 100.00
        </div>
        <div className="w-full text-center pr-10 pl-10">
          <div className="w-70 h-px bg-gray-100 mx-auto" />
        </div>
        <div className="flex flex-row justify-between w-full h-24 mt-4 mb-4 text-center">
          <div className="ml-10">
            <span className="text-black text-2xl font-normal">
              R1,881.15 p/m
              <br />
              for{" "}
            </span>
            <span className="text-black text-xl font-bold">6 months</span>
          </div>
          <button className="mr-10" aria-label="more about instalment">
            <BiSolidHelpCircle size={20} className="ml-5 text-secondary" />
          </button>
        </div>
        <div className="w-full text-center pr-10 pl-10">
          <div className="w-70 h-px bg-gray-100 mx-auto" />
        </div>
        <div className="flex flex-row justify-between mt-4 mb-4 w-full h-11 text-center">
          <div className="ml-10">
            <span className=" text-black text-xl font-normal">
              Credit Life{" "}
            </span>
            <span className="text-black text-xl font-bold">R435.12</span>
          </div>
          <input
            className="w-5 h-5 aspect-square rounded-sm checked:accent-primary mr-10"
            aria-label="Credit Life"
            type="checkbox"
          />
        </div>
        <button
          className="GetOffer w-full h-24 bg-secondary text-center text-white text-2xl font-normal leading-10 flex items-center justify-center"
          onClick={handleGetOfferClick}
          style={{
            borderBottomLeftRadius: 22,
            borderBottomRightRadius: 22,
          }}
        >
          Get Offer <BiChevronRight size={25} className="ml-5" />
        </button>
      </div>
    </div>
      <label className="p-4 sm:w-2/2 lg:w-3/3 w-full hover:scale-105 duration-500">
        <div
          className={clsx(
            "flex flex-col items-center mr-2 justify-between p-4 rounded-lg shadow-indigo-50 border border-gray-100 shadow-lg",
            checked && "bg-primary/50"
          )}
        >
          <input
            type="radio"
            value={value}
            hidden
            checked={checked}
            onChange={(event) => {
              onChange(event);
            }}
            //className={styles.radioButton}
          />
          <span className="mt-2 text-xl font-bold text-[#15A25E] text-left">
            {label}
          </span>
          <span className="text-gray-900 text-lg font-bold">
            {" "}
            {+label > 1 ? "months" : "month"}{" "}
          </span>
          <p className="text-sm font-semibold text-gray-400">max {maximum}</p>
          <p className="text-sm font-semibold text-gray-400">min {minimum}</p>
        </div>
      </label> */
}
