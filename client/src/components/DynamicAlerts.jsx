import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { readExcelFile } from "../utils/readExcel";

const DynamicAlerts = () => {

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {

    const loadAlerts = async () => {

      try {

        // PRODUCTS
        const products =
          await readExcelFile(
            "/data/inventory.xlsx",
            "Products"
          );

          console.log(products);
          console.table(products);

        // PURCHASE ORDERS
        const purchaseOrders =
          await readExcelFile(
            "/data/inventory.xlsx",
            "PurchaseOrders"
          );

          console.log(purchaseOrders);

        let generatedAlerts = [];

        // LOW STOCK ALERTS
        const lowStockItems =
  products.filter(
    (item) =>
      Number(item.Stock) <=
      Number(item["Reorder Level"])
  );

        if (lowStockItems.length > 0) {

          generatedAlerts.push({
            title: `${lowStockItems.length} Items Below Reorder Level`,
            type: "critical",
          });

        }

        const outOfStock =
  products.filter(
    (item) =>
      item.Status ===
      "Out of Stock"
  );

if (outOfStock.length > 0) {

  generatedAlerts.push({
    title: `${outOfStock.length} Products Out of Stock`,
    type: "critical",
  });

}

        // EXPIRY ALERTS
        const today = new Date();

        const expiringItems =
          products.filter((item) => {

            if (!item.ExpiryDate)
              return false;

            const expiry =
              new Date(
                item.ExpiryDate
              );

            const diffDays =
              (
                expiry - today
              ) /
              (1000 * 60 * 60 * 24);

            return diffDays <= 30;

          });

        if (expiringItems.length > 0) {

          generatedAlerts.push({
            title: `${expiringItems.length} Products Expiring Soon`,
            type: "warning",
          });

        }

        // DELAYED PO ALERTS
        const delayedPOs =
          purchaseOrders.filter(
            (po) =>
              po.Status === "Delayed"
          );

        delayedPOs.forEach((po) => {

          generatedAlerts.push({
            title: `${po.POID} Delayed`,
            type: "critical",
          });

        });

        setAlerts(generatedAlerts);

      } catch (error) {

        console.log(
          "Alerts Error:",
          error
        );

      }

    };

    loadAlerts();

  }, []);

  return (

    <div className="space-y-5">

      {alerts.map(
        (alert, index) => (

          <div
            key={index}
            className="
              border border-slate-200
              rounded-3xl
              p-5
              flex items-center gap-4
              hover:shadow-md
              transition
            "
          >
            <div>

              <h3 className="font-medium text-slate-800">

                {alert.title}

              </h3>

            </div>

          </div>

        )
      )}

    </div>

  );

};

export default DynamicAlerts;