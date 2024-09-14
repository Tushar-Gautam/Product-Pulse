"use client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

function Providers({ children }: { children: React.ReactNode }) {
  const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <AgoraRTCProvider client={client}>{children}</AgoraRTCProvider>
      </ThemeProvider>
    </>
  );
}
export default Providers;
