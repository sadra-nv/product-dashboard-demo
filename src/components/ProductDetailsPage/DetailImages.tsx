import { InfoIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function DetailImages({
  imagesSrc,
  main_image,
}: {
  imagesSrc: string[];
  main_image: string;
}) {
  const [mainImageIndex, setMainImageIndex] = useState(main_image);

  const handleClick = (index: string) => {
    setMainImageIndex(index);
  };

  return (
    <div className="space-y-4 border-b-2 border-neutral-200 pb-10 mt-10">
      <h2 className="text-neutral-50 font-semibold text-xl mb-2">Images:</h2>

      <div>
        <div className="relative border-2 bg-neutral-700 border-neutral-300 rounded-lg overflow-hidden max-w-200 mx-auto">
          <img
            src={imagesSrc[Number(mainImageIndex)]}
            alt="main image"
            className="object-contain w-full h-auto max-h-120 "
            width={600}
            height={500}
          />
        </div>

        <div className="flex gap-2 flex-wrap mt-10 ">
          {imagesSrc.map((img, i) => (
            <img
              onClick={() => {
                handleClick(i.toString());
              }}
              key={i}
              src={img}
              alt={`Gallery image ${i + 1}`}
              className="w-20 h-20 object-cover cursor-pointer rounded border"
            />
          ))}
        </div>

        <p className="mt-3 text-purple-600">
          <InfoIcon className="w-3 inline-block mr-1" />
          <span>click on images to view them in a bigger size</span>
        </p>
      </div>
    </div>
  );
}
