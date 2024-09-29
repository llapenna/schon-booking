import { CalendarView } from "@/components/calendar";

export const dynamic = "force-dynamic";

export interface Reservation {
  id: string;
  people: string[];
  date: string;
}

const DATA: Reservation[] = [
  {
    id: "1",
    people: ["Alice", "Bob"],
    date: "2024-09-23",
  },
  {
    id: "2",
    people: ["Alice", "David"],
    date: "2024-10-02",
  },
  {
    id: "3",
    people: ["Eve"],
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
