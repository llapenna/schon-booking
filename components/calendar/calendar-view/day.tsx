import { Button, DialogTrigger } from "@/components/ui";
import { DayProps } from "./types";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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

      <DialogTrigger asChild>
        <HoverCardTrigger asChild>
          <Button
            onClick={onClick}
            variant={highlighted ? "outline" : "ghost"}
            className="relative"
          >
            {n}
            {withDot && (
              <div
                className={`absolute rounded-full ${dotColor} h-1.5 aspect-square top-1 right-1`}
              ></div>
            )}
          </Button>
        </HoverCardTrigger>
      </DialogTrigger>
    </HoverCard>
  );
};
