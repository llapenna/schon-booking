import { Prisma } from "@prisma/client";

export type ReservationWithPeople = Prisma.ReservationGetPayload<{
  include: {
    people: true;
  };
}>;
