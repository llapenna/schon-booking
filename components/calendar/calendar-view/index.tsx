"use client";

import { useState } from "react";
import { dayjs } from "@/lib/date";

import { Drawer as DrawerWrapper } from "@/components/ui/drawer";

import { Title } from "./title";
import { Body } from "./body";
import { Drawer } from "./drawer";
import { CalendarViewProps } from "./types";

export const CalendarView = ({ reservations }: CalendarViewProps) => {
  const [monthNumber, setMonthNumber] = useState<number>(dayjs().month());
  const [year, setYear] = useState<number>(dayjs().year());

  const [openedDay, setOpenedDay] = useState("");
  const editingReservation = reservations.find(
    (reservation) => reservation.date === openedDay
  );

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
    <DrawerWrapper>
      <div className="flex flex-col gap-2">
        <Title
          month={month}
          previous={handlePrevious}
          next={handleNext}
        ></Title>
        <Body
          month={month}
          reservations={reservations}
          setOpenedDay={setOpenedDay}
        />
      </div>
      <Drawer key={openedDay} reservation={editingReservation} />
    </DrawerWrapper>
  );
};
