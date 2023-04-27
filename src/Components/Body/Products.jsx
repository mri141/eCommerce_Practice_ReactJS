import { useEffect, useState } from "react";
import Spinner from "../Spinner.jsx";
import ProductCard from "./ProcuctCard";

function Products() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setdata(json));
  }, []);

  return (
    <div>
      <section className="py-20 bg-green-100">
        <h2 className="text-center font-bold text-4xl text-gray-800 mb-10">
          Our Products
        </h2>
        <div className="container mx-auto">
          {data.length !== 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
              {data.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;
