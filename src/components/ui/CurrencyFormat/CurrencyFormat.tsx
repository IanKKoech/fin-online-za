import { NumericFormat } from "react-number-format";

export const CurrencyFormat = ({
  amount = 0,
  className = "",
}: {
  amount: number | string;
  className?: string;
}) => {
  return (
    <NumericFormat
      value={+amount}
      className={className}
      displayType="text"
      decimalScale={2}
      fixedDecimalScale={!Number.isInteger(+amount)}
      prefix={"R"}
      thousandSeparator
    />
  );
};
