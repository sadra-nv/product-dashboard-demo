import { FormProvider, useForm } from "react-hook-form";
import ProductNameDescSec from "../ProductNameDescSec/ProductNameDescSec";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddProductFormSchema,
  type AddProductFormType,
} from "../../../lib/zod-schemas";
import SubmitFormBtn from "../../UI/Buttons/SubmitFormBtn";
import ProductImagesSec from "../ProductImagesSec/ProductImagesSec";

export default function FormWrapper() {
  const methods = useForm<AddProductFormType>({
    defaultValues: {
      name: "",
      description: "",
      images: [],
    },
    resolver: zodResolver(AddProductFormSchema),
  });

  const {
    handleSubmit,

    formState: { isSubmitting, isValid },
  } = methods;

  const submitHandler = () => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)} className="py-16 container">
        <ProductNameDescSec />
        <ProductImagesSec />

        <SubmitFormBtn isValid={isValid} isSubmitting={isSubmitting} />
      </form>
    </FormProvider>
  );
}
