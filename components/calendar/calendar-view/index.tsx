"use client";

import { useState } from "react";

import { Title } from "./title";
import dayjs from "dayjs";
import { Body } from "./body";

export const CalendarView = () => {
  const [monthNumber, setMonthNumber] = useState<number>(dayjs().month());
  const [year, setYear] = useState<number>(dayjs().year());

  const month = dayjs().year(year).month(monthNumber);

  const handleNext = () => {
    const date = month.add(1, "month");
    setMonthNumber(date.month());
    setYear(date.year());
  };
  const handlePrevious = () => {
    const date = month.subtract(1, "month");
    setMonthNumber(date.month());
    setYear(date.year());
  };

  return (
    <div className="flex flex-col gap-2">
      <Title month={month} previous={handlePrevious} next={handleNext}></Title>
      <Body month={month}></Body>
    </div>
  );
};
