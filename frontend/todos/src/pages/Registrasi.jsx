import { useOutletContext } from "react-router"
import Button from "../components/Button"
import InputForm from "../components/InputForm"

const Registrasi = () => {
  const { formDataRegistrasi, setFormDataRegistrasi } = useOutletContext();

  return (
    <>
      <InputForm 
      htmlFor="username" 
      id="username" 
      labelText="Username" 
      name="username" 
      placeholder="Masukkan Username" 
      type="text" 
      value={formDataRegistrasi.username}
      onChange={(e) => setFormDataRegistrasi({...formDataRegistrasi, username: e.target.value})}/>
      
      <InputForm
      htmlFor="password" 
      id="password" 
      labelText="Password" 
      name="password" 
      placeholder="Masukkan Password" 
      type="password"
      value={formDataRegistrasi.password}
      onChange={(e) => setFormDataRegistrasi({...formDataRegistrasi, password: e.target.value})} />

      <InputForm
      htmlFor="confirmPassword" 
      id="confirmPassword" 
      labelText="Konfirmasi Password" 
      name="confirmPassword" 
      placeholder="Konfirmasi Password" 
      type="password"
      value={formDataRegistrasi.confirmPassword}
      onChange={(e) => setFormDataRegistrasi({...formDataRegistrasi, confirmPassword: e.target.value})} />
      <Button children="Daftar" variant="text-white bg-blue-500 mt-4 active:bg-blue-400" />
    </>
  )
}

export default Registrasi