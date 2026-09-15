import { useState } from "react";

const RecordPaymentModal = ({
  selectedBill,
  closeModal,
}) => {

  const [paymentData, setPaymentData] = useState({
    amount: "",
    method: "Bank Transfer",
    date: "",
    reference: "",
    notes: "",
  });

  const handleChange = (e) => {

    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Payment Recorded Successfully!");

    closeModal();

  };

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl p-8 relative">

        {/* CLOSE */}

        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-2xl text-slate-500 hover:text-black"
        >
          ×
        </button>

        {/* TITLE */}

        <h2 className="text-3xl font-bold mb-8">
          Record Payment
        </h2>

        {/* TOP DETAILS */}

        <div className="grid grid-cols-3 gap-8 mb-8">

          <div>

            <p className="text-slate-500 mb-1">
              Supplier
            </p>

            <h3 className="font-semibold text-lg">
              {selectedBill?.supplier}
            </h3>

          </div>

          <div>

            <p className="text-slate-500 mb-1">
              Bill No
            </p>

            <h3 className="font-semibold text-lg">
              {selectedBill?.billNo}
            </h3>

          </div>

          <div>

            <p className="text-slate-500 mb-1">
              Balance Amount
            </p>

            <h3 className="font-semibold text-lg">
              {selectedBill?.balance}
            </h3>

          </div>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* ROW 1 */}

          <div className="grid grid-cols-3 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Payment Amount
              </label>

              <input
                type="number"
                name="amount"
                value={paymentData.amount}
                onChange={handleChange}
                placeholder="25000"
                className="w-full border border-slate-300 rounded-xl p-3 outline-none"
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Payment Method
              </label>

              <select
                name="method"
                value={paymentData.method}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl p-3 outline-none"
              >

                <option>
                  Bank Transfer
                </option>

                <option>
                  UPI
                </option>

                <option>
                  Cash
                </option>

              </select>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Payment Date
              </label>

              <input
                type="date"
                name="date"
                value={paymentData.date}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl p-3 outline-none"
              />

            </div>

          </div>

          {/* ROW 2 */}

          <div className="grid grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Reference No
              </label>

              <input
                type="text"
                name="reference"
                value={paymentData.reference}
                onChange={handleChange}
                placeholder="UTR123456789"
                className="w-full border border-slate-300 rounded-xl p-3 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Notes
              </label>

              <input
                type="text"
                name="notes"
                value={paymentData.notes}
                onChange={handleChange}
                placeholder="Payment for invoice"
                className="w-full border border-slate-300 rounded-xl p-3 outline-none"
              />

            </div>

          </div>

          {/* BUTTONS */}

          <div className="flex justify-end gap-4 pt-6">

            <button
              type="button"
              onClick={closeModal}
              className="border border-slate-300 px-6 py-3 rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
            >
              Save Payment
            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default RecordPaymentModal;