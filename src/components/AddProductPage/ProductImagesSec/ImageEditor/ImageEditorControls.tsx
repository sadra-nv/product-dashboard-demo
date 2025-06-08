import { useEffect } from "react";
import { Button } from "../../../UI/Buttons/Button";

function ImageEditorControls({
  handleCrop,
  onCancel,
  isSubmitting,
}: {
  handleCrop: () => void;
  onCancel: () => void;
  isSubmitting: boolean;
}) {
  // handle Enter key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleCrop();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCrop]);

  return (
    <div className="w-full flex gap-3">
      <div className="flex flex-col gap-3 grow justify-between  ">
        <div className="flex   gap-3 flex-row">
          <Button
            size="full"
            variant="purple-outline"
            className=" mx-auto mt-auto p-2 truncate"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            size="full"
            disabled={isSubmitting}
            className="mx-auto mt-auto  p-2 truncate disabled:cursor-wait disabled:brightness-75"
            onClick={handleCrop}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ImageEditorControls;
