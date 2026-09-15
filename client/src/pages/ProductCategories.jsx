import { useNavigate } from "react-router-dom";

const ProductCategories = () => {

  const navigate = useNavigate();

  const categories = [

    {
      name: "Beverages",
      sub: 12,
      products: 145,
      value: "₹12,50,000",
      color: "bg-blue-100 text-blue-600",
    },

    {
      name: "Food Items",
      sub: 18,
      products: 220,
      value: "₹18,20,000",
      color: "bg-green-100 text-green-600",
    },

    {
      name: "Personal Care",
      sub: 9,
      products: 84,
      value: "₹6,80,000",
      color: "bg-purple-100 text-purple-600",
    },

    {
      name: "Home Care",
      sub: 7,
      products: 63,
      value: "₹5,20,000",
      color: "bg-orange-100 text-orange-600",
    },

  ];

  const subCategories = [

    "Soft Drinks",
    "Snacks",
    "Noodles",
    "Cooking Oil",
    "Detergents",
    "Toiletries",

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <button
            onClick={() => navigate("/settings")}
            className="mb-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
          >

            ← Back to Settings

          </button>

          <h1 className="text-4xl font-bold text-slate-800">
            Product Categories
          </h1>

          <p className="text-slate-500 mt-2">
            Manage inventory product categories and subcategories
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          + Add Category

        </button>

      </div>

      {/* TOP STATS */}

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Total Categories
          </p>

          <h1 className="text-4xl font-bold mt-3">
            24
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-blue-600">
            Sub Categories
          </p>

          <h1 className="text-4xl font-bold mt-3">
            86
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-green-600">
            Total Products
          </p>

          <h1 className="text-4xl font-bold mt-3">
            512
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-orange-500">
            Inventory Value
          </p>

          <h1 className="text-4xl font-bold mt-3">
            ₹42L
          </h1>

        </div>

      </div>

      {/* CATEGORY CARDS */}

      <div className="grid grid-cols-2 gap-6">

        {categories.map((category, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition"
          >

            <div className="flex justify-between items-start">

              <div>

                <div
                  className={`inline-flex px-4 py-2 rounded-2xl text-sm font-medium ${category.color}`}
                >

                  {category.name}

                </div>

                <h2 className="text-3xl font-bold mt-5">
                  {category.products}
                </h2>

                <p className="text-slate-500 mt-2">
                  Products
                </p>

              </div>

              <button className="text-blue-600 font-medium">

                Manage

              </button>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-slate-50 rounded-2xl p-4">

                <p className="text-slate-500 text-sm">
                  Sub Categories
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {category.sub}
                </h3>

              </div>

              <div className="bg-slate-50 rounded-2xl p-4">

                <p className="text-slate-500 text-sm">
                  Stock Value
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {category.value}
                </h3>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* SUBCATEGORY MANAGEMENT */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Sub Categories
          </h2>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl">

            + Add Sub Category

          </button>

        </div>

        <div className="grid grid-cols-3 gap-5">

          {subCategories.map((item, index) => (

            <div
              key={index}
              className="border border-slate-100 rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="flex justify-between items-center">

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>

                <button className="text-blue-600 text-sm">

                  Edit

                </button>

              </div>

              <p className="text-slate-500 mt-3 text-sm">
                Connected to inventory products
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* ANALYTICS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-6">
          Category Analytics
        </h2>

        <div className="grid grid-cols-4 gap-5">

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-slate-500">
              Highest Selling
            </p>

            <h3 className="text-2xl font-bold mt-3">
              Beverages
            </h3>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-slate-500">
              Low Performing
            </p>

            <h3 className="text-2xl font-bold mt-3">
              Home Care
            </h3>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-slate-500">
              Fast Growing
            </p>

            <h3 className="text-2xl font-bold mt-3">
              Food Items
            </h3>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-slate-500">
              Total Variants
            </p>

            <h3 className="text-2xl font-bold mt-3">
              184
            </h3>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ProductCategories;