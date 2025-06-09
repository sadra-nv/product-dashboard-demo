import { Link, useParams } from "react-router";
import type { Product } from "../lib/types";
import { getProductById } from "../lib/indexDB";
import DetailSec from "../components/ProductDetailsPage/DetailSec";
import { Suspense } from "react";
import SpinnerSec from "../components/UI/Loading/SpinnerSec";
import { cn } from "../lib/utils";
import { buttonVariants } from "../components/UI/Buttons/button-variants";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  console.log(productId);

  if (!productId) {
    return (
      <main className="min-h-screen w-full bg-neutral-950">
        <div className="w-full h-80 flex justify-center items-center">
          <h2 className="text-center text-lg text-red-600 font-bold">
            Not a valid id
          </h2>
        </div>
      </main>
    );
  }

  const product: Promise<500 | Product | null> = getProductById(
    Number(productId)
  ).catch(() => {
    return 500;
  });

  return (
    <main className="min-h-screen w-full bg-neutral-950 py-16">
      <Suspense fallback={<SpinnerSec />}>
        <DetailSec productPromise={product} />
        <Link
          to="/"
          className={cn(
            "w-40 mt-10 mx-auto",
            buttonVariants({
              size: "md",
              variant: "purple",
            })
          )}
        >
          Go Back
        </Link>
      </Suspense>
    </main>
  );
}
