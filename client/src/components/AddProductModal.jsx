import { useState } from "react";
import axios from "axios";
import { X, Plus } from "lucide-react";

const AddProductModal = ({
  closeModal,
  refreshProducts,
}) => {
  const [formData, setFormData] = useState({
  name: "",
  sku: "",
  category: "",
  unit: "",
  quantity: "",
  reorderLevel: "",
  supplier: "",
  warehouse: "",
  purchasePrice: "",
  sellingPrice: "",
  status: "In Stock",
});

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleImage = (e) => {

    const file = e.target.files[0];

    setImage(file);

    setPreview(URL.createObjectURL(file));

};

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("sku", formData.sku);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("unit", formData.unit);
    formDataToSend.append("quantity", formData.quantity);
    formDataToSend.append("reorderLevel", formData.reorderLevel);
    formDataToSend.append("supplier", formData.supplier);
    formDataToSend.append("purchasePrice", formData.purchasePrice);
    formDataToSend.append("sellingPrice", formData.sellingPrice);
    formDataToSend.append("status", formData.status);
    if (image) {
      formDataToSend.append("image", image);
    }

    try {
      await axios.post("/api/products", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      refreshProducts();
      closeModal();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div
      className="
        fixed inset-0
        bg-black/40
        backdrop-blur-sm
        flex items-center justify-center
        z-50
        p-4
      "
    >
      <div
        className="
          bg-white
          rounded-3xl
          w-full
          max-w-3xl
          p-8
          shadow-2xl
          relative
          animate-in fade-in zoom-in
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={closeModal}
          className="
            absolute top-6 right-6
            text-slate-400
            hover:text-red-500
            transition
          "
        >
          <X size={24} />
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="
              w-14 h-14
              rounded-2xl
              bg-indigo-100
              flex items-center justify-center
            "
          >
            <Plus
              size={30}
              className="text-indigo-600"
            />
          </div>

          <div>
            <h2
              className="
                text-4xl
                font-bold
                text-slate-900
              "
            >
              Add New Product
            </h2>

            <p className="text-slate-500 mt-1">
              Add inventory item to your warehouse
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Product Name *"
  className="modalInput"
/>

          <input
  type="text"
  name="sku"
  value={formData.sku}
  onChange={handleChange}
  placeholder="SKU *"
  className="modalInput"
/>

          <input
  type="text"
  name="category"
  value={formData.category}
  onChange={handleChange}
  placeholder="Category *"
  className="modalInput"
/>

          <input
  type="text"
  name="unit"
  value={formData.unit}
  onChange={handleChange}
  placeholder="Unit *"
  className="modalInput"
/>

          <input
  type="number"
  name="quantity"
  value={formData.quantity}
  onChange={handleChange}
  placeholder="Opening Stock *"
  className="modalInput"
/>

          <input
  type="number"
  name="reorderLevel"
  value={formData.reorderLevel}
  onChange={handleChange}
  placeholder="Reorder Level"
  className="modalInput"
/>

          <input
            type="date"
            className="modalInput"
          />

          <input
  type="text"
  name="supplier"
  value={formData.supplier}
  onChange={handleChange}
  placeholder="Default Supplier"
  className="modalInput"
/>

<select
  name="warehouse"
  value={formData.warehouse}
  onChange={handleChange}
  className="modalInput"
>
  <option value="">Select Warehouse</option>
  <option value="Delhi WH">Delhi WH</option>
  <option value="Mumbai WH">Mumbai WH</option>
  <option value="Bangalore WH">Bangalore WH</option>
</select>

          <input
  type="number"
  name="purchasePrice"
  value={formData.purchasePrice}
  onChange={handleChange}
  placeholder="Purchase Price"
  className="modalInput"
/>

          <input
  type="number"
  name="sellingPrice"
  value={formData.sellingPrice}
  onChange={handleChange}
  placeholder="Selling Price"
  className="modalInput"
/>

          <select
  name="status"
  value={formData.status}
  onChange={handleChange}
  className="modalInput"
>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out Of Stock</option>
          </select>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={closeModal}
            className="
              px-6 py-3
              rounded-2xl
              bg-slate-100
              hover:bg-slate-200
              transition
              font-medium
            "
          >
            Cancel
          </button>

          <button
            className="
              px-7 py-3
              rounded-2xl
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              font-medium
              transition
              shadow-lg
            "
          >
            Save Product
          </button>

        </div>
      </div>
    </div>
  );
};

export default AddProductModal;