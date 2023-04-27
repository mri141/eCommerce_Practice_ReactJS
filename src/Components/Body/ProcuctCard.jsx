function ProductCard({ product }) {
  const { title, image, price } = product;
  return (
    <div className="flex flex-col p-4 rounded bg-white">
      <div className="">
        <img className="xl:h-48 mx-auto" src={image} alt={title} />
      </div>
      <h2 className="font-semibold text-lg my-4">{title}</h2>
      <p className="text-gray-600 text-lg mt-auto">${price}</p>
    </div>
  );
}

export default ProductCard;
