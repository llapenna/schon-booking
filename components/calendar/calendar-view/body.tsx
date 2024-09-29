import { BodyProps } from "./types";
import { nArray } from "@/helper/number";
import { Day } from "./day";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { WEEKDAYS } from "@/lib/date";

export const Body = ({ month }: BodyProps) => {
  const offset = month.startOf("month").day();

  const daysAmount = month.daysInMonth();
  const extraRow = offset + daysAmount > 7 * 5;
  const rows = extraRow ? "grid-rows-6" : "grid-rows-5";

  const maxDays = 7 * (extraRow ? 6 : 5);
  const daysLeft = maxDays - (daysAmount + offset);

  console.log(daysAmount);
  console.log(month.daysInMonth());

  return (
    <Dialog>
      <div className="grid grid-cols-7 justify-items-center">
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className={`grid grid-cols-7 ${rows} gap-2`}>
        {nArray(offset)
          .reverse()
          .map((n) => (
            <Day
              key={`offset-${n}`}
              n={month
                .subtract(1, "month")
                .endOf("month")
                .subtract(n, "day")
                .date()}
            ></Day>
          ))}

        {nArray(daysAmount).map((n) => (
          <Day key={`day-${n}`} n={n + 1} highlighted></Day>
        ))}

        {nArray(daysLeft).map((n) => (
          <Day key={`left-${n}`} n={n + 1}></Day>
        ))}
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when yo&apos;re done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
