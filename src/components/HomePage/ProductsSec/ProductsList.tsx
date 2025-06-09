import { use } from "react";
import type { Product } from "../../../lib/types";
import ProductItem from "./ProductItem";

export default function ProductsList({
  allProductsPromise,
}: {
  allProductsPromise: Promise<Product[] | 500>;
}) {
  const allProducts = use(allProductsPromise);

  if (allProducts === 500) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <h2 className="text-center text-lg text-red-600 font-bold">
          Failed to get products!
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
      {allProducts.map((item) => (
        <ProductItem product={item} key={item.id.toString()} />
      ))}
    </div>
  );
}
