import FormLayout from "../layout/FormLayout";
import InputForm from "../components/InputForm";
import Button from "../components/Button";

const Login = () => {
  return (
    <>
      <InputForm htmlFor="username" id="username" name="username" type="text" labelText="Username" placeholder="Masukkan Username" />
      <InputForm htmlFor="password" id="password" name="password" type="password" labelText="Password" placeholder="Masukkan Password" />
      <Button variant={`bg-blue-500 text-white mt-4`}>Confirm</Button>
    </>
  )
}

export default Login