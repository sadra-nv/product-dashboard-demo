import { z } from "zod";
import { PRODUCT_COLORS, PRODUCT_SIZES } from "./constants";

const genericStringSchema = (name: string) => {
  return z
    .string()
    .trim()
    .min(1, { message: `${name} should at least contain 1 characters` })
    .max(150, { message: `${name} can not exceed 150 characters` });
};

const imageSchema = z
  .instanceof(File)
  .refine((file) => file.type.startsWith("image/"), {
    message: "The selected file must be an image",
  });

export const ProductSizeFormSchema = z.object({
  size: z.enum(PRODUCT_SIZES),
  color: z.enum(PRODUCT_COLORS),
  quantity: genericStringSchema("quantity").regex(/^\d+$/, {
    message: "Quantity must be a number",
  }),
});
export type ProductSizeFormType = z.infer<typeof ProductSizeFormSchema>;

export const AddProductFormSchema = z.object({
  name: genericStringSchema("name"),
  description: genericStringSchema("description"),
  main_image: genericStringSchema("main image"),
  images: z.array(imageSchema).min(1, {
    message: "At least one image is required",
  }),
  etries: z.array(ProductSizeFormSchema).min(1, {
    message: "At least one product entry is required",
  }),
  totall_quantity: genericStringSchema("totall quantity"),
});
export type AddProductFormType = z.infer<typeof AddProductFormSchema>;
