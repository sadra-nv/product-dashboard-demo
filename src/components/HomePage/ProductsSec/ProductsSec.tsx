import { Suspense } from "react";
import { getAllProductsFromIndexedDB } from "../../../lib/indexDB";
import ProductsList from "./ProductsList";
import SpinnerSec from "../../UI/Loading/SpinnerSec";
import type { Product } from "../../../lib/types";

export default function ProductsSec() {
  const allProducts: Promise<500 | Product[]> =
    getAllProductsFromIndexedDB().catch(() => {
      return 500;
    });

  return (
    <section className="container ">
      <h2 className="text-xl font-bold text-neutral-50 mb-5 pt-10 w-full border-t-2 border-neutral-200">
        List of Products
      </h2>

      <Suspense fallback={<SpinnerSec />}>
        <ProductsList allProductsPromise={allProducts} />
      </Suspense>
    </section>
  );
}
