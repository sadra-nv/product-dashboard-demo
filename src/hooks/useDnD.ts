import {
  type ClipboardEvent,
  type DragEvent,
  useRef,
  useState,
  type RefObject,
} from "react";
import {
  useFormContext,
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
  type UseFormRegisterReturn,
} from "react-hook-form";

export interface UseDndReturn {
  isDirty: boolean;
  isDragging: boolean;
  dropError?: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  selectedImage: File | null;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRegister: UseFormRegisterReturn;
  inputRef: RefObject<HTMLInputElement | null>;
  handleDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handlePaste: (e: ClipboardEvent<HTMLDivElement>) => void;
  openFileDialog: () => void;
}

export const useDnd = (
  fieldName: string,
  onSuccess?: () => void
): UseDndReturn => {
  const {
    setError,
    register,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const dropError = errors[fieldName];
  const isDirty = dirtyFields[fieldName];

  const inputRegister = { ...register(fieldName) };

  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | File>(null);

  const dragCounter = useRef(0);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // main function for submitting pictures, other event handlers call this
  const handleFiles = (files: File[]) => {
    if (!files[0]?.type.startsWith("image/")) {
      const errorMsg = "The file format is not supported";
      setError(fieldName, { message: errorMsg });
      return;
    }

    setSelectedImage(files[0]);
    onSuccess?.();
  };

  // handles the onChange for the file input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFiles([file]);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current += 1;
    if (dragCounter.current === 1) setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files || []);
    handleFiles(files);
  };

  const handlePaste = (e: ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const items = Array.from(e.clipboardData.items || []);
    const file = items.find((item) => item.kind === "file")?.getAsFile();
    if (file) handleFiles([file]);
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return {
    dropError,
    isDragging,
    selectedImage,
    inputRef,
    isDirty,
    inputRegister,
    handleInputChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handlePaste,
    openFileDialog,
  };
};
