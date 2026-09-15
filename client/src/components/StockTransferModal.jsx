import { useState } from "react";

import {
  ArrowLeftRight,
  X,
} from "lucide-react";

const StockTransferModal = ({
  onClose,
}) => {

  const [formData, setFormData] =
    useState({
      product: "",
      fromWarehouse: "",
      toWarehouse: "",
      quantity: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(
      "Stock Transfer:",
      formData
    );

    onClose();

  };

  return (

    <div
      className="
        fixed inset-0
        bg-black/50
        backdrop-blur-sm
        flex items-center
        justify-center
        z-50
        p-4
      "
    >

      <div
        className="
          w-full
          max-w-2xl
          bg-white
          rounded-[32px]
          shadow-2xl
          overflow-hidden
        "
      >

        {/* HEADER */}

        <div
          className="
            bg-gradient-to-r
            from-orange-500
            to-amber-500
            p-8
            text-white
            relative
          "
        >

          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5
              w-10
              h-10
              rounded-full
              bg-white/20
              hover:bg-white/30
              flex items-center
              justify-center
              transition
            "
          >

            <X size={20} />

          </button>

          <div className="flex items-center gap-4">

            <div
              className="
                w-16 h-16
                rounded-2xl
                bg-white/20
                flex items-center
                justify-center
              "
            >

              <ArrowLeftRight size={30} />

            </div>

            <div>

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >

                Stock Transfer

              </h2>

              <p className="text-white/80 mt-1">

                Move inventory between warehouses

              </p>

            </div>

          </div>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* PRODUCT */}

            <div>

              <label
                className="
                  text-sm
                  font-semibold
                  text-slate-600
                  block mb-2
                "
              >

                Product

              </label>

              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="Product Name"
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border border-slate-200
                  px-5
                  outline-none
                  focus:border-orange-400
                  focus:ring-4
                  focus:ring-orange-100
                  transition
                "
                required
              />

            </div>

            {/* QUANTITY */}

            <div>

              <label
                className="
                  text-sm
                  font-semibold
                  text-slate-600
                  block mb-2
                "
              >

                Quantity

              </label>

              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="50"
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border border-slate-200
                  px-5
                  outline-none
                  focus:border-orange-400
                  focus:ring-4
                  focus:ring-orange-100
                  transition
                "
                required
              />

            </div>

            {/* FROM */}

            <div>

              <label
                className="
                  text-sm
                  font-semibold
                  text-slate-600
                  block mb-2
                "
              >

                From Warehouse

              </label>

              <input
                type="text"
                name="fromWarehouse"
                value={formData.fromWarehouse}
                onChange={handleChange}
                placeholder="Mumbai Warehouse"
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border border-slate-200
                  px-5
                  outline-none
                  focus:border-orange-400
                  focus:ring-4
                  focus:ring-orange-100
                  transition
                "
                required
              />

            </div>

            {/* TO */}

            <div>

              <label
                className="
                  text-sm
                  font-semibold
                  text-slate-600
                  block mb-2
                "
              >

                To Warehouse

              </label>

              <input
                type="text"
                name="toWarehouse"
                value={formData.toWarehouse}
                onChange={handleChange}
                placeholder="Delhi Warehouse"
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border border-slate-200
                  px-5
                  outline-none
                  focus:border-orange-400
                  focus:ring-4
                  focus:ring-orange-100
                  transition
                "
                required
              />

            </div>

          </div>

          {/* BUTTONS */}

          <div
            className="
              flex justify-end
              gap-4
              mt-10
            "
          >

            <button
              type="button"
              onClick={onClose}
              className="
                px-6 py-3
                rounded-2xl
                bg-slate-100
                hover:bg-slate-200
                font-medium
                transition
              "
            >

              Cancel

            </button>

            <button
              type="submit"
              className="
                px-6 py-3
                rounded-2xl
                bg-gradient-to-r
                from-orange-500
                to-amber-500
                text-white
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >

              Transfer Stock

            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default StockTransferModal;