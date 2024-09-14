"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Users } from "lucide-react";

export default function TogetherModeFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground transition-colors shadow-lg flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => console.log("TogetherMode activated!")}
            role="button"
            tabIndex={0}
            aria-label="TogetherMode - Coming Soon"
          >
            <Users className="h-6 w-6" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-64 p-4 bg-popover text-popover-foreground border border-border"
          side="top"
          align="end"
          sideOffset={16}
        >
          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-primary">
              Together Mode
            </h4>
            <p className="text-sm text-muted-foreground">
              Coming soon: Shop with friends in real-time!
            </p>
            <div className="h-1 w-full bg-secondary rounded"></div>
            <p className="text-xs text-accent-foreground">
              👥 Stay tuned for collaborative shopping!
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
