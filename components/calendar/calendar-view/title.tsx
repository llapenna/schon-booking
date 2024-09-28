"use client";

import { Button } from "@/components/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TitleProps } from "./types";

export const Title = ({ month, next, previous }: TitleProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <Button variant="outline" size="sm" onClick={previous}>
        <ChevronLeft size={16}></ChevronLeft>
      </Button>
      <h2>
        {month.format("MMMM")} {month.format("YYYY")}
      </h2>
      <Button variant="outline" size="sm" onClick={next}>
        <ChevronRight size={16}></ChevronRight>
      </Button>
    </div>
  );
};
