import { Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";

const ProtectDashboard = ({children}) => {
  const token = localStorage.getItem('token');

  const decoded = jwtDecode(token);
  const expiredToken = decoded.exp * 1000;
  
  if (Date.now() > expiredToken) {
    localStorage.removeItem('token')
  }

  if (!token) {
    return <Navigate to="/login" replace />
  }
  return children;
}

export default ProtectDashboard