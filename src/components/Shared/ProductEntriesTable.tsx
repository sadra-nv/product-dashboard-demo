import type { Product } from "../../lib/types";

export default function ProductEntriesTable({
  entries,
  className,
  totalQuantity,
}: {
  entries: Product["etries"][number][];
  className?: string;
  totalQuantity: string | number;
}) {
  return (
    <div className={className}>
      {entries && entries.length !== 0 && (
        <div className="overflow-auto">
          <h3 className="font- text-xl">Entries</h3>
          <table className="w-full border mt-2  min-w-96">
            <thead>
              <tr className="bg-neutral-200 text-neutral-950">
                <th className="border px-2 py-1">Size</th>
                <th className="border px-2 py-1">Color</th>
                <th className="border px-2 py-1">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-2 py-1">{entry.size}</td>
                  <td className="border px-2 py-1 border-x border-neutral-200">
                    {entry.color}
                  </td>
                  <td className="border px-2 py-1">{entry.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-6 font-semibold">Total Quantity: {totalQuantity}</div>
    </div>
  );
}
