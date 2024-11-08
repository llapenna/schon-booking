import {
  Button,
  DrawerTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui";

import { DayProps } from "./types";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { UserImage } from "@/components/ui/user-image";

export const Day = ({
  date,
  onClick,
  reservation,
  highlighted = false,
}: DayProps) => {
  const withDot = Boolean(reservation);
  const dotColor = highlighted ? "bg-red-600" : "bg-gray-400";

  const isDisabled = date.isBefore(dayjs(), "day");
  const isToday = date.isSame(dayjs(), "day");

  return (
    <HoverCard>
      <HoverCardContent>
        {reservation ? (
          <div className="flex flex-row items-center gap-1">
            {reservation.people.map((p) => (
              <UserImage
                key={p.id}
                imageId={p.photo}
                name={p.name}
                // alt={p.name}
                className="h-6 w-6 rounded-full -mr-4 last-of-type:mr-2"
              />
            ))}
            <p>
              <b>{reservation.people.length}</b> people reserved this day.
            </p>
          </div>
        ) : (
          <p>No reservations</p>
        )}
      </HoverCardContent>

      {/* FIXME: when you open  */}
      <HoverCardTrigger asChild>
        <DrawerTrigger asChild>
          <Button
            disabled={date.isBefore(dayjs(), "day")}
            onClick={onClick}
            variant={highlighted ? "outline" : "ghost"}
            className={cn(
              "relative select-none",
              isToday ? "border-blue-300 border-2" : "",
              isDisabled ? "bg-zinc-300" : ""
            )}
          >
            {date.date()}
            {withDot && (
              <div
                className={`absolute rounded-full ${dotColor} h-1.5 aspect-square top-1 right-1`}
              ></div>
            )}
          </Button>
        </DrawerTrigger>
      </HoverCardTrigger>
    </HoverCard>
  );
};
