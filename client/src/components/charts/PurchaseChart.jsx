import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PurchaseChart = () => {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Monthly Purchases",
        data: [400, 600, 800, 700, 1000, 1200],
        backgroundColor: "#2563EB",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">

      <h2 className="text-xl font-semibold text-slate-900 mb-6">
        Monthly Purchases
      </h2>

      <Bar data={data} options={options} />

    </div>
  );
};

export default PurchaseChart;