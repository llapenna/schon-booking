"use client";

import { dayjs } from "@/lib/date";
import { useState } from "react";

import {
  Button,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Combobox,
  DialogClose,
  Textarea,
} from "@/components/ui";
import { usePeople, useReservations } from "@/components/context/data";

import { DialogProps } from "./types";
import { TrashIcon } from "lucide-react";

export const Drawer = ({ editingDay }: DialogProps) => {
  const people = usePeople();
  const reservations = useReservations();
  const reservation = reservations.find(
    (r) => dayjs(r.date).format("YYYY-MM-DD") === editingDay
  );

  const [notes, setNotes] = useState(reservation?.notes ?? "");
  const [selectedPeople, setSelectedPeople] = useState<string[]>(
    (reservation?.people ?? []).map((p) => String(p.id))
  );

  const peopleList = people.map((p) => ({
    value: String(p.id),
    label: p.name,
  }));

  const handleSubmit = () => {
    if (reservation) {
      fetch(`/reservation/${reservation.id}`, {
        method: "PUT",
        body: JSON.stringify({
          people: selectedPeople,
          notes,
        }),
      });
    } else {
      fetch("/reservation", {
        method: "POST",
        body: JSON.stringify({
          people: selectedPeople,
          date: editingDay,
          notes,
        }),
      });
    }
  };

  const deleteReservation = () => {
    fetch(`/reservation/${reservation!.id}`, { method: "DELETE" });
  };

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>{reservation ? "Edit" : "Make"} reservation</DrawerTitle>
      </DrawerHeader>

      {/* BODY */}
      <div className="px-4 flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <Combobox
            defaultValues={reservation?.people.map((p) => String(p.id))}
            options={peopleList}
            onSelect={(values) => setSelectedPeople(values)}
          />
          {reservation && (
            <DialogClose asChild>
              <Button size="icon" variant="outline" onClick={deleteReservation}>
                <TrashIcon size={16} className="text-red-600" />
              </Button>
            </DialogClose>
          )}
        </div>
        <Textarea
          placeholder="Notes... (optional)"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        ></Textarea>
      </div>

      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="secondary">Cancel</Button>
        </DrawerClose>
        <DrawerClose asChild>
          <Button onClick={handleSubmit} disabled={!selectedPeople.length}>
            Save
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};
