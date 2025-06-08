"use client";
import { type Ref, useCallback, useEffect, useRef, useState } from "react";
import Cropper, { type ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function ImageCropView({
  file,
  ref,
  onError,
}: {
  file: File;
  ref: Ref<ReactCropperElement>;
  onError: () => void;
}) {
  const [src, setSrc] = useState<string>();
  const errorHandled = useRef(false);

  const handleError = useCallback(() => {
    if (!errorHandled.current) {
      errorHandled.current = true;
      onError();
    }
  }, [onError]);

  useEffect(() => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setSrc(reader.result);
      } else {
        handleError();
      }
    };

    reader.onerror = () => {
      handleError();
    };

    reader.readAsDataURL(file);
  }, [file, handleError]);

  return (
    <>
      {src && (
        // handle unsupported image sources with img onError attribute
        <img
          src={src}
          onError={handleError}
          hidden
          style={{ display: "none" }}
          alt="validation-check"
          width={1}
          height={1}
        />
      )}
      <Cropper
        src={src}
        className="w-full xs:min-h-96 h-full rounded-md sm:rounded-2xl sm:rounded-br-md sm:rounded-bl-md overflow-hidden"
        initialAspectRatio={16 / 9}
        guides
        restore
        cropBoxResizable
        responsive
        rotatable
        minCropBoxHeight={20}
        minCropBoxWidth={75}
        dragMode="move"
        rotateTo={0}
        maxLength={400}
        ref={ref}
      />
    </>
  );
}
