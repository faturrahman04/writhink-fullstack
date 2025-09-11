import * as Icon from "react-feather"
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useStoreMenu from "../hooks/useStoreMenu";


const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const { setIsMenuOnClick } = useStoreMenu();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate("/login");
      return;
    } 

    try {
      const token = localStorage.getItem('token');
      const user = jwtDecode(token);
      setUsername(user.username);
    } catch (err) {
      console.log('Invalid token : ', err)
      navigate("/login");
    }
  }, [navigate]);

  return (
    <nav className={`max-w-screen sticky bg-white top-0 h-fit px-6 py-5`}>
      <div className="flex justify-between">
        <Icon.Menu className="lg:opacity-0" onClick={setIsMenuOnClick} />
        <div className="gap-2 flex">
          <h1 className="text-md font-medium">{username}</h1>
          <Icon.User className="w-6 text-slate-900/70" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar