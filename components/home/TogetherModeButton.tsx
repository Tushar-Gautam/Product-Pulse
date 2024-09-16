"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TogetherModeFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 2000);

    return () => clearInterval(animationInterval);
  }, []);

  const handleStartShopping = () => {
    setIsOpen(false);
    router.push("/together-mode");
  };

  if (pathname === "/together-mode") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div
            className={`w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer ${
              isAnimating ? "scale-110" : "scale-100"
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onClick={handleStartShopping}
            role="button"
            tabIndex={0}
            aria-label="TogetherMode - Now Live!"
          >
            <Users className="h-8 w-8" />
            <Sparkles className="h-4 w-4 absolute top-1 right-1 text-yellow-300 animate-pulse" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-72 p-4 bg-popover text-popover-foreground border border-border shadow-xl"
          side="top"
          align="end"
          sideOffset={16}
        >
          <div className="space-y-3">
            <h4 className="font-bold text-xl text-primary">
              TogetherMode is Live!
            </h4>
            <p className="text-sm text-muted-foreground">
              🎉 Shop with friends in real-time! Don&apos;t miss out on this
              revolutionary shopping experience.
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary rounded" />
            <p className="text-xs font-semibold text-accent-foreground">
              👥 Join now and experience new way of shopping!
            </p>
            <Button
              className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleStartShopping}
            >
              Start Shopping Together
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
