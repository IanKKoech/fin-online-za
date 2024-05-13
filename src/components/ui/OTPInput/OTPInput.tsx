import React, { useEffect, useState, useRef } from "react";
import { useField, FieldAttributes, useFormikContext } from "formik";
import styles from "./OTPInput.module.scss";
import { cn } from "@/lib";
import { supabaseEdge } from "@/services/supabase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import Link from "next/link";
import { SupabaseEdgeResponse } from "AppTypes";
import { useRouter } from "next/router";

interface OTPInputProps {
  name: string;
  length: number;
  asyncValidation?: (value: string) => Promise<string | undefined>;
  dark?: boolean;
}

export const OTPInput: React.FC<OTPInputProps & FieldAttributes<any>> = ({
  name,
  length,
  asyncValidation,
  dark,
  ...rest
}) => {
  const { values, setFieldValue } = useFormikContext();
  const router = useRouter();
  const { query } = router;
  const [field, meta] = useField(name);
  const [revealPassword, setRevealPassword] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const supabase = useSupabaseClient();
  const { callEdgeFunction } = supabaseEdge(supabase);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = e.target.value;
    const updatedValue = field.value.split("");
    updatedValue[index] = inputValue;
    const otp = updatedValue.join("");
    setFieldValue(name, otp);

    if (inputValue !== "" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    } else {
      setFieldValue(name, otp);
    }
  };

  const handleOTPResend = async () => {
    toast.loading("Sending OTP...");
    try {
      const result = await callEdgeFunction<SupabaseEdgeResponse>(
        "guest-generate-otp",
        {
          body: {
            mobileNumber: values["mobileNumber"],
            iDNumber: values["iDNumber"],
          },
        },
        query.orderId ? (query.orderId as string) : null,
        query.product ? (query.product as string) : null
      );
      if (result.error) {
        toast.dismiss();
        toast.error("An Error Occured sending OTP");
      } else {
        toast.dismiss();
        toast.success("OTP Sent");
      }
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
  };

  const handleInputPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");

    if (pastedData.length === length) {
      const otp = pastedData.slice(0, length);
      setFieldValue(name, otp);
    }
  };

  const handleToggleRevealPassword = () => {
    setRevealPassword((prevState) => !prevState);
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !field.value[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (field.value === "") {
      inputRefs.current[0].focus();
    }
  }, [field.value]);

  return (
    <div className="flex flex-col">
      <div className={`flex gap-2 justify-center py-5`}>
        {Array.from({ length: length }).map((_, index) => (
          <input
            key={index}
            className={cn(
              "focus:border-gray-100 focus:outline-0 h-12 rounded-md border border-gray-300/30 text-center text-xl focus:ring focus:ring-primary dark:text-black",
              length > 4 ? "w-10" : "w-12",
              meta.error && "border-red focus:ring-red animate-shake-slightly"
            )}
            // autoFocus={index===0}
            type={revealPassword ? "text" : "password"}
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={1}
            value={field.value[index] ?? ""}
            onChange={(e) => handleInputChange(e, index)}
            onPaste={handleInputPaste}
            onKeyDown={(e) => handleInputKeyDown(e, index)}
            ref={(input) => {
              inputRefs.current[index] = input;
            }}
          />
        ))}
        <button
          type="button"
          className={styles["reveal-password-button"]}
          onClick={handleToggleRevealPassword}
        >
          {revealPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </button>
      </div>
      <Link
        href={"#"}
        className="mt-2 block underline font-semibold"
        onClick={() => handleOTPResend()}
      >
        Did not get OTP? Resend
      </Link>
    </div>
  );
};
