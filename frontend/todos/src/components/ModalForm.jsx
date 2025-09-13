import Button from "./Button"
import InputForm from "./InputForm"
import * as Icon from "react-feather"
import useStoreModal from "../hooks/useStoreModal"
import { useState, useRef } from "react"

const ModalForm = () => {
  const { modal, setModal } = useStoreModal();
  const [ task , setTask] = useState({taskname: ""});

  const taskValueRef = useRef(null);

  async function handleSubmitModal(e) {
    e.preventDefault();

    const data = await fetch('http://localhost:3000/todos/add', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        task: task.taskname
      })
    });

    const response = await data.json();
    console.log(response)
    taskValueRef.current.value = "";
  }

  return (
    <div className={`fixed flex justify-center items-center z-20 w-full h-full ${modal ? 'bg-slate-500/70 scale-100' : 'scale-0'}`}>
      <div className={`relative p-8 bg-slate-50 rounded-lg w-[90%] sm:w-[65%] md:w-[42rem] lg:w-[38rem] 2xl:w-[44rem] shadow-lg border border-slate-300/20 duration-200 ${modal ? 'scale-100' : 'scale-0'}`}>
        <h2 className="text-3xl font-semibold">Tambah Tugas</h2>
        <div onClick={() => setModal(!modal)} className="p-3 rounded-md absolute right-2 top-2 hover:cursor-pointer hover:bg-slate-200">
          <Icon.X />
        </div>

        <form onSubmit={handleSubmitModal} className="flex flex-col">
          <InputForm
            ref={taskValueRef}
            htmlFor="task"
            type="text"
            name="task"
            id="task"
            labelText="Nama Tugas"
            placeholder="Masukkan tugas..."
            value={task.taskname}
            onChange={(e) => setTask({...task, taskname: e.target.value})}
             />

            <Button variant={`mt-6 bg-blue-500 text-slate-50 hover:bg-blue-600 active:bg-blue-400`}>Tambah</Button>
        </form>
      </div>
    </div>
  )

  
}



export default ModalForm