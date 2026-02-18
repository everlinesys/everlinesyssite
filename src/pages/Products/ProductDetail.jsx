import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productName } = useParams();

  return (
    <section className="bg-white py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {productName?.toUpperCase()}
        </h1>

        <p className="text-lg text-gray-600">
          Detailed information about the {productName} product.
        </p>

      </div>

    </section>
  );
}
