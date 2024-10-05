import { CalendarView } from "@/components/calendar";
import { UserDialog } from "@/components/user-dialog";
import { prisma } from "@/services/db";
import { DataProvider } from "@/components/context/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const people = await prisma.person.findMany();
  const reservations = await prisma.reservation.findMany({
    include: {
      people: true,
    },
  });

  return (
    <DataProvider people={people} reservations={reservations}>
      <main className="relative w-screen h-screen flex flex-col">
        <nav className="flex flex-row justify-end p-2">
          <UserDialog />
        </nav>
        <div className="p-6 flex-1 flex flex-col items-center justify-center">
          <h1>Schön Booking</h1>
          <CalendarView reservations={reservations}></CalendarView>
        </div>
      </main>
      <div className="absolute flex flex-row justify-center items-center w-full bottom-4">
        <p>
          Made with ❤️ by{" "}
          <a className="underline" href="https://github.com/llapenna">
            Lucho
          </a>
        </p>
      </div>
    </DataProvider>
  );
}
