const TopSellingProducts = ({ products }) => {

  const sortedProducts = [...products]
    .sort(
      (a, b) =>
        Number(b.Sales || 0) -
        Number(a.Sales || 0)
    )
    .slice(0, 5);

console.log(sortedProducts);
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
  
  <h2 className="text-4xl font-bold text-[#1F2A44] mb-2">
    Top Selling Products
  </h2>

  <p className="text-gray-500 mb-8">
    Highest stock products from inventory
  </p>

  <div className="space-y-5">
    
    {products.map((product, index) => (
      
      <div
        key={index}
        className="flex items-center justify-between border-b border-gray-100 pb-4"
      >

        <div>
          <h3 className="text-lg font-semibold text-[#1F2A44]">
            {product["Product Name"]}
          </h3>

          <p className="text-sm text-gray-500">
            {product.Category}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xl font-bold text-[#4F46E5]">
            {product.Stock}
          </p>

          <p className="text-sm text-gray-400">
            units sold
          </p>
        </div>

      </div>

    ))}

  </div>

</div>
  );
};

export default TopSellingProducts;