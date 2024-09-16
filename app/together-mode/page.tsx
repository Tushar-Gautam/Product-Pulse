"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ShoppingCart, Sparkles, Gift } from "lucide-react";

export default function ChannelPage() {
  const [partyCode, setPartyCode] = useState("");
  const router = useRouter();
  const id = useId();

  const handleJoinParty = () => {
    if (partyCode) {
      router.push(`/together-mode/${partyCode}`);
    }
  };

  const handleStartParty = () => {
    router.push(`/together-mode/${id}`);
  };

  return (
    <div className="min-h-[50vh] min-w-[50vw] flex items-center justify-center p-4">
      <Card className="w-full max-w-md min-w-[50%] bg-background/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Product Pulse: Together Mode
          </CardTitle>
          <CardDescription className="text-lg">
            Where retail therapy meets social butterfly
            <span className=" italic text-sm block mt-1 text-gray-500 ">
              Powered by Zegocloud for seamless conferencing
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <span>Grab your besties and shop &apos;til you drop!</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Debate, decide, and discover together</span>
          </div>
          <Input
            type="text"
            placeholder="Enter Party Code (it's like a VIP pass!)"
            value={partyCode}
            onChange={(e) => setPartyCode(e.target.value)}
            className="w-full text-lg"
          />
          <Button
            onClick={handleJoinParty}
            disabled={!partyCode}
            className="w-full text-lg font-semibold"
          >
            Crash the Party! 🎉
          </Button>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleStartParty}
            variant="outline"
            className="w-full text-lg font-semibold"
          >
            Start Your Own Shopping Spree
          </Button>
        </CardFooter>
        <div className="text-center p-4 text-sm text-muted-foreground">
          <Gift className="inline-block mr-1 h-4 w-4" />
          Pro tip: More friends = more fun (and maybe split shipping?)
        </div>
      </Card>
    </div>
  );
}
