import type { FieldError } from "react-hook-form";
import type { PRODUCT_COLORS, PRODUCT_SIZES } from "./constants";
import type { AddProductFormType } from "./zod-schemas";

export interface RHFFieldProps {
  tag: string;
  dirty: boolean | undefined;
  error: FieldError | undefined;
  className?: string;
}

export type ProductEntry = {
  size: (typeof PRODUCT_SIZES)[number];
  color: (typeof PRODUCT_COLORS)[number];
  quantity: string;
};

export type Product = AddProductFormType & { id: IDBValidKey };
