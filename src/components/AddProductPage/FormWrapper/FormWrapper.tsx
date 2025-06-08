import { FormProvider, useForm } from "react-hook-form";
import ProductNameDescSec from "../ProductNameDescSec/ProductNameDescSec";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddProductFormSchema,
  type AddProductFormType,
} from "../../../lib/zod-schemas";
import SubmitFormBtn from "../../UI/Buttons/SubmitFormBtn";
import ProductImagesSec from "../ProductImagesSec/ProductImagesSec";
import ProductSizeSec from "../ProductSizeSec/ProductSizeSec";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";

export default function FormWrapper() {
  const methods = useForm<AddProductFormType>({
    defaultValues: {
      name: "",
      description: "",
      images: [],
      totall_quantity: "0",
      etries: [],
      main_image: "0",
    },
    resolver: zodResolver(AddProductFormSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, isSubmitSuccessful },
  } = methods;

  const submitHandler = async (formData: AddProductFormType) => {
    console.log(formData);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)} className="py-16 container">
        <ProductNameDescSec />
        <ProductImagesSec />
        <ProductSizeSec />

        <SubmitFormBtn isValid={isValid} isSubmitting={isSubmitting} />

        {isSubmitSuccessful && (
          <p className="text-green-600 text-base font-medium mt-6">
            <CheckCircleIcon
              weight="fill"
              className="mr-1.5 inline-block size-6"
            />
            Your product has been successfully added
          </p>
        )}
      </form>
    </FormProvider>
  );
}
