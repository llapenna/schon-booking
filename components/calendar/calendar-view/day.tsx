import { Button, DialogTrigger } from "@/components/ui";
import { DayProps } from "./types";

export const Day = ({ n, highlighted = false }: DayProps) => {
  return (
    <DialogTrigger asChild>
      <Button variant={highlighted ? "outline" : "ghost"}>{n}</Button>
    </DialogTrigger>
  );
};
