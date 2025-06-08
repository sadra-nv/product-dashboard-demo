import {
  PlusCircleIcon,
  SealWarningIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { UseDndReturn } from "../../../hooks/useDnD";
import { Button } from "../../UI/Buttons/Button";

export default function ImageDropBox({
  dropProps,
}: {
  dropProps: UseDndReturn;
}) {
  const {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handlePaste,
    handleInputChange,
    openFileDialog,
    inputRegister,
    isDragging,
    dropError,
    inputRef,
    isDirty,
  } = dropProps;

  return (
    <div className="w-full sm:w-fit">
      <p className="text-sm mb-3 w-full text-start font-medium text-neutral-200">
        Choose Product Images
      </p>
      <div className="sm:mx-0 mx-auto lg:w-3xl">
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onPaste={handlePaste}
          className="bg-neutral-600 border-dashed border-2 h-40 w-70 lg:h-80 lg:w-lg border-purple-600 p-4 pt-5 rounded-lg
          lg:flex justify-center items-center"
        >
          <input
            type="file"
            {...inputRegister}
            ref={inputRef}
            onChange={handleInputChange}
            accept="image/*"
            className="hidden"
            multiple={false}
          />

          {isDragging && (
            <div className="  w-full h-full flex justify-center items-center font-semibold   text-neutral-50 animate-pulse">
              <span>release here</span>
            </div>
          )}
          {!isDragging && (
            <div className="relative text-base ">
              <div className="  w-fit text-xs text-center mx-auto flex items-start sm:items-center justify-start rounded-xl  ">
                <span className=" text-center">
                  {" "}
                  Drop a photo anywhere in this box
                </span>
              </div>
              <span className="inline-block text-center w-full font-medium py-3">
                or{" "}
              </span>
              <Button
                onClick={openFileDialog}
                className="flex font-semibold group gap-2 mx-auto text-lg items-center justify-center"
              >
                <span className="text-neutral-50 ">choose a file </span>
                <span className=" rounded-full text-neutral-50">
                  <PlusCircleIcon className="size-3 sm:size-5" size={20} />
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
      {dropError && isDirty && (
        <div className="w-fit mx-auto mt-4 text-base">
          <SealWarningIcon
            weight="bold"
            className="size-4 text-red-600 inline-block mr-2"
          />
          <span className="font-semibold  text-red-600">
            {dropError?.message?.toString()}
          </span>
        </div>
      )}
    </div>
  );
}
