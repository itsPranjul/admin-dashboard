import { Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import ProductPage from "./pages/ProductPage"
import Sidebar from "./components/common/Sidebar"
import SalesPage from "./pages/SalesPage"
import UserPage from "./pages/UserPage"
import SettingsPage from "./pages/SettingsPage"
import AnalyticsPage from "./pages/AnalyticsPage"

function App() {

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">

      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<UserPage />}/>
        <Route path="/sales" element={<SalesPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  )
}

export default App;
