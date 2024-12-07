import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import { themeColors } from "./utills/color";

function App() {
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
			<div className={`absolute inset-0 ${themeColors.overlay}`} />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>
			<Sidebar />
			<Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/inventory' element={<ProductsPage />} />
				<Route path='/team' element={<UsersPage />} />
				<Route path='/revenue' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	);
}

export default App;
