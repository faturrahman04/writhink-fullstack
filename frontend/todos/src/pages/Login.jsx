import InputForm from "../components/InputForm";
import Button from "../components/Button";
import { useOutletContext } from "react-router";

const Login = () => {
  const { formDataLogin, setFormDataLogin } = useOutletContext();
  return (
    <>
      <InputForm 
        htmlFor="username" 
        id="username" 
        name="username" 
        type="text" 
        labelText="Username" 
        placeholder="Masukkan Username"
        value={formDataLogin.username}
        onChange={(e) => setFormDataLogin({...formDataLogin, username: e.target.value})} />
      <InputForm
        htmlFor="password" 
        id="password" 
        name="password" 
        type="password" 
        labelText="Password" 
        placeholder="Masukkan Password"
        value={formDataLogin.password}
        onChange={(e) => setFormDataLogin({...formDataLogin, password: e.target.value})} />
      <Button variant={`bg-blue-500 text-white mt-4`}>Confirm</Button>
    </>
  )
}

export default Login