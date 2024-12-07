import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { themeColors } from "../../utills/color";
const COLORS = [
	themeColors.tealBackground,  // Green for 0-4
	"#FF9800",  // Orange for 4-8
	"#2196F3",  // Blue for 8-12
	"#F44336",  // Red for 12-16
	"#9C27B0",  // Purple for 16-20
	"#FFC107",  // Yellow for 20-24
  ];

const userDemographicsData = [
	{ name: "18-24", value: 20 },
	{ name: "25-34", value: 30 },
	{ name: "35-44", value: 25 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 10 },
];

const UserDemographicsChart = () => {
	return (
		<motion.div
			className={`${themeColors.background} shadow-lg rounded-xl p-6 border${themeColors.border}`}

			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Demographics</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={userDemographicsData}
							cx='50%'
							cy='50%'
							outerRadius={100}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{userDemographicsData.map((entry, index) => (
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
export default UserDemographicsChart;
