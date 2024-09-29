import { ReservationWithPeople } from "@/types/reservation";
import { Dayjs } from "dayjs";

export interface CalendarViewProps {
  reservations: ReservationWithPeople[];
}

export interface TitleProps {
  month: Dayjs;
  next: () => void;
  previous: () => void;
}

export interface BodyProps {
  month: Dayjs;
  reservations: ReservationWithPeople[];
  setOpenedDay: (date: string) => void;
}

export interface DayProps {
  n: number;
  highlighted?: boolean;
  reservation: ReservationWithPeople | undefined;
  onClick: () => void;
}

export interface DialogProps {
  editingDay: string;
}
