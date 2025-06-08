import { z } from "zod";

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

export const AddProductFormSchema = z.object({
  name: genericStringSchema("name"),
  description: genericStringSchema("description"),
  main_image: genericStringSchema("main image"),
  images: z.array(imageSchema).min(1, {
    message: "At least one image is required",
  }),
});
export type AddProductFormType = z.infer<typeof AddProductFormSchema>;
