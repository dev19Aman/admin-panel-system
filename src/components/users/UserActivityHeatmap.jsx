import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import { themeColors } from "../../utills/color";

const userActivityData = [
	{ name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
	{ name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
	{ name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
	{ name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
	{ name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
	{ name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
	{ name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
];

const UserActivityHeatmap = () => {
	return (
		<motion.div
		className={`${themeColors.background} shadow-lg rounded-xl p-6 border ${themeColors.border}`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className="text-2xl font-bold text-white mb-4">  User Activity Overview
			</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={userActivityData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#2c3e50" />
						<XAxis dataKey="name" stroke="#B0BEC5" />
						<YAxis stroke="#B0BEC5" />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(41, 50, 65, 0.9)",
								borderColor: "#4A5568",
							}}
							itemStyle={{ color: "#ECEFF1" }}
						/>
						<Legend />
						<Bar dataKey="0-4" stackId="a" fill={themeColors.tealBackground} />
						<Bar dataKey="4-8" stackId="a" fill="#FF9800" />
						<Bar dataKey="8-12" stackId="a" fill="#2196F3" />
						<Bar dataKey="12-16" stackId="a" fill="#F44336" />
						<Bar dataKey="16-20" stackId="a" fill="#9C27B0" />
						<Bar dataKey="20-24" stackId="a" fill="#FFC107" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default UserActivityHeatmap;
