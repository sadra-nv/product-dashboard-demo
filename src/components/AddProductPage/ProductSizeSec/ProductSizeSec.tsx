import ProductSizeForm from "./ProductSizeForm";
import type { ProductEntry } from "../../../lib/types";
import { useFormContext } from "react-hook-form";
import type { AddProductFormType } from "../../../lib/zod-schemas";
import ProductEntriesTable from "../../Shared/ProductEntriesTable";

export default function ProductSizeSec() {
  const { setValue, watch } = useFormContext<AddProductFormType>();

  const entries = watch("etries");
  const totalQuantity = watch("totall_quantity");

  const handleTotalQuantity = (newEntry: ProductEntry) => {
    // checks if the entries size and color are the same and then mixes them into one entry
    const updatedEntries = [...(entries ?? [])];

    const existingIndex = updatedEntries.findIndex(
      (entry) => entry.size === newEntry.size && entry.color === newEntry.color
    );

    if (existingIndex !== -1) {
      const updatedQuantity =
        Number(updatedEntries[existingIndex].quantity) +
        Number(newEntry.quantity);
      updatedEntries[existingIndex].quantity = String(updatedQuantity);
    } else {
      updatedEntries.push(newEntry);
    }

    const updatedTotalQuantity =
      Number(totalQuantity) + Number(newEntry.quantity);

    setValue("etries", updatedEntries, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setValue("totall_quantity", `${updatedTotalQuantity}`, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <section className="pb-6 border-b border-neutral-200 mb-16">
      <h1 className="text-2xl font-bold text-neutral-50 mb-10">
        Product Size, Color & Quantity
      </h1>

      <ProductSizeForm handleTotalQuantity={handleTotalQuantity} />

      <ProductEntriesTable entries={entries} totalQuantity={totalQuantity} />
    </section>
  );
}
