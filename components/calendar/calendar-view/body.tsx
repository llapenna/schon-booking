import { WEEKDAYS, dayjs } from "@/lib/date";
import { Dayjs } from "dayjs";

import { BodyProps } from "./types";
import { Day } from "./day";
import { getDays, getLeftBalancetDays, getRightBalanceDays } from "./util/days";

export const Body = ({ month, setOpenedDay, reservations }: BodyProps) => {
  const leftBalance = month.startOf("month").day();

  const daysAmount = month.daysInMonth();
  const extraRow = leftBalance + daysAmount > 7 * 5;
  const rows = extraRow ? "grid-rows-6" : "grid-rows-5";

  const maxDays = 7 * (extraRow ? 6 : 5);
  const rightBalance = maxDays - (daysAmount + leftBalance);

  const handleDayClick = (day: Dayjs) => () => {
    setOpenedDay(day.format("YYYY-MM-DD"));
  };

  const reservation = (date: string) =>
    reservations.find((r) => dayjs(r.date).format("YYYY-MM-DD") === date);

  return (
    <div>
      <div className="grid grid-cols-7 justify-items-center">
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className={`grid grid-cols-7 ${rows} gap-2`}>
        {getLeftBalancetDays(leftBalance, month).map((d) => (
          <Day
            key={d.format("YYYY-MM-DD")}
            n={d.date()}
            onClick={handleDayClick(d)}
            reservation={reservation(d.format("YYYY-MM-DD"))}
          ></Day>
        ))}

        {getDays(daysAmount, month).map((d) => (
          <Day
            key={d.format("YYYY-MM-DD")}
            n={d.date()}
            onClick={handleDayClick(d)}
            reservation={reservation(d.format("YYYY-MM-DD"))}
            highlighted
          ></Day>
        ))}

        {getRightBalanceDays(rightBalance, month).map((d) => (
          <Day
            key={d.format("YYYY-MM-DD")}
            n={d.date()}
            onClick={handleDayClick(d)}
            reservation={reservation(d.format("YYYY-MM-DD"))}
          ></Day>
        ))}
      </div>
    </div>
  );
};
