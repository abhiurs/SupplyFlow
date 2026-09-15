import { useState } from "react";

const AddWarehouseModal = ({
  closeModal,
  addWarehouse,
}) => {

  const [formData, setFormData] = useState({

    name: "",
    manager: "",
    code: "",
    phone: "",
    address: "",
    email: "",
    city: "",
    state: "",
    capacity: "",
    units: "Units",
    country: "India",
    status: "Active",
    notes: "",

  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    addWarehouse(formData);

    closeModal();

  };

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-6xl rounded-2xl p-8 shadow-2xl relative overflow-y-auto max-h-[95vh]">

        {/* CLOSE BUTTON */}

        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-2xl text-slate-500 hover:text-black"
        >
          ×
        </button>

        {/* TITLE */}

        <h2 className="text-3xl font-bold mb-2">
          Add New Warehouse
        </h2>

        <p className="text-slate-500 mb-8">
          Enter warehouse details
        </p>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-6"
        >

          {/* LEFT SIDE */}

          <div className="space-y-5">

            <div>

              <label className="block mb-2 font-medium">
                Warehouse Name *
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter warehouse name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Code *
              </label>

              <input
                type="text"
                name="code"
                placeholder="Enter unique code"
                value={formData.code}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Address *
              </label>

              <input
                type="text"
                name="address"
                placeholder="Enter full address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
              />

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>

                <label className="block mb-2 font-medium">
                  City *
                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="Select city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 outline-none"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  State *
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="Select state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Country *
              </label>

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
              >

                <option>
                  India
                </option>

                <option>
                  USA
                </option>

              </select>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-5">

            <div>

              <label className="block mb-2 font-medium">
                Manager Name *
              </label>

              <input
                type="text"
                name="manager"
                placeholder="Enter manager name"
                value={formData.manager}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Phone *
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
              />

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>

                <label className="block mb-2 font-medium">
                  Capacity *
                </label>

                <input
                  type="number"
                  name="capacity"
                  placeholder="Enter total capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 outline-none"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Units
                </label>

                <select
                  name="units"
                  value={formData.units}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 outline-none"
                >

                  <option>
                    Units
                  </option>

                  <option>
                    Boxes
                  </option>

                </select>

              </div>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Status *
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
              >

                <option>
                  Active
                </option>

                <option>
                  Inactive
                </option>

              </select>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Notes
              </label>

              <textarea
                name="notes"
                rows="4"
                placeholder="Enter notes (optional)"
                value={formData.notes}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none"
              />

            </div>

          </div>

          {/* BUTTONS */}

          <div className="col-span-2 flex justify-end gap-4 pt-4">

            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-3 border rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            >
              Save Warehouse
            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default AddWarehouseModal;