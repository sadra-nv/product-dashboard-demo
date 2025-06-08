import { useFormContext } from "react-hook-form";
import type { AddProductFormType } from "../../../lib/zod-schemas";
import Select, { type SelectOption } from "../../UI/Inputs/Select";

export default function SelectMainImage({
  selectedFiles,
}: {
  selectedFiles: File[] | [];
}) {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext<AddProductFormType>();

  const selectOption: SelectOption[] = selectedFiles.map((file, i) => ({
    label: `No.${i + 1} (${file.name})`,
    value: i,
  }));

  if (selectedFiles.length === 0) return;

  return (
    <div className="max-w-80">
      <Select
        {...register("main_image")}
        dirty={dirtyFields.main_image}
        error={errors.main_image}
        tag="Choose Main Image"
        options={selectOption}
      />
    </div>
  );
}
