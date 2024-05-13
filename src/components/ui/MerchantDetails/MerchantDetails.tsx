import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { FormInputField } from "../FormInputField/FormInputField";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database as SupabaseDB } from "@/types/supabase";
import toast from "react-hot-toast";
import { Text } from "@/components/ui";

type Orders = SupabaseDB["public"]["Tables"]["orders"]["Row"] & {
  external_parties: SupabaseDB["public"]["Tables"]["external_parties"]["Row"];
};

interface MerchantDetailsProps {
  name: string;
  orderId: string;
  errors?: any;
}

export const MerchantDetails: React.FC<MerchantDetailsProps> = ({
  name,
  orderId,
  errors,
}) => {
  const [orderMerchant, setOrderMerchant] = useState(null);
  const supabase = useSupabaseClient<SupabaseDB>();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await supabase
          .from("orders")
          .select("*,external_parties(*)")
          .eq("id", orderId)
          .single();
        if (data) {
          console.log(data);
          setOrderMerchant(data);
        }
      } catch (error) {
        toast.error(error);
      }
    };
    fetchOrder();
  }, []);

  return (
    <div className="flex flex-col w-full gap-8">
      <Text fontSize="sm" color="muted" className={`mt-2`}>
        {orderMerchant?.external_parties?.business_name}
      </Text>
    </div>
  );
};
