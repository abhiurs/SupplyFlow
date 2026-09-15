import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { useEffect, useState } from "react";

import { readExcelFile } from "../../utils/readExcel";

const InventoryValueChart = () => {

  const [chartData, setChartData] =
    useState([]);

  const [activeFilter, setActiveFilter] =
    useState("1M");

  const [allData, setAllData] =
    useState({
      "1W": [],
      "1M": [],
      "3M": [],
    });

  useEffect(() => {

    const loadChartData = async () => {

      try {

        // READ EXCEL FILE
        const movements =
          await readExcelFile(
            "/data/inventory.xlsx",
            "InventoryMovements"
          );

        console.log(
          "Inventory Movements:",
          movements
        );

        // SORT DATA BY DATE
        const sortedMovements =
          [...movements].sort(
            (a, b) =>
              new Date(a.Date) -
              new Date(b.Date)
          );

        let runningStock = 0;

        // GENERATE REAL DYNAMIC DATA
        const formattedData =
          sortedMovements.map(
            (item) => {

              const qty = Number(
                item.Quantity || 0
              );

              if (item.Type === "IN") {

  runningStock += qty;

} else {

  runningStock = Math.max(
    runningStock - qty,
    0
  );

}

              return {

                name: new Date(
                  item.Date
                ).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "short",
                  }
                ),

                stock: runningStock,

              };

            }
          );

        // FILTER DATA
        const generatedData = {

          "1W":
            formattedData.slice(-7),

          "1M":
            formattedData.slice(-30),

          "3M":
            formattedData,

        };

        setAllData(generatedData);

        setChartData(
          generatedData["1M"]
        );

      } catch (error) {

        console.log(
          "Chart Error:",
          error
        );

      }

    };

    loadChartData();

  }, []);

  // FILTER BUTTON FUNCTION
  const handleFilter = (filter) => {

    setActiveFilter(filter);

    setChartData(allData[filter]);

  };

  // LOADING STATE
  if (chartData.length === 0) {

    return (

      <div className="h-[420px] flex items-center justify-center text-slate-400">

        Loading Inventory Trend...

      </div>

    );

  }

  return (

    <div className="h-[320px] w-full">

      {/* FILTER BUTTONS */}

      <div className="flex justify-end gap-3 mb-4">

        <button
          onClick={() =>
            handleFilter("1W")
          }
          className={`px-4 py-2 rounded-xl transition ${
            activeFilter === "1W"
              ? "bg-indigo-600 text-white"
              : "bg-slate-100"
          }`}
        >
          1W
        </button>

        <button
          onClick={() =>
            handleFilter("1M")
          }
          className={`px-4 py-2 rounded-xl transition ${
            activeFilter === "1M"
              ? "bg-indigo-600 text-white"
              : "bg-slate-100"
          }`}
        >
          1M
        </button>

        <button
          onClick={() =>
            handleFilter("3M")
          }
          className={`px-4 py-2 rounded-xl transition ${
            activeFilter === "3M"
              ? "bg-indigo-600 text-white"
              : "bg-slate-100"
          }`}
        >
          3M
        </button>

      </div>

      {/* CHART */}

      <ResponsiveContainer
        width="100%"
        height={260}
      >

        <AreaChart
  data={chartData}
  margin={{
  top: 10,
  right: 10,
  left: 0,
  bottom: 5,
}}
>

          <defs>

            <linearGradient
              id="colorValue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#4F46E5"
                stopOpacity={0.4}
              />

              <stop
                offset="95%"
                stopColor="#4F46E5"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E2E8F0"
          />

          <XAxis
  dataKey="name"
  tick={{ fontSize: 11 }}
  tickMargin={10}
  interval="preserveStartEnd"
  minTickGap={30}
/>

          <YAxis
  width={45}
  tick={{ fontSize: 11 }}
  tickFormatter={(value) =>
    `${value}`
  }
/>

          <Tooltip
  contentStyle={{
    borderRadius: "16px",
    border: "none",
    boxShadow:
      "0 10px 25px rgba(0,0,0,0.08)",
  }}
  formatter={(value) => [
    `${value} Units`,
    "Stock",
  ]}
/>

          <Area
  type="natural"
  dataKey="stock"
  stroke="#4F46E5"
  fillOpacity={1}
  fill="url(#colorValue)"
  strokeWidth={3}
  activeDot={{
    r: 5,
    strokeWidth: 2,
    fill: "#4F46E5",
  }}
/>

        </AreaChart>

      </ResponsiveContainer>

    </div>

  );

};

export default InventoryValueChart;