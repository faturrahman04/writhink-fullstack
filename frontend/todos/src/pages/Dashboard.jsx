import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate("/login");
  }

  return (
    <div>
      <Sidebar />
      <a href="" onClick={handleLogout}>Logout</a>
    </div>
  )
}

export default Dashboard