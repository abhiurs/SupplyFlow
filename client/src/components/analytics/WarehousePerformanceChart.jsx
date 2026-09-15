import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const WarehousePerformanceChart = ({
  products,
}) => {

  const warehouseMap = {};

  products.forEach((item) => {

    const warehouse =
      item.Warehouse || "Unknown";

    const stock =
      Number(item.Stock || 0);

    if (warehouseMap[warehouse]) {

      warehouseMap[warehouse] += stock;

    } else {

      warehouseMap[warehouse] = stock;

    }

  });

  const chartData = Object.entries(
    warehouseMap
  ).map(([name, stock]) => ({
    name,
    stock,
  }));

  return (

    <div className="
      bg-white
      rounded-3xl
      p-6
      border border-slate-100
      shadow-sm
    ">

      <div className="
        flex
        items-center
        justify-between
        mb-6
      ">

        <div>

          <h2 className="
            text-2xl
            font-bold
            text-slate-800
          ">
            Warehouse Performance
          </h2>

          <p className="text-slate-400 mt-1">
            Inventory distribution by warehouse
          </p>

        </div>

      </div>

      <div className="h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart data={chartData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E8F0"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="stock"
              fill="#4F46E5"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default WarehousePerformanceChart;