import { ShoppingCart, X } from "lucide-react";

const CreatePOModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-slate-900/50
        backdrop-blur-md
        p-4
      "
    >
      {/* MODAL */}
      <div
        className="
          bg-white
          w-full
          max-w-4xl
          rounded[32px]
          shadow-[0_20px_80px_rgba(0,0,0,0.25)]
          border border-slate-200
          p-10
          relative
          animate-in fade-in zoom-in duration-300
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-6 right-6
            text-slate-400
            hover:text-slate-700
            transition
          "
        >
          <X size={28} />
        </button>

        {/* HEADER */}
        <div className="flex items-start gap-5 mb-10">
          <div
            className="
              w-16 h-16
              rounded-2xl
              bg-indigo-100
              flex items-center justify-center
            "
          >
            <ShoppingCart
              size={34}
              className="text-indigo-600"
            />
          </div>

          <div>
            <h2
              className="
                text-[42px]
                font-bold
                tracking-tight
                text-slate-900
                leading-none
              "
            >
              Create Purchase Order
            </h2>

            <p className="text-slate-500 mt-3 text-lg">
              Generate supplier purchase orders
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="space-y-7">
          {/* PRODUCT + SUPPLIER */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Product Name"
              className="
                w-full
                border border-slate-300
                rounded-2xl
                px-5 py-4
                outline-none
                focus:ring-2
                focus:ring-indigo-500
                transition
              "
            />

            <input
              type="text"
              placeholder="Supplier"
              className="
                w-full
                border border-slate-300
                rounded-2xl
                px-5 py-4
                outline-none
                focus:ring-2
                focus:ring-indigo-500
                transition
              "
            />
          </div>

          {/* QUANTITY + PRICE */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="number"
              placeholder="Quantity"
              className="
                w-full
                border border-slate-300
                rounded-2xl
                px-5 py-4
                outline-none
                focus:ring-2
                focus:ring-indigo-500
                transition
              "
            />

            <input
              type="number"
              placeholder="Price Per Unit"
              className="
                w-full
                border border-slate-300
                rounded-2xl
                px-5 py-4
                outline-none
                focus:ring-2
                focus:ring-indigo-500
                transition
              "
            />
          </div>

          {/* DELIVERY DATE */}
          <input
            type="date"
            className="
              w-full
              border border-slate-300
              rounded-2xl
              px-5 py-4
              outline-none
              focus:ring-2
              focus:ring-indigo-500
              transition
            "
          />

          {/* NOTES */}
          <textarea
            rows="5"
            placeholder="Additional notes..."
            className="
              w-full
              border border-slate-300
              rounded-2xl
              px-5 py-4
              outline-none
              resize-none
              focus:ring-2
              focus:ring-indigo-500
              transition
            "
          />

          {/* BUTTONS */}
          <div
            className="
              flex justify-end gap-4
              pt-6 mt-2
              border-t border-slate-200
            "
          >
            <button
              onClick={onClose}
              className="
                px-8 py-4
                rounded-2xl
                bg-slate-100
                text-slate-700
                font-medium
                hover:bg-slate-200
                transition
              "
            >
              Cancel
            </button>

            <button
              className="
                px-8 py-4
                rounded-2xl
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                font-medium
                transition
              "
            >
              Create PO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePOModal;