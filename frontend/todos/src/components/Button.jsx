const Button = ({children, variant, onModalClick}) => {
  return (
    <button onClick={onModalClick} className={`${variant} font-medium px-8 py-1.5 rounded-md font-roboto cursor-pointer`}>{children}</button>
  )
}

export default Button