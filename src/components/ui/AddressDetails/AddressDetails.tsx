// import React, { useEffect, useState } from "react";
// import { useField, useFormikContext } from "formik";
// import { AddressData, Option } from "AppTypes";
// import { FormInputField } from "../FormInputField/FormInputField";
// import { addresses } from "@/utils/addressesZA";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";

// interface AddressFieldProps {
//   name: string;
//   options: Option[];
//   selectedCity: AddressData;
//   setSelectedCity: React.Dispatch<React.SetStateAction<AddressData>>;
// }

// export const AddressDetails: React.FC<AddressFieldProps> = ({
//   name,
//   selectedCity,
//   setSelectedCity,
// }) => {
//   const [field] = useField(name);
//   const { setFieldValue } = useFormikContext();
//   const [options, setOptions] = useState([]);
//   const supabase = useSupabaseClient();

//   useEffect(() => {
//     const fetchOptionsFromDB = async () => {
//       try {
//         // Assuming the response is an array of suburbs
//         const suburbOptions = addresses.map((option) => ({
//           value: option["surburb"],
//           label: option["surburb"],
//         }));

//         console.log(suburbOptions);
//         setOptions(suburbOptions);
//       } catch (error) {
//         console.error("Error fetching options from the database:", error);
//       }
//     };

//     fetchOptionsFromDB();
//   }, []);

//   useEffect(() => {
//     const handleCityChange = () => {
//       const selectedCityName = field.value;
//       const addressData = addresses.find(
//         (address) => address.surburb === selectedCityName
//       );
//       if (addressData) {
//         setSelectedCity(addressData);
//         setFieldValue(`${name}-city`, addressData.city);
//         setFieldValue(`${name}-zipcode`, addressData.postalCode);
//       }
//     };
//     handleCityChange();
//   }, [field.value]);

//   return (
//     <div className="flex flex-col lg:flex-row w-full gap-2">
//       <FormInputField
//         name={name}
//         options={options}
//         label="Surburb"
//         required
//         type={"select"}
//       />

//       <FormInputField name={`${name}-city`} type="text" label="City" disabled />

//       <FormInputField
//         name={`${name}-zipcode`}
//         type="text"
//         label="Postal Code"
//         disabled
//       />
//     </div>
//   );
// };
import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";
import { FixedSizeList } from "react-window";
import { debounce } from "lodash";
import { useField, useFormikContext } from "formik";
import { AddressData } from "AppTypes";
import { FormInputField } from "../FormInputField/FormInputField";
import { addresses } from "@/utils/addressesZA";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface AddressFieldProps {
  name: string;
  selectedCity: AddressData;
  setSelectedCity: React.Dispatch<React.SetStateAction<AddressData>>;
}

const VirtualMenuList = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    maxHeight?: number;
    innerRef?: React.MutableRefObject<HTMLDivElement | null>;
  }
>((props, ref) => {
  const { children, maxHeight, innerRef } = props;
  const itemCount = React.Children.count(children);

  return (
    <FixedSizeList
      height={maxHeight || 200}
      itemCount={itemCount}
      itemSize={50} // Adjust this value
      width="100%"
      outerRef={ref}
      innerRef={innerRef as React.RefObject<HTMLDivElement>}
    >
      {({ index, style }) => (
        <div key={index} style={style}>
          {React.Children.toArray(children)[index]}
        </div>
      )}
    </FixedSizeList>
  );
});

VirtualMenuList.displayName = "VirtualMenuList";

export const AddressDetails: React.FC<AddressFieldProps> = ({
  name,
  selectedCity,
  setSelectedCity,
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const virtualMenuListRef = useRef<HTMLDivElement | null>(null);

  // Debounce the fetch function
  const fetchOptionsFromDBDebounced = debounce(async (inputValue: string) => {
    try {
      setIsLoading(true);

      // Simulating fetching options based on the inputValue
      const filteredOptions = addresses
        .filter((option) =>
          option["surburb"].toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((option) => ({
          value: option["surburb"],
          label: option["surburb"],
        }));

      setOptions(filteredOptions);
    } catch (error) {
      console.error("Error fetching options from the database:", error);
    } finally {
      setIsLoading(false);
    }
  }, 300);

  useEffect(() => {
    // Fetch options when the component mounts
    fetchOptionsFromDBDebounced("");
  }, []);

  useEffect(() => {
    const handleCityChange = () => {
      const selectedCityName = field.value;
      const addressData = addresses.find(
        (address) => address.surburb === selectedCityName
      );
      if (addressData) {
        setSelectedCity(addressData);
        setFieldValue(`${name}-city`, addressData.city);
        setFieldValue(`${name}-zipcode`, addressData.postalCode);
      }
    };
    handleCityChange();
  }, [field.value]);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label
          htmlFor={name}
          className="text-gray-600 text-sm left-2 pl-2 bg-white font-bold block dark:text-white"
        >
          Surburb
          <span className="text-danger">*</span>
        </label>
        <div
          className={`flex flex-collg:flex-row w-full focus-within:ring-primary outline-none ring-offset-2 border-b border-gray-100 ${
            meta.error && "border-red focus:ring-red animate-shake-slightly"
          }`}
        >
          {isLoading && <p>Loading...</p>}

          <Select
            options={options}
            value={options.find((option) => option.value === field.value)}
            onChange={(selectedOption) => {
              setFieldValue(name, selectedOption?.value || "");
            }}
            className="w-full select-menu bg-transparent dark:text-white  focus-within:ring-primary  dark:ring-offset-blue-dark dark:border-gray-300 dark:focus:border-gray-300 placeholder:text-gray-200"
            classNamePrefix="react-select"
            placeholder="Type to search suburb"
            isSearchable
            isClearable
            menuIsOpen={isMenuOpen}
            components={{
              MenuList: (props) => (
                <VirtualMenuList {...props} innerRef={virtualMenuListRef} />
              ),
            }}
            onInputChange={(inputValue) => {
              // Trigger fetch based on the input value
              fetchOptionsFromDBDebounced(inputValue);
              // Open the menu when there is some input text
              setIsMenuOpen(!!inputValue);
            }}
            // Add more props and styles as needed
          />
        </div>
        {meta.error && <div className="text-red">This field is required</div>}
      </div>
      <FormInputField name={`${name}-city`} type="text" label="City" disabled />

      <FormInputField
        name={`${name}-zipcode`}
        type="text"
        label="Postal Code"
        disabled
      />
    </div>
  );
};

AddressDetails.displayName = "AddressDetails";
