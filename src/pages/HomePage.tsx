import AddProductSec from "../components/HomePage/AddProductSec";
import ProductsSec from "../components/HomePage/ProductsSec/ProductsSec";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-neutral-950">
      <AddProductSec />
      <ProductsSec />
    </main>
  );
}
