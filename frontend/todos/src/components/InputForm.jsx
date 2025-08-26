const InputForm = ({htmlFor, type, name, id, labelText, placeholder, value, onChange}) => {
  return (
    <>
      <label className="mt-4" htmlFor={htmlFor}>
        {labelText}
      </label>
      <input className={`mt-1 border border-slate-500/50 px-3 py-1 rounded-md`} 
      type={type} 
      name={name} 
      id={id} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange}/>
    </>
  )
}

export default InputForm