import { useEffect, useState } from "react";
import { readExcelFile } from "../utils/readExcel";

const UpcomingDeliveries = () => {

  const [deliveries, setDeliveries] =
    useState([]);

  useEffect(() => {

    const loadDeliveries =
      async () => {

        const orders =
          await readExcelFile(
            "/data/inventory.xlsx",
            "PurchaseOrders"
          );

        console.log(orders);

        setDeliveries(
          orders.slice(0, 5)
        );

      };

    loadDeliveries();

  }, []);

  return (

    <div className="space-y-4">

      {deliveries.map(
        (item, index) => (

          <div
            key={index}
            className="
              flex items-center
              justify-between
              bg-slate-50
              rounded-2xl
              px-5 py-4
              hover:bg-slate-100
              transition
            "
          >

            {/* LEFT */}

            <div>

              <p className="font-semibold text-slate-800">

                {item["PO ID"]}

              </p>

              <p className="text-sm text-slate-500">

                {item.Supplier}

              </p>

            </div>

            {/* STATUS */}

            <div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.Status ===
                  "Delivered"
                    ? "bg-green-100 text-green-600"
                    : item.Status ===
                      "Pending"
                    ? "bg-orange-100 text-orange-600"
                    : item.Status ===
                      "Cancelled"
                    ? "bg-red-100 text-red-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >

                {item.Status}

              </span>

            </div>

          </div>

        )
      )}

    </div>

  );

};

export default UpcomingDeliveries;