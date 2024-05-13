import {
  Button,
  Container,
  CurrencyFormat,
  Dialog,
  Slider,
} from "@/components/ui";

import { useEffect, useState } from "react";

import _debounce from "lodash/debounce";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabaseEdge } from "@/services/supabase";
import {
  OrganisationProduct,
  ProductCharges,
  SupabaseEdgeResponse,
} from "AppTypes";
import { useRouter } from "next/router";
import { calculateInstalment } from "@/utils/instalmentCalculator";
import { Database as SupabaseDB } from "@/types/supabase";
type Product = SupabaseDB["public"]["Tables"]["organisation_products"]["Row"];
type GuestOrders = SupabaseDB["public"]["Tables"]["guest_orders"]["Row"];

interface CallToActionProps {
  organisation_product: Product;
  product_charges: Array<ProductCharges>;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  organisation_product,
  product_charges,
}) => {
  console.log(organisation_product);

  const maxAmount = 7100;
  const minAmount = 1000;
  const maxTerm = 6;
  const minTerm = 1;
  const router = useRouter();
  const { query } = router;
  const [amount, setAmount] = useState(7100);
  const [term, setTerm] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [instalment, setInstalment] = useState(0);
  const excludedValues: number[] = [7, 8, 10, 11];
  const supabase = useSupabaseClient();
  const { callEdgeFunction } = supabaseEdge(supabase);
  const handleAmountSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = +e.currentTarget.value;

    setAmount(newValue);
  };

  const { insertPostgrest } = supabaseEdge(supabase);

  const handleNewApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    await insertPostgrest<GuestOrders>("guest_orders", {
      organisation_id: "fin_za_onlineloans",
    }).then(async (order) => {
      router.push(
        `/apply?product=${
          query.product == undefined ? 24 : query.product
        }&partner=${
          query.partner == undefined ? 736 : query.partner
        }&amount=${amount}&term=${term}&guest=${order.id}`
      );
    });
  };

  const handleTermSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = +e.currentTarget.value;
    if (excludedValues.includes(newValue)) {
      newValue = findClosestAllowedValue(newValue);
    }

    setTerm(newValue);
  };

  const findClosestAllowedValue = (val: number): number => {
    let closestValue = val;
    while (excludedValues.includes(closestValue)) {
      closestValue--;
      if (closestValue < 1) {
        closestValue = val;
        while (excludedValues.includes(closestValue)) {
          closestValue++;
          if (closestValue > 6) {
            return val;
          }
        }
        return closestValue;
      }
    }
    return closestValue;
  };

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    calculateInstalment(
      amount,
      term,
      organisation_product,
      product_charges
    ).then((response) => {
      setInstalment(response.monthlyAmount);
    });

    // Define a debounced version of the function that makes the API call

    // const debouncedAPICall = _debounce(
    //   async (newAmount: number, newTerm: number) => {
    //     setIsLoading(true);
    //     try {
    //       await callEdgeFunction<SupabaseEdgeResponse>(
    //         "instalment-engine",
    //         {
    //           body: {
    //             loan_amount: newAmount,
    //             product_id: "O001",
    //             term: newTerm,
    //             type: "byLoanAmount",
    //           },
    //         },
    //         query.orderId ? (query.orderId as string) : null,
    //         query.product ? (query.product as string) : "24"
    //       ).then((response) => {
    //         if (response.error) {
    //           setIsLoading(false);
    //         }
    //         if (response.message.data) {
    //           setInstalment(response.message.data.installment);
    //           setIsLoading(false);
    //         }
    //       });
    //     } catch (e) {
    //       console.log(e);
    //       setIsLoading(false);
    //     }
    //   },
    //   300
    // );
    // // Call the debouncedAPICall function whenever amount or term changes
    // debouncedAPICall(amount, term);

    // // Clean up the debounced function when component unmounts
    // return () => {
    //   setIsLoading(false);
    //   debouncedAPICall.cancel();
    // };
  }, [amount, term]);

  return (
    <Container>
      <div className="w-full flex flex-col">
        <div className="flex flex-col w-full gap-10 mt-10">
          <div className="flex w-full h-16 left-[29px] text-center justify-center text-black text-opacity-90 text-4xl lg:text-5xl font-black">
            Choose your loan options
          </div>
          <div className="flex pl-5 w-full h-16 text-black text-center justify-center text-opacity-90 text-xl lg:text-2xlfont-medium">
            Please drag the slider to select a new repayment date{" "}
          </div>
        </div>

        <div className="flex w-full items-center mt-10 justify-center">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:w-3/4 lg:h-80 bg-white rounded-3xl shadow-2xl border border-primary">
            <div className="flex flex-row">
              <div className="flex flex-col items-center p-5">
                <div className="w-full lg:h-32 px-3.5 py-4 rounded-tl-lg rounded-tr-lg rounded-bl-sm rounded-br-sm border-l-2 border-r-2 border-t-2 border-gray-textbox justify-between items-start gap-2.5 inline-flex">
                  <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="text-gray-300 py-2 lg:text-xl text-xs font-semibold uppercase">
                      Loan Amount
                    </div>
                    <div className="text-slate-950 text-base font-semibold">
                      <CurrencyFormat
                        amount={amount}
                        className="lg:text-3xl text-xl"
                      />
                    </div>
                  </div>
                  <div className="justify-center items-center flex">
                    <div className="text-right py-2 text-gray-300 lg:text-xl text-xs font-semibold">
                      RANDS
                    </div>
                  </div>
                </div>

                <div className="w-full pb-4 flex items-end justify-center mb-[-1px]">
                  <input
                    type="range"
                    className="w-full slider-input"
                    max={maxAmount}
                    min={minAmount}
                    value={amount}
                    step={100}
                    onChange={handleAmountSliderChange}
                    aria-label="Loan Amount"
                    style={
                      {
                        "--progress-value": `${
                          ((amount - minAmount) / (maxAmount - minAmount)) * 100
                        }%`,
                      } as React.CSSProperties
                    }
                  />
                </div>
                <div className="hidden lg:block w-80 h-16 text-center text-black text-opacity-90 text-3xl font-black">
                  Loan Amount
                </div>
              </div>

              <div className="hidden lg:block w-20 h-32 text-center text-black text-4xl font-black leading-10">
                +
              </div>

              <div className="flex flex-col items-center p-5">
                <div className="w-full lg:h-32 px-3.5 py-4 rounded-tl-lg rounded-tr-lg rounded-bl-sm rounded-br-sm border-l-2 border-r-2 border-t-2 border-gray-textbox justify-between items-start gap-2.5 inline-flex">
                  <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="text-gray-300 py-2 lg:text-xl text-xs font-semibold uppercase">
                      Loan Term
                    </div>
                    <div className="lg:text-3xl text-xl font-semibold">
                      {term}
                    </div>
                  </div>
                  <div className="justify-center items-center flex">
                    <div className="text-right py-2 text-gray-300 lg:text-xl text-xs font-semibold">
                      MONTHS
                    </div>
                  </div>
                </div>

                <div className="w-full pb-4 flex items-end justify-center mb-[-1px]">
                  <input
                    type="range"
                    className="w-full slider-input"
                    max={maxTerm}
                    min={minTerm}
                    value={term}
                    aria-label="Loan Term"
                    onChange={handleTermSliderChange}
                    style={
                      {
                        "--progress-value": `${
                          ((term - minTerm) / (maxTerm - minTerm)) * 100
                        }%`,
                      } as React.CSSProperties
                    }
                  />
                </div>
                <div className="hidden lg:block w-80 h-16 text-center text-black text-opacity-90 text-3xl font-black">
                  Loan Term
                </div>
              </div>
            </div>
            <div className="lg:hidden bg-white rounded-3xl">
              <div className="flex flex-col items-center ml-5 mr-5 gap-3">
                <div className="flex flex-col">
                  <div className="lg:order-2">
                    <div className=" pt-5 text-center text-black text-opacity-90 text-2xl lg:text-3xl lg:font-black">
                      Monthly Instalment
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <div className="lg:pt-10 text-center text-neutral-700 lg:text-4xl font-bold leading-10">
                      <CurrencyFormat
                        amount={instalment}
                        className="text-3xl lg:text-4xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-5">
                  <div className="px-0 py-0 bg-primary rounded-full justify-center items-center gap-2 inline-flex">
                    <Button
                      onClick={handleNewApplication}
                      loading={isLoading}
                      disabled={isLoading}
                      className=" text-slate-900 text-2xl font-semibold"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 text-center hidden lg:block text-black text-3xl font-black leading-10">
            Pay
          </div>
          <div className="lg:w-1/4 hidden lg:block h-80 bg-white rounded-3xl shadow-2xl border border-primary">
            <div className="flex flex-col items-center ml-5 mr-5 gap-3">
              <div className="flex flex-col">
                <div className="lg:order-2">
                  <div className="pb-5 pt-10 text-center text-black text-opacity-90 text-xl lg:text-3xl lg:font-black">
                    Monthly Instalment
                  </div>
                </div>
                <div className="lg:order-1">
                  <div className="lg:pt-10 text-center text-neutral-700 lg:text-4xl font-bold leading-10">
                    <CurrencyFormat
                      amount={instalment}
                      className="text-3xl lg:text-4xl"
                    />
                  </div>
                </div>
              </div>

              <div className=" px-0 py-0 bg-primary rounded-full justify-center items-center gap-2 inline-flex">
                <Button
                  onClick={handleNewApplication}
                  loading={isLoading}
                  disabled={isLoading}
                  className=" text-slate-900 text-2xl font-semibold"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Dialog
        hideClose={true}
        hideButton={true}
        isOpen={isLoading}
        onClose={() => {
          setIsLoading(false);
        }}
      >
        <div className="">
          <div className="flex flex-col items-center p-5">
            <p className="relative pb-4 pt-4 text-center text-2xl font-bold text-black">
              Loading...
            </p>
            <div className="loading-spinner" />
          </div>
        </div>
      </Dialog> */}
    </Container>
  );
};
