import * as Icon from "react-feather"

const InputSearch = () => {
  return (
    <div className="relative">
      <Icon.Search className="absolute top-8 left-4" />
      <input 
      name="serch" 
      id="search" 
      type="text" 
      placeholder="Quick search todos..."
      className="border border-slate-400 w-full pl-12 py-2 rounded-lg my-6" />
    </div>
  )
}

export default InputSearch;