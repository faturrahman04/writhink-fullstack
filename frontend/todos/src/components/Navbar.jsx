import * as Icon from "react-feather"
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem('token');
const decode = jwtDecode(token);
const usernameLogin = decode.username;

const Navbar = () => {
  return (
    <nav className="max-w-full w-full sticky bg-white top-0 h-fit py-5 px-20">
      <div className="flex justify-end gap-2">
        <h1 className="text-md font-medium">{usernameLogin}</h1>
        <Icon.User className="w-6 text-slate-900/70" />
      </div>
    </nav>
  )
}

export default Navbar