import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ChartSection = ({ salesData }) => {
  if (!salesData || salesData.length === 0) {
    return <p>No data available to display</p>;
  }

  // Prepare the data for the chart
  const labels = salesData.map((item) => item.product); // Product names as labels
  const sales = salesData.map((item) => item.sales); // Sales quantities
  const revenue = salesData.map((item) => item.revenue); // Revenue values

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sales Quantity",
        data: sales,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Revenue",
        data: revenue,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Products",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",          // Enable flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center",     // Center vertically
        width: "100%",            // Full width of the container
        height: "200px",          // Set a specific height for the chart container
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartSection;