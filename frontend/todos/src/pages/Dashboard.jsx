import ModalForm from "../components/ModalForm";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../layout/DashboardContent";

const Dashboard = () => {

  return (
    <div className="flex">
      <Sidebar />
      <DashboardContent />

      <ModalForm />

    </div>
  )
}

export default Dashboard