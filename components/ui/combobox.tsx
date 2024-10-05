"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface ProfilePictureProps {
  src: string | undefined;
  name: string;
}
const ProfilePicture = ({ src, name }: ProfilePictureProps) => {
  if (src)
    return (
      <img
        className="h-6 w-6 rounded-full"
        src={`/users/${src}.png`}
        alt={`${name}'s photo`}
      />
    );
  else
    return (
      <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
        {name[0]}
      </div>
    );
};

interface ComboboxProps {
  placeholder?: string;
  options: { value: string; label: string; img?: string }[];
  defaultValues?: string[];
  onSelect?: (values: string[]) => void;
}

export function Combobox({
  placeholder,
  options,
  defaultValues = [],
  onSelect,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<string[]>(defaultValues);

  const placeholderText = placeholder || "Select...";

  const handleValueSelect = (value: string) => {
    const newValues = values.includes(value)
      ? values.filter((v) => v !== value)
      : [...values, value];

    onSelect?.(newValues);
    setValues(newValues);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {values.length ? `${values.length} selected` : "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholderText} />
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {options.map((o) => (
                <CommandItem
                  key={o.value}
                  value={o.value}
                  onSelect={handleValueSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      values.includes(o.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex flex-row gap-1 items-center">
                    <ProfilePicture name={o.label} src={o.img} />
                    {o.label}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
