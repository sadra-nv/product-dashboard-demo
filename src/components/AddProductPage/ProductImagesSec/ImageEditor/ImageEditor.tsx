"use client";

import ImageCropView from "./ImageCropView";
import "./ImageEditor.css";
import { type ReactCropperElement } from "react-cropper";
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import ImageEditorControls from "./ImageEditorControls";

function ImageEditor({
  file,
  submitHandler,
  closeHandler,
}: {
  file: File;
  closeHandler: () => void;
  submitHandler: (file: File) => void;
}) {
  const { setError } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cropperRef = useRef<ReactCropperElement>(null);

  useEffect(() => {
    history.pushState(null, "", window.location.href);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        window.history.back();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeHandler]);

  const cancelHandler = () => {
    window.history.back();
    closeHandler();
  };

  const handleCrop = async () => {
    if (isSubmitting) return;

    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    setIsSubmitting(true);

    cropper.getCroppedCanvas().toBlob((blob) => {
      if (!blob) {
        handleError();
        return;
      }

      const croppedFile = new File([blob], file.name, {
        type: blob.type,
        lastModified: Date.now(),
      });

      submitHandler(croppedFile);

      cancelHandler();
    }, file.type);
  };

  const handleError = () => {
    setError("images", {
      message: "Somthing went wrong while processing the photo",
    });

    cancelHandler();
  };

  return (
    <div className="flex flex-col h-full md:max-h-[90vh] w-full xs:h-auto xs:justify-center lg:gap-5 gap-8">
      <div className="max-h-full xs:max-h-[25rem] relative grow xs:grow-0 w-full h-full overflow-hidden">
        <ImageCropView file={file} onError={handleError} ref={cropperRef} />
      </div>
      <ImageEditorControls
        isSubmitting={isSubmitting}
        handleCrop={handleCrop}
        onCancel={cancelHandler}
      />
    </div>
  );
}
export default ImageEditor;
