import { Button, DialogTrigger } from "@/components/ui";
import { DayProps } from "./types";

export const Day = ({ n, onClick, withDot, highlighted = false }: DayProps) => {
  const dotColor = highlighted ? "bg-red-600" : "bg-gray-400";
  return (
    <DialogTrigger asChild>
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
    </DialogTrigger>
  );
};
