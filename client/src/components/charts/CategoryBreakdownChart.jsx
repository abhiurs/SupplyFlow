import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#4F46E5",
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

const CategoryBreakdownChart = ({ products }) => {

  const categoryMap = {};

  products.forEach((item) => {

    const category = item.Category || "Others";

    const value =
      Number(item.Stock || 0) *
      Number(item.Price || 0);

    if (categoryMap[category]) {

      categoryMap[category] += value;

    } else {

      categoryMap[category] = value;

    }

  });

  const chartData = Object.entries(categoryMap).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const totalValue = chartData.reduce(
    (acc, item) => acc + item.value,
    0
  );

  return (

    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Category Breakdown
      </h2>

      <div className="flex items-center justify-between gap-8">

        {/* DONUT CHART */}

        <div className="relative w-[240px] h-[240px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
              >

                {chartData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />

                ))}

              </Pie>

            </PieChart>

          </ResponsiveContainer>

          {/* CENTER VALUE */}

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <p className="text-slate-400 text-sm">
              Total
            </p>

            <h1 className="text-3xl font-bold text-slate-800">
              ₹{(totalValue / 100000).toFixed(2)}L
            </h1>

          </div>

        </div>

        {/* LEGENDS */}

        <div className="space-y-5 flex-1">

          {chartData.map((item, index) => {

            const percentage = (
              (item.value / totalValue) *
              100
            ).toFixed(1);

            return (

              <div
                key={index}
                className="flex items-center justify-between"
              >

                <div className="flex items-center gap-3">

                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor:
                        COLORS[index % COLORS.length],
                    }}
                  />

                  <div>

                    <h3 className="font-semibold text-slate-700">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      ₹
                      {(item.value / 100000).toFixed(2)}L
                    </p>

                  </div>

                </div>

                <span className="font-bold text-slate-700">
                  {percentage}%
                </span>

              </div>

            );

          })}

        </div>

      </div>

    </div>

  );

};

export default CategoryBreakdownChart;