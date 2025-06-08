import { useFormContext } from "react-hook-form";
import Input from "../../UI/Inputs/Input";
import type { AddProductFormType } from "../../../lib/zod-schemas";
import TextArea from "../../UI/Inputs/TextArea";

export default function ProductNameDescSec() {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext<AddProductFormType>();

  return (
    <section className="pb-6 border-b border-neutral-200 mb-16">
      <h1 className="text-2xl font-bold text-neutral-50 mb-10">
        Basic Information
      </h1>

      <div className="flex gap-6 items-start  flex-col  justify-between">
        <Input
          dirty={dirtyFields.name}
          error={errors.name}
          {...register("name")}
          tag="Product Name"
        />
        <TextArea
          dirty={dirtyFields.description}
          error={errors.description}
          {...register("description")}
          tag="Product Description"
        />
      </div>
    </section>
  );
}
