import { useParams } from "react-router";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  console.log(productId);

  return <main></main>;
}
