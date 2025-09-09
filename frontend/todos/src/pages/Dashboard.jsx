import Sidebar from "../components/Sidebar";
import DashboardContent from "../layout/DashboardContent";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DashboardContent />
    </div>
  )
}

export default Dashboard