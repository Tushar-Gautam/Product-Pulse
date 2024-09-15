"use client";

import { useUser } from "@clerk/nextjs";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const ChannelRoom = ({ params }: { params: { channelId: string } }) => {
  const channelID = params.channelId;
  const { user } = useUser();

  let myMeeting: any = async (element: any) => {
    const appID = +process.env.ZEGO_APP_ID!;
    const serverSecret = process.env.ZEGO_SERVER_SECRET_KEY!;
    console.log(process.env.ZEGO_APP_ID, serverSecret, channelID, user);

    if (!user?.id || !user?.fullName) throw new Error("User not found");

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      channelID,
      user?.id,
      user?.fullName || "user",
      300
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Sharable link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            channelID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return <div className="w-full h-screen" ref={myMeeting}></div>;
};
export default ChannelRoom;
