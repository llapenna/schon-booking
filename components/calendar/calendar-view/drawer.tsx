import {
  Button,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui";
import { DialogProps } from "./types";
import { Combobox } from "@/components/ui/combobox";

export const Drawer = ({ reservation }: DialogProps) => {
  const reservationExists = Boolean(reservation);
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>
          {reservationExists ? "Edit" : "Make"} reservation
        </DrawerTitle>
      </DrawerHeader>

      {/* BODY */}
      <div className="px-4">
        <Combobox
          defaultValues={reservation?.people}
          options={[
            {
              value: "lucho",
              label: "Lucho",
            },
            {
              value: "nay",
              label: "Nay",
            },
            {
              value: "mer",
              label: "Mer",
            },
            {
              value: "joy",
              label: "Joy",
            },
          ]}
        />
      </div>

      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="secondary">Cancel</Button>
        </DrawerClose>
        <DrawerClose asChild>
          <Button>Save</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};
