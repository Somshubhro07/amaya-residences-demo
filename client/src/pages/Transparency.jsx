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
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: { y: { beginAtZero: true, title: { display: true, text: "₹" } } },
  };

  return (
    <div className="bg-amayaPeach min-h-screen p-8">
      <h1 className="text-5xl font-bold text-amayaBlue text-center mb-8">Transparency</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Bar data={data} options={options} />
          <p className="text-2xl text-black mt-6">₹10,000 – Lift Repair (View Bill)</p>
          <p className="text-xl text-black mt-2">Ads cover tracking costs.</p>
        </div>
      </div>
    </div>
  );
};

export default Transparency;