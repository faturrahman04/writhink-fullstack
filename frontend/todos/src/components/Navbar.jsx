import * as Icon from "react-feather"
import DashboardContent from "../layout/DashboardContent"

const Navbar = () => {
  return (
    <nav className="max-w-full w-full sticky top-0 bg-red-500 h-fit">
      <div>
        <Icon.User className="w-6 text-slate-900/70" />
        <h1>Navbar Dashboard</h1>
      </div>

      <DashboardContent />
    </nav>
  )
}

export default Navbar