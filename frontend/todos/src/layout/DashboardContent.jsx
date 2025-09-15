import useStoreModal from "../hooks/useStoreModal"
import Button from "../components/Button"
import InputSearch from "../components/InputSearch"
import Navbar from "../components/Navbar"
import Todos from "../components/Todos"


const DashboardContent = () => {
  const { modal, setModal } = useStoreModal()

  function handleModal(e) {
    e.preventDefault();
    setModal(!modal);
  }


  return (
    <div className="flex flex-col max-w-full w-full">
      <Navbar />
      <div className="max-w-full w-full px-6">
        <div className="flex flex-col sticky top-16 z-20 bg-slate-100 py-8">

          <div className="flex justify-between">
            <h1 className="font-bold text-3xl 2xl:text-4xl">To Do List</h1>
            <Button onModalClick={handleModal} variant={`bg-blue-500 text-slate-50 hover:bg-blue-400 py-2`}>Tambah Tugas</Button>
          </div>

            {/* <InputSearch /> */}

        </div>

        {/* Todos */}
          <Todos />

        {/* Todos */}

      </div>
    </div>
  )
}

export default DashboardContent