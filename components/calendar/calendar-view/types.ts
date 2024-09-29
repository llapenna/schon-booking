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
  withDot: boolean;
  onClick: () => void;
}

export interface DialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogContent> {
  reservation: Reservation | undefined;
}
