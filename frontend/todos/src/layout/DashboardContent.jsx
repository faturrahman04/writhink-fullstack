import Navbar from "../components/Navbar"

const DashboardContent = () => {
  return (
    <div className="flex flex-col max-w-full w-full">
      <Navbar />
      <div className="max-w-full w-full px-8 py-6">
        <h1 className="font-bold text-3xl">To Do List</h1>
      </div>
    </div>
  )
}

export default DashboardContent