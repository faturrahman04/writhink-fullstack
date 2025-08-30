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
    <div className="font-poppins sticky left-0 px-3 w-2xs">
      <h1>Writhink</h1>

      <NavListDashboard />
    
      <a href="" onClick={handleLogout}>Logout</a>
    </div>
  )
}

export default Sidebar