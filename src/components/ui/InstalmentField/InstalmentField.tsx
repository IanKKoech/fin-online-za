import React, { useEffect, useState } from "react";
import { Button, CurrencyFormat } from "@/components/ui";
import { supabaseEdge } from "@/services/supabase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useFormikContext } from "formik";
import { TbCalculator } from "react-icons/tb";
import { Product, ProductCharges, SupabaseEdgeResponse } from "AppTypes";
import { useRouter } from "next/router";
import { calculateInstalment } from "@/utils/instalmentCalculator";
import { Database as SupabaseDB } from "@/types/supabase";

type OrganisationProduct =
  SupabaseDB["public"]["Tables"]["organisation_products"]["Row"] & {
    products: SupabaseDB["public"]["Tables"]["products"]["Row"];
  };

interface InstalmentFieldProps {
  prefix?: string;
  name: string;
  instalment?: number;
  disabled?: boolean;
  setInstalment: React.Dispatch<React.SetStateAction<any>>;
  sliderValues: { loanAmount: number; term: number };
  setCharges: React.Dispatch<React.SetStateAction<any>>;
  product_charges: Array<ProductCharges>;
  organisation_product: OrganisationProduct;
}

export const InstalmentField: React.FC<InstalmentFieldProps> = ({
  name,
  instalment,
  setInstalment,
  sliderValues,
  product_charges,
  organisation_product,
}) => {
  const { setFieldValue } = useFormikContext();

  console.log(instalment);

  useEffect(() => {
    const fetchDataAndCalculate = async () => {
      try {
        calculateInstalment(
          sliderValues["loanAmount"],
          sliderValues["term"],
          organisation_product,
          product_charges
        ).then((response) => {
          setInstalment(response.monthlyAmount);
          setFieldValue(name, instalment);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };

    fetchDataAndCalculate();
  }, [sliderValues["loanAmount"], sliderValues["term"], instalment]);

  if (instalment)
    return (
      <div className="flex flex-col w-full">
        <div className="bg-white rounded-3xl">
          <div className="flex flex-col items-center ml-5 mr-5 gap-3">
            <div className="flex flex-col">
              <div className="lg:order-2">
                <div className=" pt-5 text-center text-black text-opacity-90 text-2xl lg:text-3xl lg:font-black">
                  Monthly Instalment
                </div>
              </div>
              <div className="lg:order-1">
                <div className="text-center text-neutral-700 lg:text-4xl font-bold leading-10">
                  <CurrencyFormat
                    amount={instalment}
                    className="text-3xl lg:text-4xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
