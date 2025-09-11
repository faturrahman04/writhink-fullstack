import InputSearch from "../components/InputSearch"
import Navbar from "../components/Navbar"
import Todos from "../components/Todos"

const DashboardContent = () => {
  return (
    <div className="flex flex-col max-w-full w-full">
      <Navbar />
      <div className="max-w-full w-full px-6 py-8">
        <h1 className="font-bold text-3xl 2xl:text-4xl">To Do List</h1>
        <InputSearch />

        {/* Todos */}
          <Todos />

        {/* Todos */}

      </div>
    </div>
  )
}

export default DashboardContent