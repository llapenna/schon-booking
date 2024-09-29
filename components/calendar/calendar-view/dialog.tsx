import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { DialogProps } from "./types";

export const Dialog = ({ reservation, ...props }: DialogProps) => {
  return (
    <DialogContent {...props}>
      <DialogHeader>
        <DialogTitle>Reservations {reservation?.date ?? "none"}</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when yo&apos;re done.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};
