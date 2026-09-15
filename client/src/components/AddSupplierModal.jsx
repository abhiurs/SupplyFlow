import { useState } from "react";

const AddSupplierModal = ({
  closeModal,
  addSupplier,
}) => {

  const [formData, setFormData] = useState({
    supplierName: "",
    contactPerson: "",
    phone: "",
    email: "",
    gst: "",
    pan: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    paymentTerms: "",
    leadTime: "",
    category: "",
    preferredSupplier: "Yes",
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

    addSupplier(formData);

    closeModal();

  };

  return (

    <div className="fixed inset-0 bg-black/40 z-50 overflow-y-auto py-10 px-4">

      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl mx-auto">

        {/* HEADER */}

        <div className="flex justify-between items-center border-b px-8 py-5">

          <h2 className="text-xl font-bold">
            Add Supplier
          </h2>

          <button
            onClick={closeModal}
            className="text-xl text-slate-500 hover:text-black"
          >
            ×
          </button>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="p-4 space-y-3"
        >

          {/* BASIC INFO */}

          <div>

            <h3 className="text-base font-semibold mb-3">
              Basic Information
            </h3>

            <div className="grid grid-cols-3 gap-3">

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Supplier Name *
                </label>

                <input
                  type="text"
                  name="supplierName"
                  placeholder="Enter supplier name"
                  value={formData.supplierName}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Contact Person *
                </label>

                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Enter contact person"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Phone *
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  GST Number
                </label>

                <input
                  type="text"
                  name="gst"
                  placeholder="Enter GST number"
                  value={formData.gst}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  PAN Number
                </label>

                <input
                  type="text"
                  name="pan"
                  placeholder="Enter PAN number"
                  value={formData.pan}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:border-blue-500"
                />
              </div>

            </div>

          </div>

          {/* ADDRESS */}

          <div>

            <h3 className="text-base font-semibold mb-3">
              Address
            </h3>

            <div className="space-y-5">

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Address *
                </label>

                <input
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    City *
                  </label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    State *
                  </label>

                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 outline-none focus:border-blue-500"
                  >
                    <option>Select state</option>
                    <option>Karnataka</option>
                    <option>Maharashtra</option>
                    <option>Tamil Nadu</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Country *
                  </label>

                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 outline-none focus:border-blue-500"
                  >
                    <option>India</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Pincode *
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    placeholder="Enter pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 outline-none focus:border-blue-500"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* OTHER INFO */}

          <div>

            <h3 className="text-base font-semibold mb-3">
              Other Information
            </h3>

            <div className="grid grid-cols-3 gap-3">

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Payment Terms *
                </label>

                <select
                  name="paymentTerms"
                  value={formData.paymentTerms}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none"
                >
                  <option>Select payment terms</option>
                  <option>Net 15 Days</option>
                  <option>Net 30 Days</option>
                  <option>Advance Payment</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Lead Time (Days) *
                </label>

                <input
                  type="number"
                  name="leadTime"
                  placeholder="Enter lead time"
                  value={formData.leadTime}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none"
                >
                  <option>Select category</option>
                  <option>Food</option>
                  <option>Beverages</option>
                  <option>Electronics</option>
                </select>
              </div>

              <div>

                <label className="block mb-3 text-sm font-medium">
                  Preferred Supplier
                </label>

                <div className="flex gap-6">

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredSupplier"
                      value="Yes"
                      checked={formData.preferredSupplier === "Yes"}
                      onChange={handleChange}
                    />
                    Yes
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredSupplier"
                      value="No"
                      checked={formData.preferredSupplier === "No"}
                      onChange={handleChange}
                    />
                    No
                  </label>

                </div>

              </div>

            </div>

            <div className="mt-5">

              <label className="block mb-2 text-sm font-medium">
                Notes
              </label>

              <textarea
                name="notes"
                rows="2"
                placeholder="Enter notes (optional)"
                value={formData.notes}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-3 py-2 outline-none focus:border-blue-500"
              />

            </div>

          </div>

          {/* FOOTER */}

          <div className="flex justify-end gap-4 pt-4 border-t">

            <button
              type="button"
              onClick={closeModal}
              className="px-5 py-2.5 border border-slate-300 rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            >
              Save Supplier
            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default AddSupplierModal;