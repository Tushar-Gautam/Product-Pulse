"use client";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Product } from "@prisma/client";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

function ProductInfiniteScroll({
  intialProducts,
  layout,
  search,
  searchTerm,
}: {
  layout: string;
  intialProducts: Product[];
  search: string;
  searchTerm: string;
}) {
  const [products, setProducts] = useState<Product[]>(intialProducts);
  const [page, setPage] = useState(1);
  const [allProductsLoaded, setAllProductsLoaded] = useState(false);
  const [ref, inView] = useInView();
  const totalProducts = products.length;

  const loadMore = useCallback(async () => {
    const newProducts = await fetchAllProducts({ search, page: page + 1 });
    if (newProducts.length === 0) {
      setAllProductsLoaded(true);
      return;
    }
    setProducts([...products, ...newProducts]);
    setPage(page + 1);
  }, [search, page, products]);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  return (
    <>
      <section className="sticky top-0 z-10 bg-background">
        <div className="flex py-3 justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
        {!allProductsLoaded ? (
          <div ref={ref}>
            {layout === "grid" ? (
              <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Skeleton className="h-64" />
                <Skeleton className="h-64" />
                <Skeleton className="h-64" />
              </div>
            ) : (
              <div>
                <Skeleton className="mt-12 h-64" />
                <Skeleton className="mt-12 h-64" />
                <Skeleton className="mt-12 h-64" />
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}
export default ProductInfiniteScroll;
