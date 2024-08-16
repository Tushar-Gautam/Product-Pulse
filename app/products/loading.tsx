"use client";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
      <Skeleton className="h-[33vw]" />
    </div>
  );
}
export default loading;
