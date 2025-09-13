import { Link, Navigate, Outlet , useLocation, useNavigate } from "react-router";
import { useState } from "react";

const FormLayout = ({formTitle, formHandle}) => {
  const [formDataRegistrasi, setFormDataRegistrasi] = useState({username: "", password: "", confirmPassword: ""});
  const [formDataLogin, setFormDataLogin] = useState({username: "", password: ""});

  const location = useLocation();
  let navigate = useNavigate();
  if (location.pathname == '/login') {formTitle='Login'}
  if (location.pathname == '/registrasi') {formTitle='Sign Up'}

    async function handleSubmitRegistrasi(e) {
      e.preventDefault();
      const data = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({username: formDataRegistrasi.username, password: formDataRegistrasi.password, confirmPassword: formDataRegistrasi.confirmPassword})
      });
      const response = await data.json();
      console.log(response);
    }

    async function handleSubmitLogin(e) {
      e.preventDefault();
      const data = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username: formDataLogin.username, password: formDataLogin.password})
      });

      const response = await data.json();
      console.log(response);

      if (response.success) {
        localStorage.setItem('token', response.token);
        navigate('/dashboard');
      } else {
        alert(response.message);
      }
    }

    const token = localStorage.getItem('token');
    if (token) {
      return <Navigate to='/dashboard' replace />
    }

  if (location.pathname == '/login') formHandle = handleSubmitLogin;
  if (location.pathname == '/registrasi') formHandle = handleSubmitRegistrasi;

  return (
    <div className="flex flex-col justify-center items-center max-h-screen min-h-screen">
      <h1 className="text-3xl font-semibold text-blue-500">{formTitle}</h1>
      <form onSubmit={formHandle} className="flex flex-col w-[80%] sm:w-[50%] lg:w-[40%] xl:w-96">
        <Outlet context={{formDataRegistrasi, setFormDataRegistrasi, formDataLogin, setFormDataLogin}} />
      </form>
      {location.pathname === '/login' ? <p>Belum memiliki akun? <Link className="text-blue-500" to="/registrasi">Daftar</Link></p> : <p>Sudah memiliki akun? <Link className="text-blue-500" to="/login">Login</Link></p>}
    </div>
  )
}

export default FormLayout;