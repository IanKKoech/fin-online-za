import { Field, ErrorMessage, useFormikContext } from "formik";
import { RadioCard, Slider } from "@/components/ui";
import accounting from "accounting";

export const CDEInput = ({
  setSliderValues,
  products,
  selectedProduct,
  setSelectedProducts,
}) => {
  const { setFieldValue } = useFormikContext();
  const handleOfferChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    term: number
  ) => {
    const selectedTerm = term;
    const offerData = products.find((offer) => offer.term === +selectedTerm);

    if (offerData) {
      setSelectedProducts((prev) => ({
        ...prev,
        ...offerData,
      }));
    }
    setSliderValues((prev) => ({
      ...prev,
      loanAmount: offerData.maximum,
      term: selectedTerm,
    }));
    setFieldValue("loanAmount", offerData.maximum);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-wrap justify-center">
        {products.map((offer) => (
          <Field key={offer.term} name="term">
            {() => (
              <label className="">
                <RadioCard
                  value={offer.term.toString()}
                  label={offer.term.toString()}
                  checked={selectedProduct.term === offer.term}
                  maximum={accounting.formatMoney(offer.maximum, {
                    symbol: "R",
                    thousand: ",",
                    precision: 2,
                  })}
                  minimum={accounting.formatMoney(offer.minimum, {
                    symbol: "R",
                    thousand: ",",
                    precision: 2,
                  })}
                  onChange={(event) => handleOfferChange(event, offer.term)}
                />
              </label>
            )}
          </Field>
        ))}
        <div className="error text-red">
          <ErrorMessage name="term" />
        </div>
      </div>
      {selectedProduct.term > 0 ? (
        <p className="text-2xl text-[#15A25E] mt-4 lg:mt-0">
          Selected {selectedProduct.term} month offer
        </p>
      ) : (
        <p className="text-xl text-red mt-4 lg:mt-0">
          Please select an Offer Above
        </p>
      )}
      {selectedProduct.term > 0 && (
        <div className="flex flex-col w-full">
          <Slider
            name="loanAmount"
            label="Amount"
            prefix="Rands"
            min={selectedProduct.minimum}
            max={selectedProduct.maximum}
            step={100}
            setSliderValues={setSliderValues}
          />
        </div>
      )}
    </div>
  );
};
