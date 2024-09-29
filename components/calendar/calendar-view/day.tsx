import {
  Button,
  DrawerTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui";

import { DayProps } from "./types";

export const Day = ({
  n,
  onClick,
  reservation,
  highlighted = false,
}: DayProps) => {
  const withDot = Boolean(reservation);
  const dotColor = highlighted ? "bg-red-600" : "bg-gray-400";

  return (
    <HoverCard>
      <HoverCardContent>
        {reservation ? (
          <p>
            <b>{reservation.people.length}</b> people reserved this day.
          </p>
        ) : (
          <p>No reservations</p>
        )}
      </HoverCardContent>

      {/* FIXME: when you open  */}
      <HoverCardTrigger asChild>
        <DrawerTrigger asChild>
          <Button
            onClick={onClick}
            variant={highlighted ? "outline" : "ghost"}
            className="relative select-none"
          >
            {n}
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
