import { Link } from "react-router";
import { useImagePreviews } from "../../../hooks/useImagePreviews";
import type { Product } from "../../../lib/types";
import { buttonVariants } from "../../UI/Buttons/button-variants";
import { cn } from "../../../lib/utils";
import { Fragment } from "react/jsx-runtime";

export default function ProductItem({ product }: { product: Product }) {
  const { description, etries, images, id, main_image, name, totall_quantity } =
    product;

  const imagesSrc = useImagePreviews(images);

  return (
    <div
      className="max-w-md rounded-2xl overflow-hidden shadow-lg border p-4 space-y-4 border-neutral-200
    flex-col flex"
    >
      <img
        src={imagesSrc[Number(main_image)]}
        alt={name}
        className="w-full h-60 object-cover rounded-xl"
      />
      <div className="space-y-1 line-clamp-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      <div>
        <h2 className="text-base mb-4 font-medium">other images:</h2>
        <div className="flex gap-2 overflow-x-auto flex-wrap">
          {imagesSrc.map((img, i) => {
            return (
              <Fragment key={i}>
                {i === Number(main_image) ? (
                  ""
                ) : (
                  <img
                    src={img}
                    width={64}
                    height={64}
                    alt={`Product ${i + 1}`}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="font-medium">Available Sizes</h3>
        <ul className="text-sm text-neutral-400 flex flex-wrap gap-2">
          {etries.map((entry, i) => (
            <li key={i} className="flex justify-between">
              <span>{entry.size}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-medium">Available Colors</h3>
        <ul className="text-sm text-neutral-400 flex flex-wrap gap-2">
          {etries.map((entry, i) => (
            <li key={i} className="flex justify-between">
              <span>{entry.color}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm ">
        Total Quantity:{" "}
        <span className="text-neutral-400">{totall_quantity}</span>
      </p>

      <Link
        to={`/product/${id}`}
        className={cn(
          "mt-auto",
          buttonVariants({ size: "full", variant: "purple" })
        )}
      >
        View Product
      </Link>
    </div>
  );
}
