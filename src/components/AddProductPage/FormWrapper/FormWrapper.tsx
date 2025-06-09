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
import {
  getAllProductsFromIndexedDB,
  saveProductToIndexedDB,
} from "../../../lib/indexDB";
import { Link } from "react-router";
import { buttonVariants } from "../../UI/Buttons/button-variants";
import { cn } from "../../../lib/utils";
import FormErrors from "./FormErrors";

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
    setError,
    formState: { isSubmitting, isValid, isSubmitSuccessful, errors },
  } = methods;

  const submitHandler = async (formData: AddProductFormType) => {
    console.log(formData);

    try {
      await saveProductToIndexedDB(formData);
      console.log("Saved to IndexedDB:", formData);
      console.log("indexDB products", await getAllProductsFromIndexedDB());
      reset();
    } catch (error) {
      console.error("Failed to save to IndexedDB", error);
      setError("root", {
        message: "Something went wrong while saving your product.",
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)} className="py-16 container">
        <ProductNameDescSec />
        <ProductImagesSec />
        <ProductSizeSec />

        <div className="flex flex-wrap gap-6">
          <SubmitFormBtn isValid={isValid} isSubmitting={isSubmitting} />
          <Link
            to="/"
            className={cn(
              "w-40",
              buttonVariants({
                size: "md",
                variant: "purple-outline",
              })
            )}
          >
            Go Back
          </Link>
        </div>

        <FormErrors isSubmitSuccessful={isSubmitSuccessful} errors={errors} />
      </form>
    </FormProvider>
  );
}
