import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import styles from "./PartnerCard.module.scss";
import { formatNumberWithThousandSeparator } from "@/utils/formatter";
import router, { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { cn } from "@/lib";

interface Partner {
  id: number;
  name: string;
  description: string;
  url: string;
  image: string;
}

interface PartnerCardProps {
  partner: Partner;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  partner: partner,
}) => {
  const supabase = useSupabaseClient();

  const handleGetOfferClick = () => {
    // localStorage.setItem(
    //   "GuestOffer",
    //   JSON.stringify({ loanAmount: loanAmount, loanTerm: loanTerm })
    // );
    window.location.href = partner.url;
  };

  return (
    <div className={styles.offerCard}>
      <div
        className={cn(
          "h-52 bg-cover bg-bottom",
          partner.id === 1 && "bg-[url(/assets/images/1608819260.jpg)]",
          partner.id === 2 && "bg-[url(/assets/images/pexels-photo.jpg)]",
          partner.id === 3 && "bg-[url(/assets/images/Online-Payments.jpg)]"
        )}
      >
        <div className="py-5 px-4 flex items-end bg-black/40 h-full">
          <h3 className="text-4xl font-semibold text-white">{partner.name}</h3>
        </div>
      </div>
      <div>
        <p className="text-lg mb-3 p-5">{partner.description}</p>
      </div>

      <Button
        size="lg"
        onClick={handleGetOfferClick}
        className="w-max mx-auto mt-4 block !px-16"
        rightIcon={<BsArrowRight className="h-5 w-auto" />}
      >
        Check Out With Fin
      </Button>
    </div>
  );
};
