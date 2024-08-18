import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.jpeg"
        width={44}
        height={44}
        priority
        alt="Logo Image"
        className="rounded-md"
      />
    </Link>
  );
}

export default Logo;
