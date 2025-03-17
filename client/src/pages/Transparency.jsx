import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Transparency = () => {
  const data = {
    labels: ["Funds", "Spent"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [1200000, 500000],
        backgroundColor: "#40b0e0",
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "top", labels: { font: { size: 18 } } } },
    scales: { y: { beginAtZero: true, title: { display: true, text: "₹", font: { size: 18 } } } },
  };

  return (
    <div className="bg-amayaPeach dark:bg-gray-800 min-h-screen p-10">
      <h1 className="text-6xl font-bold text-amayaBlue dark:text-white text-center mb-12 drop-shadow-md">Transparency</h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
        <Bar data={data} options={options} />
        <div className="mt-8">
          <p className="text-2xl text-black dark:text-white">₹10,000 – Lift Repair</p>
          <a href="/path-to-bill.png" className="text-amayaBlue dark:text-amayaYellow text-xl hover:underline">View Bill</a>
          <p className="text-xl text-black dark:text-white mt-4">Ads cover tracking costs.</p>
        </div>
      </div>
    </div>
  );
};

export default Transparency;