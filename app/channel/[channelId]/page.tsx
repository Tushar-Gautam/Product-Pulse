"use client";

import { useUser } from "@clerk/nextjs";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useRef } from "react";

const ChannelRoom = ({ params }: { params: { channelId: string } }) => {
  const channelID = params.channelId;
  const { user } = useUser();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const joinRoom = async () => {
      if (!containerRef.current || !user?.id || !user?.fullName) return;

      const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
      const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET_KEY;

      if (!appID || !serverSecret) {
        console.error("ZEGO credentials are missing");
        return;
      }

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        channelID,
        user.id,
        user.fullName,
        300
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: "Sharable link",
            url: `${window.location.origin}${window.location.pathname}?roomID=${channelID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    joinRoom();
  }, [channelID, user]);

  return <div className="w-full h-screen" ref={containerRef}></div>;
};

export default ChannelRoom;
