"use client";
import { ReservationWithPeople } from "@/types/reservation";
import { Person } from "@prisma/client";
import { createContext, useContext } from "react";

// People
interface PeopleContextType {
  people: Person[];
}
const PeopleContext = createContext<PeopleContextType>({
  people: [],
});
PeopleContext.displayName = "PeopleContext";

// Reservations
interface ReservationContextType {
  reservations: ReservationWithPeople[];
}
const ReservationContext = createContext<ReservationContextType>({
  reservations: [],
});
ReservationContext.displayName = "ReservationContext";

interface Props {
  children: React.ReactNode;
  people: Person[];
  reservations: ReservationWithPeople[];
}
export const DataProvider = ({ children, people, reservations }: Props) => {
  return (
    <PeopleContext.Provider value={{ people }}>
      <ReservationContext.Provider value={{ reservations }}>
        {children}
      </ReservationContext.Provider>
    </PeopleContext.Provider>
  );
};

export const usePeople = () => {
  // TODO: remove null assertion. This is a temporary fix because this hook must only
  // be called when the user is logged in
  return useContext(PeopleContext).people;
};
export const useReservations = () => {
  return useContext(ReservationContext).reservations;
};
