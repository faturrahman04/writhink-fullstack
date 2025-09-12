import Button from "./Button"
import InputForm from "./InputForm"
import * as Icon from "react-feather"
import useStoreModal from "../hooks/useStoreModal"

const ModalForm = () => {
  const { modal, setModal } = useStoreModal();

  return (
    <div className={`fixed flex justify-center items-center z-20 w-full h-full ${modal ? 'bg-slate-500/70 scale-100' : 'scale-0'}`}>
      <div className={`relative p-8 bg-slate-50 rounded-lg w-[70%] shadow-lg border border-slate-300/20 duration-200 ${modal ? 'scale-100' : 'scale-0'}`}>
        <h2 className="text-3xl font-semibold">Tambah Tugas</h2>
        <div onClick={() => setModal(!modal)} className="p-3 rounded-md absolute right-2 top-2 hover:cursor-pointer hover:bg-slate-200">
          <Icon.X />
        </div>

        <form onSubmit="" className="flex flex-col">
          <InputForm
            htmlFor="task"
            type="text"
            name="task"
            id="task"
            labelText="Nama Tugas"
            placeholder="Masukkan tugas..."

             />

            <Button variant={`mt-4 bg-blue-500 text-slate-50 hover:bg-blue-600 active:bg-blue-400`}>Tambah</Button>
        </form>
      </div>
    </div>

  )
}

export default ModalForm