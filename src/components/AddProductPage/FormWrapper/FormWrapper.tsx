import { FormProvider, useForm } from "react-hook-form";
import ProductNameDescSec from "../ProductNameDescSec/ProductNameDescSec";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddProductFormSchema,
  type AddProductFormType,
} from "../../../lib/zod-schemas";
import SubmitFormBtn from "../../UI/Buttons/SubmitFormBtn";

export default function FormWrapper() {
  const methods = useForm<AddProductFormType>({
    defaultValues: {
      name: "",
      description: "",
      main_image: "",
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
      <form onSubmit={handleSubmit(submitHandler)} className="pt-16 container">
        <ProductNameDescSec />

        <SubmitFormBtn isValid={isValid} isSubmitting={isSubmitting} />
      </form>
    </FormProvider>
  );
}
