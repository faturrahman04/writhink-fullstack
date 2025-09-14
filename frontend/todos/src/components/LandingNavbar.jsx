import { Link } from 'react-router'
import * as Icon from 'react-feather'

const LandingNavbar = () => {
  return (
    <div className="flex bg-white justify-between items-center px-6 sm:px-10 md:px-14 lg:px-24 h-20 2xl:px-30">
      <h1 className="text-2xl font-openSans font-semibold">Writhink</h1>
      
      <Icon.Menu className='md:hidden' />
      <ul className="hidden justify-between lg:w-[36rem] md:w-[28rem] md:flex font-openSans font-medium">
        <li className='px-6 py-2'>Home</li>
        <li className='px-6 py-2'>About</li>
        <li className='px-6 py-2'>Faq</li>
        <li className='bg-blue-400 px-6 py-2 rounded-xs cursor-pointer text-white'>
          <Link to='/registrasi'>
            Daftar
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default LandingNavbar