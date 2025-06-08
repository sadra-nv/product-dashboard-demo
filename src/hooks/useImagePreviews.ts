import { useEffect, useMemo, useState } from "react";

export function useImagePreviews(files: File[] | undefined) {
  const [previews, setPreviews] = useState<string[]>([]);

  const objectUrls = useMemo(() => {
    if (!files || files.length === 0) return [];

    return files.map((file) => URL.createObjectURL(file));
  }, [files]);

  useEffect(() => {
    setPreviews(objectUrls);

    return () => {
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [objectUrls]);

  return previews;
}
