import { useImagePreviews } from "../../../hooks/useImagePreviews";

export default function ImagesPreview({
  selectedFiles,
}: {
  selectedFiles: File[] | [];
}) {
  const imagePreviews = useImagePreviews(selectedFiles);

  return (
    <>
      {imagePreviews?.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {imagePreviews.map((src, i) => (
            <div
              key={i}
              className="relative border bg-neutral-700 border-neutral-300 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={`Selected picture number ${i}`}
                className="object-contain w-full h-40"
                width={300}
                height={160}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
