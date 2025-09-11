import * as Icon from "react-feather"
import { useNavigate } from "react-router"
import NavListDashboard from "./NavListDashboard"
import useStoreMenu from "../hooks/useStoreMenu";
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isMenuOnClick, setMenuClosed } = useStoreMenu()

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate("/login");
  }

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuClosed(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setMenuClosed])

  return (
    <div ref={menuRef} className={`font-openSans bg-white lg:sticky lg:w-[22rem] 2xl:w-[32rem] min-h-screen duration-100 lg:translate-x-0 shadow-xs shadow-slate-300 border-r border-slate-200 z-10 ${isMenuOnClick ? 'translate-x-0 w-[70%]' : '-translate-x-150 absolute w-0'}`}>
      <h1 className="text-center py-8 text-3xl 2xl:text-4xl font-bold tracking-wide">Writhink</h1>

      <div className="absolute top-28 bottom-4 w-full px-5">
        <div className="flex flex-col justify-between h-full">
        <NavListDashboard />
      
        <div className="">
          <div className="flex gap-3 items-center justify-start px-5 py-3 rounded-lg text-slate-900/60 cursor-pointer text-sm hover:bg-slate-200 duration-100">
            <Icon.LogOut />
            <p>
              <a href="" onClick={handleLogout}>Logout</a>
            </p>
          </div>
        </div>
      </div>

      </div>
      
    </div>
  )
}

export default Sidebar