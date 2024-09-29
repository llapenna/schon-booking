"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlusIcon } from "lucide-react";
import { useState } from "react";

import { Button, Input, DropArea, Label } from "./ui";

export const UserDialog = () => {
  const [isFileUploading, setIsFileUploading] = useState(false);

  const [name, setName] = useState("");
  const [fileId, setFileId] = useState<string | null>(null);

  const handleFileUpdate = async (file: File) => {
    setIsFileUploading(true);

    const form = new FormData();
    form.append("image", file);

    fetch("/image", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => setFileId(data.id))
      .catch(console.error)
      .finally(() => setIsFileUploading(false));
  };

  const createUser = () => {
    fetch("/user", {
      method: "POST",
      body: JSON.stringify({ name, fileId }),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon">
          <UserPlusIcon size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Users</DialogTitle>

        {/* BODY */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label>
              Name <span className="text-red-600">*</span>
            </Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Alejo Schön"
            ></Input>
          </div>

          <DropArea
            isLoading={isFileUploading}
            onFileChange={handleFileUpdate}
          ></DropArea>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={createUser}>Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
