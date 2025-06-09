import type { FieldErrors } from "react-hook-form";
import type { AddProductFormType } from "../../../lib/zod-schemas";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";

export default function FormErrors({
  isSubmitSuccessful,
  errors,
}: {
  isSubmitSuccessful: boolean;
  errors: FieldErrors<AddProductFormType>;
}) {
  return (
    <>
      {isSubmitSuccessful && !errors.root && (
        <p className="text-green-600 text-base font-medium mt-6">
          <CheckCircleIcon
            weight="fill"
            className="mr-1.5 inline-block size-6"
          />
          Your product has been successfully added
        </p>
      )}
      {!isSubmitSuccessful && errors.root && (
        <p className="text-red-600 text-base font-medium mt-6">
          <CheckCircleIcon
            weight="fill"
            className="mr-1.5 inline-block size-6"
          />
          {errors.root.message}
        </p>
      )}
      {!isSubmitSuccessful &&
        (errors.etries ||
          errors.totall_quantity ||
          errors.main_image ||
          errors.images) && (
          <p className="text-red-600 text-base font-medium mt-6">
            <CheckCircleIcon
              weight="fill"
              className="mr-1.5 inline-block size-6"
            />
            {errors.root?.message}
            {errors.totall_quantity?.message}
            {errors.main_image?.message}
            {errors.etries?.message}
            {errors.images?.message}
          </p>
        )}
    </>
  );
}
