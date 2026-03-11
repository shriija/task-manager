function Product({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>

      <p className="text-sm text-gray-500">{product.brand}</p>

      <p className="text-sm mt-2 text-gray-700">
        {product.description}
      </p>

      <p className="text-xl font-bold mt-3 text-blue-600">
        ${product.price}
      </p>
    </div>
  );
}

export default Product;