import { motion } from "framer-motion";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const salesData = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 5200 },
  { name: "Oct", sales: 4800 },
  { name: "Nov", sales: 3800 },
  { name: "Dec", sales: 5600 },
  { name: "Jan", sales: 7100 },
  { name: "Feb", sales: 6200 },
  { name: "Mar", sales: 4500 },
  { name: "Apr", sales: 7400 },
  { name: "May", sales: 8900 },
  { name: "Jun", sales: 8200 },
];

const SaleOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop:blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        Sales Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#ESE7EB" }}
            />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, strokeWidth: 2}}
              />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SaleOverviewChart;
