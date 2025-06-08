import {
  type ClipboardEvent,
  type DragEvent,
  useRef,
  useState,
  useCallback,
} from "react";
import {
  useFormContext,
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
  type UseFormRegisterReturn,
} from "react-hook-form";

export interface UseDndReturn {
  isDragging: boolean;
  dropError?: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  selectedFiles: File[] | [];
  inputRef: (el: HTMLInputElement | null) => void;
  inputProps: UseFormRegisterReturn & {
    ref: (el: HTMLInputElement | null) => void;
  };
  handleDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handlePaste: (e: ClipboardEvent<HTMLDivElement>) => void;
  openFileDialog: () => void;
}

export const useDnd = (
  fieldName: string,
  onSuccess?: (files: File[]) => void
): UseDndReturn => {
  const [isDragging, setIsDragging] = useState(false);

  const dragCounter = useRef(0);

  const {
    setValue,
    setError,
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const dropError = errors[fieldName];
  const selectedFiles = watch("images");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (files: File[]) => {
    if (!files[0]?.type.startsWith("image/")) {
      const errorMsg = "The file format is not supported";
      setError(fieldName, { message: errorMsg });
      return;
    }

    const updatedFiles = [...selectedFiles, ...files];

    setValue(fieldName, updatedFiles, {
      shouldValidate: true,
      shouldDirty: true,
    });

    onSuccess?.(updatedFiles);
  };

  const inputRegistration = register(fieldName, {
    onChange: (e) => handleFiles(Array.from(e.target.files || [])),
  });

  const setInputRef = useCallback(
    (el: HTMLInputElement | null) => {
      inputRef.current = el;
      inputRegistration.ref(el);
    },
    [inputRegistration]
  );

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
    selectedFiles,
    inputRef: setInputRef,
    inputProps: {
      ...inputRegistration,
      ref: setInputRef,
    },
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handlePaste,
    openFileDialog,
  };
};
