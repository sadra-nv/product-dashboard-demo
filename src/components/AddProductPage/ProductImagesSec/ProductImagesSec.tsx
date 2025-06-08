import { useDnd } from "../../../hooks/useDnD";
import { useState } from "react";

import ImagesPreview from "./ImagesPreview";
import ImageDropBox from "./ImageDropBox";

export default function ProductImagesSec() {
  const [modalOpen, setModalOpen] = useState(false);

  const dropProps = useDnd("images");

  return (
    <section className="pb-6 border-b border-neutral-200 mb-16">
      <h1 className="text-2xl font-bold text-neutral-50 mb-10">
        Product Images
      </h1>

      <ImagesPreview selectedFiles={dropProps.selectedFiles} />

      <ImageDropBox dropProps={dropProps} />
    </section>
  );
}
