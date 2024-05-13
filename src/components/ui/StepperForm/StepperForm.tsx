import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib";
import { Formik, Form, FormikProps, FormikValues, FormikErrors } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { Button } from "../Button/Button";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaCheck, FaRegDotCircle } from "react-icons/fa";
import { Database as SupabaseDB } from "@/types/supabase";
import { CustomerToast } from "../CustomerToast/CustomerToast";
import { Container, Dialog, ErrorList, FormRenderer } from "@/components/ui";
import { TbPlayerTrackNext, TbPlayerTrackPrev, TbSend } from "react-icons/tb";
import {
  AddressData,
  BankConfiguration,
  CDEResult,
  FormStep,
  ProductCharges,
  StepTrigger,
  SupabaseEdgeResponse,
} from "AppTypes";
import { GoDot, GoDotFill } from "react-icons/go";
import { supabaseEdge } from "@/services/supabase";
import { RootState, useAppSelector } from "@/services/store";
import { banks } from "@/utils/banks";
import { FiArrowDown } from "react-icons/fi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator/ScrollIndicator";
type Profiles = SupabaseDB["public"]["Tables"]["profiles"]["Row"];
type WorkDetails =
  SupabaseDB["public"]["Tables"]["profiles_work_details"]["Row"];
type ProfilesBankDetails =
  SupabaseDB["public"]["Tables"]["profiles_bank_details"]["Row"];
type Orders = SupabaseDB["public"]["Tables"]["orders"]["Row"];
type Address = SupabaseDB["public"]["Tables"]["profiles_address"]["Row"];
type Reference = SupabaseDB["public"]["Tables"]["profiles_next_of_kin"]["Row"];
type Product =
  SupabaseDB["public"]["Tables"]["organisation_products"]["Row"] & {
    products: SupabaseDB["public"]["Tables"]["products"]["Row"];
  };

interface StepperFormProps {
  formSteps: FormStep[];
  onSubmit?: (values: object) => void;
  profile?: Profiles;
  workdetails?: WorkDetails;
  bankdetails?: ProfilesBankDetails;
  order?: Orders;
  amount?: number;
  setAmount?: React.Dispatch<React.SetStateAction<number>>;
  term?: number;
  setTerm?: React.Dispatch<React.SetStateAction<number>>;
  address?: Address;
  reference?: Reference;
  product_charges?: Array<ProductCharges>;
  organisation_product?: Product;
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StepperForm: React.FC<StepperFormProps> = ({
  formSteps,
  profile,
  workdetails,
  bankdetails,
  order,
  setAmount,
  setTerm,
  onSubmit,
  address,
  reference,
  amount,
  term,
  product_charges,
  organisation_product,
  isLoading,
  setIsLoading,
}) => {
  const [preflightData, setPreflightData] = useState({
    consentStates: {},
    loanAmount: 0,
    term: 6,
    name: "",
    surname: "",
    mobileNumber: "",
    iDNumber: "",
    grossSalary: 0,
    netSalary: 0,
    payment_frequency: "",
    employment_type: "",
    employer_name: "",
    bank: "",
    bank_name: "",
  });

  const bank = useAppSelector((state: RootState) => state.app.bankDetails);

  let initialValues: { [key: string]: any } = {
    C001: false,
    C004: null,
    C005: false,
    C006: false,
    C008: null,
    C009: null,
    C0010: false,
    C0011: false,
    C0012: false,
    C0013: false,
    C0014: true,
    C0015: false,
    niftyCoverTermsAndConditions: false,
    preagreementContract: false,
    loanContractConsent: false,
    term: term || 12,
    loanTerm: term || 12,
    loanAmount: amount || 7100,
    amount: amount || 7100,
    instalment: 0,
    name: profile?.first_name || "",
    surname: profile?.last_name || "",
    mobileNumber: profile?.phone || "",
    iDNumber: profile?.country_identifier || "",
    grossSalary: workdetails?.gross_income || 0,
    basic_pay: preflightData?.grossSalary || 0,
    net_pay: preflightData?.netSalary || 0,
    consumables: 0,
    other: 0,
    housing: 0,
    education: 0,
    transport: 0,
    medical_aid: 0,
    water_electricity: 0,
    maintenance: 0,
    insurance: 0,
    netSalary: workdetails?.net_income || 0,
    employer_name:
      workdetails?.employer_name || preflightData?.employer_name || "",
    employment_type:
      workdetails?.employment_type || preflightData?.employment_type || "",
    employee_number: workdetails?.employee_number || "",
    payment_frequency:
      workdetails?.payment_frequency || preflightData?.payment_frequency || "",
    employer_address: workdetails?.employer_address || "",
    employer_city: workdetails?.employer_city || "",
    employer_surburb: workdetails?.employer_surburb || "",
    employment_sector: workdetails?.employment_sector || "",
    employment_start_date: workdetails?.employment_start_date || "",
    hr_contact_person: workdetails?.hr_contact_person || "",
    hr_contact_number: workdetails?.hr_contract_number || "",
    salary_payment_date: workdetails?.salary_payment_date || "",
    bankName: bank?.name || "",
    bank_name: bank?.name || "",
    branch_code: bank?.universalBankCode || "*",
    forex_code: bank?.swiftCode || "",
    account_number: bank?.accountNumber || "",
    account_type: bank?.accountType || "",
    holder_name: bank?.holderName || "",
    street_address: address?.street_address || "",
    city: address?.city || "",
    surburb: address?.surburb || "",
    next_of_kin_name: reference?.name || "",
    next_of_kin_surname: reference?.surname || "",
    next_of_kin_phone_number: reference?.phone_number || "",
    alternative_number: reference?.alternative_number || "",
    relationship: reference?.relationship || "",
    otp: "",
  };
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();
  const { query } = router;
  const [preAgreementHtmlContent, setPreAgreementHtmlContent] = useState("");
  const [currentStepIndex, setCurrentStepIndex] = useState(
    order?.last_known_step || 0
  );

  // const [isLoading, setIsLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(
    formSteps[order?.last_known_step || 0].stepName
  );

  const [acceptContract, setAcceptContract] = useState(false);
  const [acceptNiftyCoverContract, setAcceptNiftyCoverContract] =
    useState(false);

  const [minLoanAmount, setMinLoanAmount] = useState(0);
  const [maxLoanAmount, setMaxLoanAmount] = useState(12000);
  const [minTerm, setMinTerm] = useState(0);
  const [maxTerm, setMaxTerm] = useState(12);
  const [instalment, setInstalment] = useState(0);
  const [charges, setCharges] = useState({});
  const [isOnProbabtion, setIsOnProbation] = useState(false);
  const [sliderValues, setSliderValues] = useState({
    loanAmount: amount,
    term: term,
  });
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [cdeResult, setCdeResult] = useState<CDEResult[]>([]);
  const [selectedCity, setSelectedCity] = useState<AddressData>({
    surburb: "",
    city: "",
    postalCode: "",
  });
  const [selectedBank, setSelectedBank] = useState<BankConfiguration>({
    name: "",
    universalBankCode: "",
    swiftCode: "",
  });
  const [hasError, setHasError] = useState(false);
  const [formErrors, setFormErrors] = useState<FormikErrors<FormikValues>>({});
  const [stepErrors, setStepErrors] = useState<FormikErrors<FormikValues>>({});
  const { callEdgeFunction, updateFieldPostgrest, selectByFieldPostgrest } =
    supabaseEdge(supabase);

  const [stepButtonClickCount, setStepButtonClickCount] = useState(0);

  const handleAcceptContract = () => {
    setAcceptContract((prevValue) => !prevValue);
  };

  function getGenderAndDOB(idNumber: string): { gender: string; dob: Date } {
    // Extract the date of birth from the ID number
    const year = Number(idNumber.substring(0, 2));
    const month = Number(idNumber.substring(2, 4));
    const day = Number(idNumber.substring(4, 6));

    console.log(`year -> ${year} month -> ${month} day -> ${day}`);

    // Determine the century based on the third digit of the ID number
    // const currentYear = new Date().getFullYear();
    // const century = Math.floor(currentYear / 100) * 100;
    // const fullYear = century + year;

    const fullYear = year < 22 ? 2000 + year : 1900 + year;

    // Extract the gender based on the fourth digit of the ID number
    const genderCode = Number(idNumber.charAt(6));
    const gender = genderCode >= 5 ? "Male" : "Female";

    // Create the Date object for the date of birth
    const dob = new Date(fullYear, month - 1, day + 1);

    return { gender, dob };
  }

  const updateOrderStep = async (nextStep: number, values: FormikValues) => {
    try {
      if (query.orderId != undefined) {
        const { data, error } = await supabase
          .from("orders")
          .update({ last_known_step: nextStep })
          .eq("id", order?.id);
      } else if (query.guest != undefined) {
        const { data, error } = await supabase
          .from("guest_orders")
          .update({ last_known_step: nextStep, ref_data: values })
          .eq("id", query.guest);
      }
    } catch (e) {
      console.log(Error);
    }
  };

  const validationSchema = (formSteps: FormStep[]): Yup.Schema<any> => {
    const mergedSchema = formSteps.reduce((accumulator, step) => {
      const stepSchemas = step.validationSchema || [];
      stepSchemas.forEach((schema) => {
        accumulator = {
          ...accumulator,
          ...schema.fields,
        };
      });
      return accumulator;
    }, {});
    return Yup.object().shape(mergedSchema);
  };

  // const validationSchema = (formSteps: FormStep[]): Yup.Schema<any> => {
  //   const mergedSchema = formSteps.reduce((accumulator, step) => {
  //     return Object.assign(accumulator, step.validationSchema?.fields);
  //   }, {});
  //   return Yup.object().shape(mergedSchema);
  // };

  console.log(organisation_product);

  const submitApplicationForm = async (values: {}) => {
    setIsLoading(true);
    toast.loading("Processing Application...");

    if (session?.user?.id) {
      try {
        if (order && order.is_reoffer) {
          const { data: acceptedReoffer, error: acceptedReofferError } =
            await supabase.functions.invoke("accept-reoffer", {
              body: {
                loan_id: order.linked_backoffice_id,
                product_id: organisation_product.products.product_code,
                order_id: order.id,
              },
              headers: {
                "organisation-id": "fin_za_onlineloans",
                "merchant-id": "8064b036-1ded-45c3-b622-d52f04f90376",
              },
            });

          if (acceptedReoffer && !acceptedReofferError) {
            toast.dismiss();
            toast.success("Reoffer accepted successfully");
            window.location.href =
              "/client/loan/application/" + order.linked_backoffice_id;
          } else {
            toast.dismiss();
            toast.error("Reoffer acceptance failed");
            setIsLoading(false);
            return;
          }

          return;
        }
        if (order && order.is_contract) {
          const { data: acceptedContract, error: acceptedContractError } =
            await supabase.functions.invoke("accept-loan-contract", {
              body: {
                loan_id: order.linked_backoffice_id,
                product_id: organisation_product.products.product_code,
                order_id: order.id,
              },
              headers: {
                "organisation-id": "fin_za_onlineloans",
                "merchant-id": "8064b036-1ded-45c3-b622-d52f04f90376",
              },
            });

          if (acceptedContract && !acceptedContractError) {
            toast.dismiss();
            toast.success("Loan Contract accepted successfully");
            window.location.href =
              "/client/loan/application/" + order.linked_backoffice_id;
          } else {
            toast.dismiss();
            toast.error("Loan Contract acceptance failed");
            setIsLoading(false);
            return;
          }

          return;
        }
        onSubmit(values);
      } catch (error) {
        toast.dismiss();
        toast.error("Error submitting form:", error);
        setIsLoading(false);
        return "Error submitting";
      }
    } else {
      onSubmit(values);
    }
  };

  const handleTrigger = async (
    trigger: StepTrigger,
    values: FormikValues
  ): Promise<any> => {
    try {
      if (
        trigger.name === "credit-life-policy" &&
        values["niftyCoverTermsAndConditions"]
      )
        return;
      if (trigger.name === "employmentLetter") {
        let docNotRequired = true;
        if (isOnProbabtion) {
          docNotRequired = false;
        }

        if (values.employment_type == 4) {
          docNotRequired = false;
        }
        if (docNotRequired) return;
      }

      toast.loading(trigger.loadingMessage);

      let result: { [key: string]: any } = {};

      trigger.values.forEach((item) => {
        result[toCamelCase(item)] = values[item];
      });

      if (trigger.name === "cde-offers") {
        result = {
          ...result,
          first_name: profile.first_name || preflightData.name,
          last_name: profile.last_name || preflightData.surname,
          phone_number: profile.phone || preflightData.mobileNumber,
          email: session?.user.email,
          // net_pay: preflightData.netSalary,
          // gross_pay: preflightData.grossSalary,
          id_number: profile.country_identifier || preflightData.iDNumber,
          order_id: order?.id,
        };
      } else if (trigger.name === "contract-generator") {
        if (acceptNiftyCoverContract && !order.is_contract) {
          updateOrderConsents({
            external_id: "C007",
          });
        } else {
          updateOrderConsents({
            external_id: "C007",
          });
        }
        result = {
          ...result,
          format: "html",
          order_id: order?.id,
          product_id: organisation_product.products.product_code,
        };
      } else if (trigger.name === "accept-offer") {
        result = {
          ...result,
          loan_amount: sliderValues["loanAmount"],
          term: sliderValues["term"],
          request_id: localStorage.getItem("cdeLinkedRequest"),
          order_id: order?.id,
          installment: instalment,
          charges: charges,
          product_id: organisation_product.products.product_code,
        };
      } else if (trigger.name === "accept-contract") {
        result = {
          ...result,
          order_id: order?.id,
        };
      } else if (trigger.name === "submit-application") {
        result = {
          ...result,
          order_id: order?.id,
          product_id: organisation_product.products.product_code,
        };
      } else if (trigger.name === "is-guest") {
      }
      const submitToSupabaseEdge = async (
        trigger: StepTrigger,
        result: { [key: string]: any }
      ): Promise<any> => {
        if (trigger.name === "cde-offers") {
          result = {
            ...result,
            product_id: organisation_product.products.product_code,
          };
          // handle specific trigger logic
        }

        if (trigger.name === "contract-generator") {
          // handle specific trigger logic
        }

        if (trigger.name === "accept-offer") {
          // handle specific trigger logic
        }

        if (trigger.name === "accept-contract") {
          // handle specific trigger logic
        }

        if (trigger.name === "submit-application") {
          // handle specific trigger logic
        }

        const response = await callEdgeFunction<SupabaseEdgeResponse>(
          trigger.name,
          {
            body: result,
          },
          query.orderId ? (query.orderId as string) : null,
          // query.product ? (query.product as string) : null
          "24"
        );

        // const response = await supabase.functions.invoke(trigger.name, {
        //   body: result,
        //   headers: {
        //     "merchant-id": "8064b036-1ded-45c3-b622-d52f04f90376",
        //     "organisation-id": "fin_za_onlineloans",
        //   },
        // });

        if (response) {
          if (trigger.name === "cde-offers") {
            localStorage.setItem("cdeLinkedRequest", response.message.id);
            updateOrderValidations(response.message.id);
            setCdeResult(response.message.data.products);
            setMinLoanAmount(response.message.data.products[0].min_amount);
            setMaxLoanAmount(response.message.data.products[0].max_amount);
            setMinTerm(response.message.data.products[0].min_term);
            setMaxTerm(response.message.data.products[0].max_term);
          }
          if (trigger.name === "contract-generator") {
            setPreAgreementHtmlContent(response.message.data.template);
          }

          if (trigger.name === "submit-application") {
            if (response) {
              //window.localStorage.clear();
              window.location.href = "/client/loan";
            }
          }

          return response;
        } else {
          throw new Error(trigger.errorMessage);
        }
      };

      const submitToSupabasePostGrest = async (
        trigger: StepTrigger,
        result: { [key: string]: any }
      ): Promise<any> => {
        const idNumber = localStorage.getItem("id");
        if (trigger.postgrestParams?.table === "orders") {
          const { data: order, error: orderError } = await supabase
            .from("orders")
            .select("preflight_ref_data")
            .eq("id", router.query.orderId);

          const { data: guestOrder, error: guestOrderError } = await supabase

            .from("guest_orders")
            .update({ converted: true })
            .eq("id", localStorage.getItem("guest-order"));

          if (!orderError) {
            const guestData = order[0].preflight_ref_data;
            let consents: any = {};
            for (const key in guestData) {
              if (key.startsWith("C0")) {
                consents[key] = guestData[key];
              }
            }

            if (consents !== null) {
              const trueConsents: { external_id: string }[] = Object.entries(
                consents
              )
                .filter(([code, value]) => value === true)
                .map(([code]) => ({ external_id: code }));
              result["consents"] = trueConsents;
            }
          }
          result["id"] = router.query.orderId;
          result["client_id"] = session?.user.id;
          //get guests consents from guest table

          // handle specific trigger logic
        }

        if (trigger.postgrestParams?.table === "profiles_work_details") {
          result["id"] = session?.user.id;
        }

        if (trigger.postgrestParams?.table === "profiles_next_of_kin") {
          result["id"] = session?.user.id;
          result["name"] = values.next_of_kin_name;
          result["surname"] = values.next_of_kin_surname;
          result["phone_number"] = values.next_of_kin_phone_number;
        }

        if (trigger.postgrestParams?.table === "profiles_bank_details") {
          result["branch_code"] = bank.universalBankCode;
          result["bank_name"] = bank.name;
          result["forex_code"] = bank.swiftCode;
          result["id"] = session?.user.id;
        }

        if (trigger.postgrestParams?.table === "profiles_address") {
          // handle specific trigger logic
          result["surburb"] = selectedCity.surburb;
          result["zip_code"] = selectedCity.postalCode;
          result["city"] = selectedCity.city;
          result["id"] = session?.user.id;
        }

        if (trigger.postgrestParams?.table === "profiles") {
          const { data, error } = await supabase
            .from("orders")
            .select("preflight_ref_data")
            .eq("id", order?.id);

          const guestData = data[0].preflight_ref_data;
          const { gender, dob } = getGenderAndDOB(guestData.iDNumber);
          result["id"] = session?.user.id;
          result["phone"] = guestData.mobileNumber;
          result["first_name"] = guestData.name;
          result["last_name"] = guestData.surname;
          result["country_identifier"] = guestData.iDNumber;
          result["gender"] = gender;
          result["date_of_birth"] = dob;
        }

        const response = await supabase
          .from(trigger.postgrestParams.table)
          .upsert(result);

        if (response.status === 201) {
          return response.data;
        } else {
          throw new Error(trigger.errorMessage);
        }
      };

      const submitToSupabaseDocument = async (
        trigger: StepTrigger,
        result: { [key: string]: any }
      ): Promise<any> => {
        const filename = `${uuidv4()}-${
          values[trigger.documentFieldName].name
        }`;

        const response = await supabase.storage
          .from("user-documents")
          .upload(filename, values[trigger.documentFieldName], {
            cacheControl: "3600",
            upsert: false,
          });

        if (response.data) {
          await supabase
            .from("order_documents")
            .insert({
              linked_order: order?.id,
              url: filename,
              type: trigger.documentType,
            })
            .select();

          return response.data;
        } else {
          throw new Error(trigger.errorMessage);
        }
      };
      //check if application in pipeline
      const checkIfAppExist = async (
        trigger: StepTrigger,
        result: { [key: string]: any }
      ): Promise<any> => {
        const { data: isApplicant, error: isApplicantError } =
          await supabase.rpc("check_order_status_not_disbursed", {
            country_identifier_text: result.iDNumber,
          });

        if (isApplicant) {
          throw new Error(trigger.errorMessage);
        }
      };

      //check if details are already in the database
      const checkIfDetailsExist = async (
        trigger: StepTrigger,
        result: { [key: string]: any }
      ): Promise<any> => {
        const { data: isGuest, error: isGuestError } = await supabase.rpc(
          "is_guest",
          { mobilenumber: result.mobileNumber }
        );

        const { data: isClient, error: isClientError } = await supabase.rpc(
          "check_country_identifier_exists",
          { country_identifier_text: result.iDNumber }
        );

        if (!isGuest || isClient) {
          throw new Error(trigger.errorMessage);
        }
      };

      let response: any;

      if (trigger.type === "edge") {
        response = await submitToSupabaseEdge(trigger, result);
      } else if (trigger.type === "document") {
        response = await submitToSupabaseDocument(trigger, result);
      } else if (trigger.type === "postgrest") {
        response = await submitToSupabasePostGrest(trigger, result);
      } else if (trigger.type === "check-guest" && !session?.user.id) {
        response = await checkIfDetailsExist(trigger, result);
      } else if (trigger.type === "check-app-in-pipeline") {
        response = await checkIfAppExist(trigger, result);
      }

      toast.dismiss();
      toast.success(trigger.successMessage);
      setStepButtonClickCount(stepButtonClickCount + 1);

      return response;
    } catch (error) {
      toast.dismiss();
      setIsLoading(false);
      if (trigger.type === "check-guest") {
        setIsLoading(false);
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Hi There 👋 {values.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      I can see you have an account with us already. Kindly sign
                      in to continue.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => {
                    const redirectedFrom = "/apply"; // Update with your actual source route
                    const url = `/auth/signIn?redirectedFrom=${encodeURIComponent(
                      redirectedFrom
                    )}`;
                    window.location.href = url;
                    toast.dismiss(t.id);
                  }}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Sign In
                </button>
              </div>
            </div>
          ),
          { duration: 10000 }
        );
      } else if (trigger.type === "check-app-in-pipeline") {
        setIsLoading(false);
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Hi There 👋 {values.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      I can see you already have an application in the pipeline.
                      Please be patient as we work on it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ),
          { duration: 10000 }
        );
      } else if (trigger.name === "cde-offers") {
        toast.custom(
          <CustomerToast
            t={{
              visible: true,
              id: "",
            }}
            message={
              "Unfortunately, we cannot give you an offer at this moment. Please try again later"
            }
            title={"😢 No affordability"}
          />,
          { duration: 30000 }
        );
      } else {
        toast.error(trigger.errorMessage);
        setIsLoading(false);
      }
      throw error;
    }
  };

  function toCamelCase(input: string): string {
    return input
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
        if (+match === 0) return ""; // handles cases where the first character is a number
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, ""); // removes any whitespace
  }

  const updateOrderConsents = async (consent: {
    external_id: string;
  }): Promise<void> => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("consents")
        .eq("id", order?.id);

      if (error) {
        throw error;
      }

      const updatedConsents = [...data[0].consents, consent];

      const { data: updateData, error: updateError } = await supabase
        .from("orders")
        .update({ consents: updatedConsents })
        .eq("id", order?.id);

      if (updateError) {
        throw updateError;
      }

      console.log("Consents updated successfully");
    } catch (e) {
      console.log(e);
    }
  };

  const updateOrderValidations = async (validation: string): Promise<void> => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("validations")
        .eq("id", order?.id);

      if (error) {
        throw error;
      }

      const updatedValidations = [...data[0].validations, validation];

      const { data: updateData, error: updateError } = await supabase
        .from("orders")
        .update({ validations: updatedValidations })
        .eq("id", order?.id);

      if (updateError) {
        throw updateError;
      }

      console.log("Validations updated successfully");
    } catch (e) {
      console.log(e);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    // You can adjust the scroll amount based on your needs
    const scrollAmount = 200;
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const scrollableDistance = totalHeight - windowHeight;

      // Adjust the threshold for hiding the scroll indicator
      const threshold = 95; // Adjust this value based on your preference

      const percentageScrolled = (scrollPosition / scrollableDistance) * 100;

      // Check if the user is not too close to the bottom
      setShowScrollButton(percentageScrolled <= threshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    const handleButtonClick = () => {
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      // If not at the bottom, show the scroll button
      setShowScrollButton(scrollPosition + windowHeight < totalHeight);
    };
    handleButtonClick();
  }, [stepButtonClickCount]);

  useEffect(() => {
    if (query.orderId != undefined) {
      const fetchOrder = async () => {
        const { data, error } = await supabase
          .from("orders")
          .select("*")
          .eq("id", order?.id)
          .single();
        if (data) {
          const lastKnownStep = data.last_known_step || 0;
          const nextStep = formSteps[lastKnownStep]?.stepName;
          setCurrentStepIndex(lastKnownStep);
          setCurrentStep(nextStep);
        }
      };
      fetchOrder();
    }

    if (query.guest != undefined) {
    }

    const bankData = banks.find(
      (bank) => bank.name === preflightData.bank_name
    );
    if (bankData) {
      setSelectedBank(bankData);
    }

    const storedData: string | null = localStorage.getItem("GuestApplication");

    // Checking if data exists in local storage
    if (storedData) {
      setPreflightData(JSON.parse(storedData));
    } else {
      console.log("Data does not exist");
    }
  }, [query.orderId]);

  const getStepIndexByName = (stepName: string) => {
    return formSteps.findIndex((step) => step.stepName === stepName);
  };

  const handleNextButtonClick = async (
    validateForm: () => Promise<FormikErrors<FormikValues>>,
    values: FormikValues,
    index: number,
    setErrors: (errors: FormikErrors<FormikValues>) => void
  ) => {
    setIsLoading(true);
    console.log("Values:", values);
    if (setAmount && setTerm) {
      setAmount(values["amount"]);
      setTerm(values["term"]);
    }
    const errors = await validateForm();
    console.log("Errors:", errors);
    setFormErrors(errors);
    const fields = formSteps[currentStepIndex].formSections.flatMap(
      (section) => section.fields
    );
    let isErrorExist = false;
    const stepErrors: FormikErrors<FormikValues> = {};
    for (const field of fields) {
      if (errors.hasOwnProperty(field.name)) {
        setHasError(true);
        isErrorExist = true;
        stepErrors[field.name] = errors[field.name];
      }
    }
    setStepErrors(stepErrors);

    if (!isErrorExist) {
      if (formSteps[index].stepTriggers) {
        for (const trigger of formSteps[index].stepTriggers!) {
          try {
            const result = await handleTrigger(trigger, values);
            console.log("Trigger succeeded:", result);
          } catch (error) {
            // Handle error
            console.error("Trigger failed:", error);
            return;
          }
          // Handle success
        }
        if (index !== formSteps.length - 1) {
          const nextStep = formSteps[index + 1].stepName;
          setCurrentStepIndex(index + 1);
          setIsLoading(false);
          setCurrentStep(nextStep);
          updateOrderStep(index + 1, values);
        } else {
          if (query.guest != "undefined") {
            updateOrderStep(index + 1, values);
            const guestId = Array.isArray(query.guest)
              ? query.guest.join(",")
              : query.guest;
            localStorage.setItem("guest-order", guestId);
          }
          submitApplicationForm(values);
        }
      } else {
        if (index !== formSteps.length - 1) {
          const nextStep = formSteps[index + 1].stepName;
          setCurrentStepIndex(index + 1);
          setIsLoading(false);
          setCurrentStep(nextStep);
          updateOrderStep(index + 1, values);
        } else {
          if (query.guest != "undefined") {
            updateOrderStep(index + 1, values);
            const guestId = Array.isArray(query.guest)
              ? query.guest.join(",")
              : query.guest;
            localStorage.setItem("guest-order", guestId);
          }
          submitApplicationForm(values);
        }
      }
      setErrors({});
    }
    setHasError(isErrorExist);
  };

  useEffect(() => {
    setHasError(Object.keys(stepErrors).length > 0);
  }, [stepErrors]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(formSteps)}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize={true}
      onSubmit={() => {}}
    >
      {({
        errors,
        setErrors,
        touched,
        values,
        validateForm,
      }: FormikProps<FormikValues>) => (
        <main className="bg-white lg:rounded-2xl overflow-hidden">
          <div className="w-full justify-center pt-10 lg:pb-10 flex flex-row gap-3 lg:ml-8 items-center">
            {formSteps.map((step, index) =>
              getStepIndexByName(step.stepName) === currentStepIndex ? (
                <FaRegDotCircle
                  className="text-primary w-7 h-7 lg:w-10 lg:h-10"
                  key={step.stepName}
                />
              ) : (
                <GoDotFill
                  className={cn(
                    "text-primary w-7 h-7 lg:w-10 lg:h-10",
                    getStepIndexByName(step.stepName) < currentStepIndex &&
                      "text-secondary"
                  )}
                  key={step.stepName}
                />
              )
            )}
          </div>
          <div className="relative flex w-full">
            <Form className="w-full mb-20 pt-8 md:pt-16 pb-8 px-4 md:px-16">
              {formSteps.map((step, index) => (
                <div
                  key={step.stepName}
                  style={{
                    display: step.stepName === currentStep ? "block" : "none",
                  }}
                >
                  {step.formSections.map((section, index) => (
                    <>
                      <h2 className=" h-16 pt-5 pb-5 text-left text-black text-opacity-90 text-3xl lg:text-4xl font-normal">
                        {section.stepTitle}
                      </h2>

                      <div
                        className={cn(
                          "grid gap-y-8 gap-x-12 pt-5 pb-20",
                          section.columns === 2 && "lg:grid-cols-2"
                        )}
                      >
                        <FormRenderer
                          fields={section.fields}
                          session={session}
                          errors={errors}
                          touched={touched}
                          acceptNiftyCoverContract={acceptNiftyCoverContract}
                          setAcceptNiftyCoverContract={
                            setAcceptNiftyCoverContract
                          }
                          instalment={instalment}
                          setInstalment={setInstalment}
                          setCharges={setCharges}
                          acceptContract={acceptContract}
                          products={cdeResult}
                          contract={preAgreementHtmlContent}
                          handleAcceptContract={handleAcceptContract}
                          setSliderValues={setSliderValues}
                          sliderValues={sliderValues}
                          setIsOnProbation={setIsOnProbation}
                          setIsLoading={setIsLoading}
                          isOnProbation={isOnProbabtion}
                          setSelectedCity={setSelectedCity}
                          selectedCity={selectedCity}
                          order={order?.id}
                          product_charges={product_charges}
                          organisation_product={organisation_product}
                        />
                      </div>
                    </>
                  ))}
                  {/* <div className="fixed bottom-0 pb-5 w-full left-0 right-0 bg-white"> */}
                  <Container className="fixed bottom-0 left-0 right-0 pb-10 flex flex-col w-full bg-white">
                    {showScrollButton && (
                      <div className="flex flex-col items-center mt-3">
                        <div
                          className="scroll-down-indicator animate-bounce text-gray-600 hover:text-gray-800 transition-transform duration-300"
                          onClick={handleScrollDown}
                        >
                          <BsChevronDoubleDown className="text-2xl text-center" />
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">
                          Scroll down
                        </p>
                      </div>
                    )}

                    <menu className="flex w-full justify-between py-4 mt-4 pl-4 pr-4">
                      {index !== 0 && (
                        <Button
                          variant="secondary"
                          size="lg"
                          leftIcon={<TbPlayerTrackPrev />}
                          type="button"
                          disabled={isLoading}
                          onClick={() => {
                            const prevStep = formSteps[index - 1].stepName;
                            setCurrentStepIndex(index - 1);
                            setCurrentStep(prevStep);
                            updateOrderStep(index - 1, values);
                          }}
                        >
                          {/* {formSteps[index].previousButtonLabel || "Previous"} */}
                          {formSteps[index].previousButtonLabel || "Previous"}
                        </Button>
                      )}
                      {index !== formSteps.length - 1 && (
                        <Button
                          variant="primary"
                          type="button"
                          size="lg"
                          loading={isLoading}
                          disabled={isLoading}
                          rightIcon={<TbPlayerTrackNext />}
                          onClick={() =>
                            handleNextButtonClick(
                              validateForm,
                              values,
                              index,
                              setErrors
                            )
                          }
                          // disabled={hasError}
                        >
                          {formSteps[index].nextButtonLabel || "Next"}
                        </Button>
                      )}

                      {index === formSteps.length - 1 && (
                        <Button
                          type="button"
                          onClick={() =>
                            handleNextButtonClick(
                              validateForm,
                              values,
                              index,
                              setErrors
                            )
                          }
                          leftIcon={<TbSend />}
                          loading={isLoading}
                          variant="pulse"
                          size="lg"
                          disabled={isLoading}
                        >
                          {formSteps[index].submitButtonLabel || "Submit"}
                        </Button>
                      )}
                    </menu>
                    <p className="text-red text-center">
                      Please fill all the required fields * to proceed
                    </p>
                  </Container>
                </div>
              ))}
            </Form>
            <Dialog
              hideClose={false}
              hideButton={false}
              isOpen={hasError}
              onClose={() => {
                setHasError(false);
                setIsLoading(false);
              }}
            >
              <ErrorList errors={stepErrors} />
            </Dialog>
          </div>
        </main>
      )}
    </Formik>
  );
};
