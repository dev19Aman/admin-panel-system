import {
	BarChart2,
	DollarSign,
	Menu,
	Settings,
	ShoppingBag,
	ShoppingCart,
	Users,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { themeColors } from "../../utills/color";

const SIDEBAR_ITEMS = [
	{ name: "Dashboard", icon: BarChart2, color: "#6366f1", href: "/" },
	{ name: "Inventory", icon: ShoppingBag, color: "#3B82F6", href: "/inventory" },
	{ name: "Team", icon: Users, color: "#F472B6", href: "/team" },
	{ name: "Revenue", icon: DollarSign, color: "#34D399", href: "/revenue" },
	// { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	// { name: "Settings", icon: Settings, color: "#8B5CF6", href: "/preferences" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const location = useLocation(); // Get current route

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className={`h-full bg-[#181A1B] shadow-lg p-4 flex flex-col ${themeColors.border}`}>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-teal-100 transition-colors max-w-fit'
				>
					<Menu size={24} />
				</motion.button>

				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
					<Link key={item.href} to={item.href}>
					<motion.div
					  className={`flex items-center p-4 text-sm font-medium rounded-lg transition-colors mb-2 ${
						location.pathname === item.href
						  ? "bg-teal-500 text-white"
						  : "hover:bg-teal-100 hover:text-black"
					  }`}
					>
					  <item.icon
						size={20}
						style={{ color: item.color, minWidth: "20px" }}
					  />
					  <AnimatePresence>
						{isSidebarOpen && (
						  <motion.span
							className='ml-4 whitespace-nowrap'
							initial={{ opacity: 0, width: 0 }}
							animate={{ opacity: 1, width: "auto" }}
							exit={{ opacity: 0, width: 0 }}
							transition={{ duration: 0.2, delay: 0.3 }}
						  >
							{item.name}
						  </motion.span>
						)}
					  </AnimatePresence>
					</motion.div>
				  </Link>
				  
					))}
				</nav>
			</div>
		</motion.div>
	);
};

export default Sidebar;
