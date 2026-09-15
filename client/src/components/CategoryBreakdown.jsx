import { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { PieChart as PieIcon }
from "lucide-react";

import { readExcelFile }
from "../utils/readExcel";

const COLORS = [
  "#6366F1",
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EC4899",
  "#14B8A6",
];

const CategoryBreakdown = () => {

  const [chartData, setChartData] =
    useState([]);

  const [totalValue, setTotalValue] =
    useState(0);

  useEffect(() => {

    const loadCategoryData =
      async () => {

        try {

          const products =
            await readExcelFile(
              "/data/inventory.xlsx",
              "Products"
            );

          console.log(
            "Products:",
            products
          );

          const categoryMap = {};

          let overallTotal = 0;

          products.forEach(
            (product) => {

              const category =
                product.Category;

              const stock =
                Number(
                  product.Stock || 0
                );

              const price =
                Number(
                  product.Price || 0
                );

              const value =
                stock * price;

              overallTotal += value;

              if (
                !categoryMap[
                  category
                ]
              ) {

                categoryMap[
                  category
                ] = 0;

              }

              categoryMap[
                category
              ] += value;

            }
          );

          const formattedData =
            Object.entries(
              categoryMap
            ).map(
              ([name, value]) => ({

                name,

                value,

              })
            );

          setChartData(
            formattedData
          );

          setTotalValue(
            overallTotal
          );

        } catch (error) {

          console.log(
            "Category Error:",
            error
          );

        }

      };

    loadCategoryData();

  }, []);

  return (

    <div>




      {/* CHART SECTION */}

      <div className="flex items-center justify-between gap-8">

        {/* DONUT CHART */}

        <div className="w-[260px] h-[260px] relative">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={chartData}
                innerRadius={75}
                outerRadius={105}
                paddingAngle={4}
                dataKey="value"
              >

                {chartData.map(
                  (
                    entry,
                    index
                  ) => (

                    <Cell
                      key={`cell-${index}`}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />

                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

          {/* CENTER TEXT */}

          <div
            className="
              absolute inset-0
              flex flex-col
              items-center
              justify-center
            "
          >

            <p className="text-slate-400 text-sm">

              Total

            </p>

            <h3
              className="
                text-3xl
                font-bold
                text-slate-800
              "
            >

              ₹
              {(
                totalValue / 100000
              ).toFixed(1)}
              L

            </h3>

          </div>

        </div>

        {/* CATEGORY LIST */}

        <div className="flex-1 space-y-5">

          {chartData.map(
            (
              item,
              index
            ) => {

              const percentage =
                (
                  (item.value /
                    totalValue) *
                  100
                ).toFixed(0);

              return (

                <div
                  key={index}
                  className="
                    flex items-center
                    justify-between
                  "
                >

                  {/* LEFT */}

                  <div className="flex items-center gap-4">

                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor:
                          COLORS[
                            index %
                              COLORS.length
                          ],
                      }}
                    />

                    <div>

                      <p
                        className="
                          font-semibold
                          text-slate-700
                        "
                      >

                        {item.name}

                      </p>

                      <p
                        className="
                          text-sm
                          text-slate-400
                        "
                      >

                        ₹
                        {(
                          item.value /
                          100000
                        ).toFixed(2)}
                        L

                      </p>

                    </div>

                  </div>

                  {/* RIGHT */}

                  <p
                    className="
                      font-bold
                      text-slate-700
                    "
                  >

                    {percentage}%

                  </p>

                </div>

              );

            }
          )}

        </div>

      </div>

    </div>

  );

};

export default CategoryBreakdown;