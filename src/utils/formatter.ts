import numbro from "numbro";

export function formatNumberWithThousandSeparator(num: number): string {
  return numbro(num).format({
    thousandSeparated: true,
  });
}
