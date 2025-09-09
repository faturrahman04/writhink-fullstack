import * as Icon from "react-feather"
import { useNavigate } from "react-router"
import NavListDashboard from "./NavListDashboard"

const Sidebar = () => {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate("/login");
  }

  return (
    <div className="font-openSans bg-white absolute lg:sticky px-3 lg:w-[22rem] min-h-screen duration-100 -translate-x-100 lg:translate-x-0 shadow-xs shadow-slate-300 border-r border-slate-200">
      <h1 className="text-center py-8 text-3xl font-bold tracking-wide">Writhink</h1>

      <div className="flex flex-col justify-between h-[85%]">
        <NavListDashboard />
      
        <div>
          <div className="flex gap-3 items-center justify-start px-8 py-3 rounded-lg text-slate-900/60 cursor-pointer hover:bg-slate-200 duration-100">
            <Icon.LogOut />
            <p>
              <a href="" onClick={handleLogout}>Logout</a>
            </p>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Sidebar