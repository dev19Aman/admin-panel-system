import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { AlertCircle, AlertTriangle, Award, BarChart, Box, DollarSign, Package, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";

const ProductsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Inventory' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
				<StatCard name='Inventory Count' icon={Box} value={1234} color='#4F46E5' /> {/* Indigo-700 */}
<StatCard name='Best Performers' icon={Award} value={89} color='#16A34A' /> {/* Green-600 */}
<StatCard name='Critical Stock' icon={AlertCircle} value={23} color='#F97316' /> {/* Orange-500 */}
<StatCard name='Gross Earnings' icon={BarChart} value={"$543,210"} color='#DC2626' /> {/* Red-600 */}
				</motion.div>

				<ProductsTable />

				{/* CHARTS */}
				<div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<SalesTrendChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};
export default ProductsPage;
