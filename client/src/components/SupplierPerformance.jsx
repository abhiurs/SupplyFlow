import { useEffect, useState } from "react";

import {
  BarChart3,
} from "lucide-react";

import { readExcelFile }
from "../utils/readExcel";

const SupplierPerformance = () => {

  const [suppliers, setSuppliers] =
    useState([]);

  useEffect(() => {

    const loadSuppliers =
      async () => {

        try {

          const orders =
            await readExcelFile(
              "/data/inventory.xlsx",
              "PurchaseOrders"
            );

          console.log(
            "Purchase Orders:",
            orders
          );

          // STORE SUPPLIER SCORES

          const supplierMap = {};

          orders.forEach((order) => {

            const supplier =
              order.Supplier;

            const status =
              order.Status;

            if (
              !supplierMap[supplier]
            ) {

              supplierMap[
                supplier
              ] = {

                total: 0,

                score: 0,

              };

            }

            supplierMap[
              supplier
            ].total += 1;

            // PERFORMANCE LOGIC

            if (
              status ===
              "Delivered"
            ) {

              supplierMap[
                supplier
              ].score += 15;

            } else if (
              status ===
              "Approved"
            ) {

              supplierMap[
                supplier
              ].score += 10;

            } else if (
              status ===
              "Pending"
            ) {

              supplierMap[
                supplier
              ].score += 5;

            } else if (
              status ===
              "Cancelled"
            ) {

              supplierMap[
                supplier
              ].score -= 10;

            }

          });

          // CONVERT TO ARRAY

          const formattedSuppliers =
            Object.entries(
              supplierMap
            ).map(
              ([name, data]) => {

                const maxScore =
                  data.total * 15;

                const percentage =
                  Math.max(
                    10,
                    Math.round(
                      (data.score /
                        maxScore) *
                        100
                    )
                  );

                return {

                  name,

                  performance:
                    percentage,

                };

              }
            );

          // SORT BEST TO WORST

          formattedSuppliers.sort(
            (a, b) =>
              b.performance -
              a.performance
          );

          setSuppliers(
            formattedSuppliers
          );

        } catch (error) {

          console.log(
            "Supplier Error:",
            error
          );

        }

      };

    loadSuppliers();

  }, []);

  return (

    <div>

      {/* SUPPLIER LIST */}

      <div className="space-y-6">

        {suppliers
          .slice(0, 5)
          .map(
            (
              supplier,
              index
            ) => (

              <div
                key={index}
              >

                {/* TOP */}

                <div className="flex justify-between mb-2">

                  <p
                    className="
                      font-semibold
                      text-slate-700
                    "
                  >

                    {supplier.name}

                  </p>

                  <p
                    className="
                      font-bold
                      text-indigo-600
                    "
                  >

                    {
                      supplier.performance
                    }
                    %

                  </p>

                </div>

                {/* PROGRESS BAR */}

                <div
                  className="
                    w-full
                    h-3
                    bg-slate-200
                    rounded-full
                    overflow-hidden
                  "
                >

                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-indigo-500
                      to-cyan-400
                      transition-all
                      duration-700
                    "
                    style={{
                      width: `${supplier.performance}%`,
                    }}
                  />

                </div>

              </div>

            )
          )}

      </div>

    </div>

  );

};

export default SupplierPerformance;