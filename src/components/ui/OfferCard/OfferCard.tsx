import React, { useState } from "react";
import { useRouter } from "next/router";
import { BiChevronRight, BiSolidHelpCircle } from "react-icons/bi";
import { CurrencyFormat } from "../CurrencyFormat/CurrencyFormat";

interface Offer {
  id: number;
  name: string;
  loanAmount: number;
  loanTerm: number;
  installment: number;
}

interface OfferCardProps {
  offer: Offer;
}

export const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  const [loanAmount, setLoanAmount] = useState(offer.loanAmount);
  const [loanTerm, setLoanTerm] = useState(offer.loanTerm);
  const [installment, setInstallment] = useState(offer.installment);

  const router = useRouter();

  const handleGetOfferClick = () => {
    window.location.href = `/client/apply?orderId=${router.query.orderId}&product=${router.query.product}`;
  };

  return (
    <div className="flex justify-center">
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

        <CurrencyFormat
          amount={loanAmount}
          className="flex justify-center w-full h-20 mt-4 text-center text-black text-3xl font-medium"
        />

        <div className="w-full text-center pr-10 pl-10">
          <div className="w-70 h-px bg-gray-100 mx-auto" />
        </div>
        <div className="flex flex-row justify-between w-full h-24 mt-4 mb-4 text-center">
          <div className="ml-10">
            <span className="text-black text-2xl font-normal">
              <CurrencyFormat
                amount={installment}
                className="text-black text-2xl font-normal"
              />{" "}
              p/m
              <br />
              for{" "}
            </span>
            <span className="text-black text-xl font-bold">
              {loanTerm} months
            </span>
          </div>
          <button className="mr-10" aria-label="more about instalment">
            <BiSolidHelpCircle size={20} className="ml-5 text-secondary" />
          </button>
        </div>
        <div className="w-full text-center pr-10 pl-10">
          <div className="w-70 h-px bg-gray-100 mx-auto" />
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
  );
};
