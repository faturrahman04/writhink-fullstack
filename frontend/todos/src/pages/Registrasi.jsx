import { useOutletContext } from "react-router"
import Button from "../components/Button"
import InputForm from "../components/InputForm"

const Registrasi = () => {
  const [formData, setFormData] = useOutletContext();

  return (
    <>
      <InputForm 
      htmlFor="username" 
      id="username" 
      labelText="Username" 
      name="username" 
      placeholder="Masukkan Username" 
      type="text" 
      value={formData.username}
      onChange={(e) => setFormData({...formData, username: e.target.value})}/>
      
      <InputForm 
      htmlFor="password" 
      id="password" 
      labelText="Password" 
      name="password" 
      placeholder="Masukkan Password" 
      type="password"
      value={formData.password}
      onChange={(e) => setFormData({...formData, password: e.target.value})} />

      <InputForm
      htmlFor="confirmPassword" 
      id="confirmPassword" 
      labelText="Konfirmasi Password" 
      name="confirmPassword" 
      placeholder="Konfirmasi Password" 
      type="password"
      value={formData.confirmPassword}
      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
      <Button children="Daftar" variant="text-white bg-blue-500 mt-4" />
    </>
  )
}

export default Registrasi