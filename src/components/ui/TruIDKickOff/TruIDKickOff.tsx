import React, { useState } from "react";
import { Button, TruID, Text } from "@/components/ui";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabaseEdge } from "@/services/supabase";
import { Database as SupabaseDB } from "@/types/supabase";
type Orders = SupabaseDB["public"]["Tables"]["orders"]["Row"];
import toast from "react-hot-toast";
import { SupabaseEdgeResponse } from "AppTypes";
import { useRouter } from "next/router";

interface TruIDKickoffProps {
  orderId: string;
  description: string;
  label: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TruIDKickOff: React.FC<TruIDKickoffProps> = ({
  description,
  label,
  orderId,
  setIsLoading,
}) => {
  const [onTruid, setOnTruId] = useState(false);
  const supabase = useSupabaseClient();
  const router = useRouter();
  const { query } = router;
  const { callEdgeFunction, updateFieldPostgrest, selectByFieldPostgrest } =
    supabaseEdge(supabase);
  const truIdKickOff = async () => {
    setOnTruId(true);
    setIsLoading(true);
    try {
      const result = await callEdgeFunction<SupabaseEdgeResponse>(
        "truid-kickoff",
        {
          body: {
            order_id: orderId,
          },
        },
        query.orderId ? (query.orderId as string) : null,
        query.product ? (query.product as string) : null
      );

      if (result.error) {
        toast.error(result.error.message);
        setOnTruId(false);
        setIsLoading(false);
      }
      if (result.message.data) {
        const order = await selectByFieldPostgrest<Orders>(
          "orders",
          "id",
          orderId
        );
        if (order) {
          console.log(order.validations);
          const updatedValidations = [
            ...JSON.parse(JSON.stringify(order.validations)),
            result.message.id,
          ];

          // await updateFieldPostgrest("orders", orderId, "id", {
          //   validations: updatedValidations,
          //   last_known_step: 2,
          // });
          window.location.href = result.message.data.url;
        } else {
          toast.error(
            "An error occured redirecting to truid. Please try again later"
          );
          setIsLoading(false);
        }
      }
      // const { data } = await supabase.functions.invoke("truid-kickoff", {});
      //
      // updateOrderStep(2);
      // updateOrderValidations(data.message.id as string);
    } catch (error) {
      toast.error(error.message);
      setOnTruId(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full">
      <Text fontSize="sm" color="muted" className="mt-2">
        {description}
      </Text>
      <Button
        variant="outline"
        onClick={() => truIdKickOff()}
        type="button"
        loading={onTruid}
        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
      >
        <div className="flex items-center justify-center">
          <TruID />
          <span className="ml-4">{label}</span>
        </div>
      </Button>
    </div>
  );
};
