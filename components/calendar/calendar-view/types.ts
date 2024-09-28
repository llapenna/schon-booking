import { Dayjs } from "dayjs";

export interface TitleProps {
  month: Dayjs;
  next: () => void;
  previous: () => void;
}

export interface BodyProps {
  month: Dayjs;
}

export interface DayProps {
  highlighted?: boolean;
  n: number;
}
