import { Link } from "react-router";
import { buttonVariants } from "../UI/Buttons/button-variants";

export default function AddProductSec() {
  return (
    <section className="container flex justify-center items-center h-80 gap-8 flex-col">
      <h1 className="text-neutral-50 text-xl font-bold sm:text-3xl text-center">
        For adding new products please click the button below!
      </h1>

      <Link
        to="/add-product"
        className={buttonVariants({ variant: "purple", size: "md" })}
      >
        Add New Product
      </Link>
    </section>
  );
}
