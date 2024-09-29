import { nArray } from "@/helper/number";
import { Dayjs } from "dayjs";

export const getLeftBalancetDays = (
  offset: number,
  baseMonth: Dayjs
): Dayjs[] => {
  return nArray(offset)
    .reverse()
    .map((n) =>
      baseMonth.subtract(1, "month").endOf("month").subtract(n, "day")
    );
};

export const getDays = (days: number, baseMonth: Dayjs): Dayjs[] => {
  return nArray(days).map((n) => baseMonth.date(n + 1));
};

export const getRightBalanceDays = (
  offset: number,
  baseMonth: Dayjs
): Dayjs[] => {
  return nArray(offset).map((n) => baseMonth.add(1, "month").date(n + 1));
};
