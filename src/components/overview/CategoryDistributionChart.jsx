import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { themeColors } from "../../utills/color";


const categoryData = [
	{ name: "Technology", value: 5000 },
	{ name: "Fashion", value: 3500 },
	{ name: "Health & Wellness", value: 3000 },
	{ name: "Education", value: 2500 },
	{ name: "Travel & Leisure", value: 2000 },
];

const COLORS = [
	themeColors.tealBackground,  // Green for 0-4
	"#FF9800",  // Orange for 4-8
	"#2196F3",  // Blue for 8-12
	"#F44336",  // Red for 12-16
	"#9C27B0",  // Purple for 16-20
	"#FFC107",  // Yellow for 20-24
  ];
const CategoryDistributionChart = () => {
	return (
		<motion.div
		className={`${themeColors.background} overflow-hidden shadow-lg rounded-xl border ${themeColors.border} p-6`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Breakdown by Category</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart>
						<Pie
							data={categoryData}
							cx={"50%"}
							cy={"50%"}
							labelLine={false}
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{categoryData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default CategoryDistributionChart;
