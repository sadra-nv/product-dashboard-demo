import { useEffect, useMemo } from "react";

export function useImagePreviews(
  files: (File | undefined | null)[] | undefined
): string[] {
  const objectUrls = useMemo(() => {
    if (!Array.isArray(files) || files.length === 0) return [];

    return files
      .filter((file): file is File => file instanceof File)
      .map((file) => URL.createObjectURL(file));
  }, [files]);

  useEffect(() => {
    return () => {
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [objectUrls]);

  return objectUrls;
}
