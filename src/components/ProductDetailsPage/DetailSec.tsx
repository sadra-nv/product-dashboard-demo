import { use } from "react";
import type { Product } from "../../lib/types";
import { useImagePreviews } from "../../hooks/useImagePreviews";
import ProductEntriesTable from "../Shared/ProductEntriesTable";
import DetailImages from "./DetailImages";

export default function DetailSec({
  productPromise,
}: {
  productPromise: Promise<Product | 500 | null>;
}) {
  const product = use(productPromise);

  const imagesSrc = useImagePreviews(product === 500 ? [] : product?.images);

  if (product === 500 || !product) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <h2 className="text-center text-lg text-red-600 font-bold">
          Failed to get product deatails!
        </h2>
      </div>
    );
  }

  const { description, etries, main_image, name, totall_quantity } = product;

  return (
    <section>
      <div className="container space-y-8 ">
        <div className=" ">
          <div className="border-b-2 border-neutral-200 pb-10">
            <h2 className="text-neutral-50 font-semibold text-xl mb-2  ">
              Info:
            </h2>
            <h1 className=" text-base font-medium">
              <span className="font-bold">Name: {""}</span>
              {name}
            </h1>
            <p className=" text-base font-medium mt-6">
              <span className="font-bold ">Description: {""}</span>{" "}
              {description}
            </p>
          </div>

          <DetailImages imagesSrc={imagesSrc} main_image={main_image} />
        </div>

        <ProductEntriesTable entries={etries} totalQuantity={totall_quantity} />
      </div>
    </section>
  );
}
