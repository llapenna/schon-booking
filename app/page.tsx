import { CalendarView } from "@/components/calendar";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <h1>Schön Booking</h1>
      <CalendarView></CalendarView>
    </main>
  );
}
