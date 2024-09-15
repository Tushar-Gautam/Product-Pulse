"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";

const ChannelPage = () => {
  const [fullName, setFullName] = useState("");
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  const id = useId();

  useEffect(() => {
    //empty the fullName
  }, []);

  return (
    <div>
      <input
        type="text"
        id="name"
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter Your Name"
      />
      <>
        <div>
          <input
            type="text"
            id="name"
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Your Room Id"
          />
          <Button
            onClick={() => router.push(`/channel/${roomId}`)}
            disabled={!roomId}
            variant="secondary"
          >
            Join
          </Button>
        </div>
      </>
      <div>
        <button onClick={() => router.push(`/channel/${id}`)}>
          Or create a new meeting
        </button>
      </div>
    </div>
  );
};
export default ChannelPage;
