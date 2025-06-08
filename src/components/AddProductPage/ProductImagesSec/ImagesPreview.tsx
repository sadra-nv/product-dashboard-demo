import { useImagePreviews } from "../../../hooks/useImagePreviews";

export default function ImagesPreview({
  selectedFiles,
}: {
  selectedFiles: File[] | [];
}) {
  const imagePreviews = useImagePreviews(selectedFiles);

  return (
    <div className=" mt-16">
      <p className="text-sm mb-3 font-medium text-neutral-200">Chosen Images</p>
      {imagePreviews?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6">
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
              <div className="bg-neutral-50 font-bold text-purple-600   px-4 py-2 text-center rounded-t-lg bottom-0 left-1/2 -translate-x-1/2 absolute">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
