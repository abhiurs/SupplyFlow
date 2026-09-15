import { PackageCheck, X } from "lucide-react";

const ReceiveGoodsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">

      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-8 relative">

        {/* Close */}

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* Header */}

        <div className="flex items-center gap-5 mb-8">

          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

            <PackageCheck
              className="text-green-600"
              size={34}
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold">
              Receive Goods
            </h2>

            <p className="text-slate-500 mt-2">
              Record received purchase orders
            </p>

          </div>

        </div>

        {/* Form */}

        <div className="space-y-6">

          <div className="grid grid-cols-2 gap-5">

            <input
              placeholder="Purchase Order Number"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="Supplier Name"
              className="border rounded-xl p-4"
            />

          </div>

          <div className="grid grid-cols-2 gap-5">

            <input
              type="number"
              placeholder="Received Quantity"
              className="border rounded-xl p-4"
            />

            <input
              type="date"
              className="border rounded-xl p-4"
            />

          </div>

          <select className="border rounded-xl p-4 w-full">

            <option>
              Warehouse
            </option>

            <option>
              Main Warehouse
            </option>

            <option>
              Secondary Warehouse
            </option>

          </select>

          <textarea
            rows={4}
            placeholder="Receiving Notes..."
            className="border rounded-xl p-4 w-full"
          />

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-200"
          >
            Cancel
          </button>

          <button
            className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            Receive Goods
          </button>

        </div>

      </div>

    </div>
  );
};

export default ReceiveGoodsModal;