import { CalendarView } from "@/components/calendar";

export const dynamic = "force-dynamic";

export interface Reservation {
  id: string;
  persons: string[];
  date: string;
}

const DATA: Reservation[] = [
  {
    id: "1",
    persons: ["Alice", "Bob"],
    date: "2024-09-23",
  },
  {
    id: "2",
    persons: ["Alice", "David"],
    date: "2024-10-02",
  },
  {
    id: "3",
    persons: ["Eve"],
    date: "2024-10-21",
  },
];

export default function Home() {
  return (
    <main className=" p-6 w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <h1>Schön Booking</h1>
      <CalendarView reservations={DATA}></CalendarView>
    </main>
  );
}
