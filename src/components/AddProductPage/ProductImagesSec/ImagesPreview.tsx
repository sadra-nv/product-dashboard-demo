import { useFormContext } from "react-hook-form";
import { useImagePreviews } from "../../../hooks/useImagePreviews";
import type { AddProductFormType } from "../../../lib/zod-schemas";
import { cn } from "../../../lib/utils";

export default function ImagesPreview({
  selectedFiles,
}: {
  selectedFiles: File[] | [];
}) {
  const imagePreviews = useImagePreviews(selectedFiles);

  const { watch } = useFormContext<AddProductFormType>();

  const mainImageIndex = watch("main_image");

  return (
    <>
      {imagePreviews?.length > 0 && (
        <div className=" mt-16">
          <p className="text-sm mb-3 font-medium text-neutral-200">
            Chosen Images
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6">
            {imagePreviews.map((src, i) => (
              <div
                key={i}
                className={cn(
                  "relative border-2 bg-neutral-700 border-neutral-300 rounded-lg overflow-hidden",
                  { "border-purple-600": mainImageIndex === i.toString() }
                )}
              >
                <img
                  src={src}
                  alt={`Selected picture number ${i}`}
                  className="object-contain w-full h-40"
                  width={300}
                  height={160}
                />
                <div
                  className={cn(
                    "bg-neutral-50 font-bold text-purple-600   ",
                    "px-4 py-2 text-center rounded-t-lg bottom-0 left-1/2 -translate-x-1/2 absolute",
                    {
                      "bg-purple-600 text-neutral-50":
                        mainImageIndex === i.toString(),
                    }
                  )}
                >
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
