import { zodResolver } from "@hookform/resolvers/zod";
import type { ProductEntry } from "../../../lib/types";
import {
  ProductSizeFormSchema,
  type ProductSizeFormType,
} from "../../../lib/zod-schemas";
import { useForm } from "react-hook-form";
import SubmitFormBtn from "../../UI/Buttons/SubmitFormBtn";
import Select from "../../UI/Inputs/Select";
import {
  PRODUCT_COLOR_OPTIONS,
  PRODUCT_SIZE_OPTIONS,
} from "../../../lib/constants";
import Input from "../../UI/Inputs/Input";

export default function ProductSizeForm({
  handleTotalQuantity,
}: {
  handleTotalQuantity: (newEntries: ProductEntry) => void;
}) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isValid, dirtyFields, errors },
  } = useForm<ProductSizeFormType>({
    defaultValues: { quantity: "" },
    resolver: zodResolver(ProductSizeFormSchema),
  });

  const submitHandler = (formData: ProductSizeFormType) => {
    handleTotalQuantity(formData);
    reset();
  };

  return (
    <div className="mb-10">
      <div className="  flex flex-wrap gap-6 items-start">
        <div className="grow min-w-80">
          <Select
            error={errors.size}
            dirty={dirtyFields.size}
            {...register("size")}
            tag="Select Size"
            options={PRODUCT_SIZE_OPTIONS}
          />
        </div>

        <div className="grow min-w-80">
          <Select
            error={errors.color}
            dirty={dirtyFields.color}
            {...register("color")}
            tag="Select Color"
            options={PRODUCT_COLOR_OPTIONS}
          />
        </div>

        <div className="grow min-w-80">
          <Input
            error={errors.quantity}
            dirty={dirtyFields.quantity}
            {...register("quantity")}
            tag="Quantity"
            inputMode="numeric"
          />
        </div>

        <SubmitFormBtn
          className="w-full max-w-50 self-end "
          title="Add New Entry"
          isValid={isValid}
          isSubmitting={isSubmitting}
          onClick={handleSubmit(submitHandler)}
        />
      </div>
    </div>
  );
}
