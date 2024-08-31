import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way you shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Shop the future with Product Pulse—where convenience meets innovation.
          Discover the latest trends, quality products, and a seamless shopping
          experience. From essentials to something special, we&apos;ve got you
          covered. Shop smarter, live better, and stay in tune with the pulse of
          modern retail.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
