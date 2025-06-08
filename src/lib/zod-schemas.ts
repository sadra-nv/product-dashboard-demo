import { z } from "zod";

export const genericStringSchema = (name: string) => {
  return z
    .string()
    .trim()
    .min(2, { message: `${name} should at least contain 2 characters` })
    .max(150, { message: `${name} can not exceed 150 characters` });
};

export const AddProductFormSchema = z.object({
  name: genericStringSchema("name"),
  description: genericStringSchema("description"),
  main_image: genericStringSchema("main_image"),
  images: z.array(genericStringSchema("image")).min(1, {
    message: "At least one image is required",
  }),
});
export type AddProductFormType = z.infer<typeof AddProductFormSchema>;
