import { useState } from "react";
import axios from "axios";

const EditProductModal = ({
  product,
  closeModal,
  refreshProducts,
}) => {

  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    quantity: product.quantity,
    price: product.price,
    supplier: product.supplier,
    status: product.status,
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/api/products/${product._id}`,
        formData
      );

      refreshProducts();

      closeModal();

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl w-[500px]">

        <h2 className="text-3xl font-bold mb-6">
          Edit Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>

          <div className="flex justify-end gap-4 mt-4">

            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProductModal;