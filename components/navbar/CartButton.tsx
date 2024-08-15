import { LuShoppingCart } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

function CartButton() {
  const numItemsCard = 9;
  return (
    <Button
      asChild
      variant="outline"
      className="flex justify-center items-center relative"
      size="icon"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex justify-center items-center text-xs">
          9
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
