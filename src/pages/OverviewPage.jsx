import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { motion } from "framer-motion"
import SaleOverviewChart from "../components/overview/SaleOverviewChart"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesChannelChart from "../components/overview/SalesChannelChart"


const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Overview' />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">

        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration: 1}}
        >
          <StatCard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1'/>
          <StatCard name='New Users' icon={Users} value='1,234' color='#885CF6'/>
          <StatCard name='Total Products' icon={ShoppingBag} value='567' color='#108981'/>
          <StatCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#108981'/>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SaleOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  )
}

export default OverviewPage