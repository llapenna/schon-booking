import { Reservation } from "@/app/page";
import { DialogContent } from "@/components/ui";
import { Dayjs } from "dayjs";

export interface CalendarViewProps {
  reservations: Reservation[];
}

export interface TitleProps {
  month: Dayjs;
  next: () => void;
  previous: () => void;
}

export interface BodyProps {
  month: Dayjs;
  reservations: Reservation[];
  setOpenedDay: (date: string) => void;
}

export interface DayProps {
  n: number;
  highlighted?: boolean;
  reservation: Reservation | undefined;
  onClick: () => void;
}

export interface DialogProps {
  reservation: Reservation | undefined;
}
