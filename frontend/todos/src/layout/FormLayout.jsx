import { Outlet } from "react-router";
import { useLocation } from "react-router";
import { useState } from "react";

const FormLayout = ({formTitle}) => {
  const [formData, setFormData] = useState({username: "", password: "", confirmPassword: ""});

  const location = useLocation();
  if (location.pathname == '/login') {formTitle='Login'}
  if (location.pathname == '/registrasi') {formTitle='Sign Up'}
  
    async function handleSubmit(e) {
      e.preventDefault();
      const data = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({username: formData.username, password: formData.password})
      });
      const response = await data.json();
    }

  return (
    <div className="flex flex-col justify-center items-center max-h-screen min-h-screen">
      <h1 className="text-3xl font-semibold text-blue-500">{formTitle}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-[80%]">
        <Outlet context={[formData, setFormData]} />
      </form>
      {location.pathname === '/login' ? <p>Belum memiliki akun? <a className="text-blue-500" href="/registrasi">Daftar</a></p> : <p>Sudah memiliki akun? <a className="text-blue-500" href="/login">Login</a></p>}
    </div>
  )
}

export default FormLayout;