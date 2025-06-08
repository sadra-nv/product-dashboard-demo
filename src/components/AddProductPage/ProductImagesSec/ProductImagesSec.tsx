import { useDnd } from "../../../hooks/useDnD";
import ImagesPreview from "./ImagesPreview";
import ImageDropBox from "./ImageDropBox";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import ImageEditModal from "./ImageEditor/ImageEditModal";

export default function ProductImagesSec() {
  const [modalOpen, setModalOpen] = useState(false);

  const { watch, setValue } = useFormContext();

  const selectedImages = watch("images");

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleImageDrop = () => {
    setModalOpen(true);
  };

  const submitCroppedImage = (file: File) => {
    const updatedFiles = [...selectedImages, file];

    setValue("images", updatedFiles, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const dropProps = useDnd("images", handleImageDrop);

  return (
    <section className="pb-6 border-b border-neutral-200 mb-16">
      <h1 className="text-2xl font-bold text-neutral-50 mb-10">
        Product Images
      </h1>

      <ImageEditModal
        submitCroppedImage={submitCroppedImage}
        isOpen={modalOpen}
        onClose={handleClose}
        selectedImage={dropProps.selectedImage}
      />

      <ImagesPreview selectedFiles={selectedImages} />

      <ImageDropBox dropProps={dropProps} />
    </section>
  );
}
