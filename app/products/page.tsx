import ProductInfiniteScroll from "@/components/Products/ProductInfiniteScroll";
import { fetchAllProducts } from "@/utils/actions";

async function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  const products = await fetchAllProducts({ search });
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <ProductInfiniteScroll
      intialProducts={products}
      layout={layout}
      search={search}
      key={search}
      searchTerm={searchTerm}
    />
  );
}
export default ProductsPage;
