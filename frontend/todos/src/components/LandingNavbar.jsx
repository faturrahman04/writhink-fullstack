import { Link } from 'react-router'
import * as Icon from 'react-feather'
import { useState } from 'react'

const LandingNavbar = () => {
  const [menuIsClick, setMenuIsClick ] = useState(false);

  return (
    <>
    <div className="flex bg-white justify-between items-center px-6 sm:px-10 md:px-14 lg:px-24 h-20 2xl:px-30">
      <h1 className="text-2xl font-openSans font-semibold">Writhink</h1>
      
      <Icon.Menu onClick={() => setMenuIsClick(!menuIsClick)} className='md:hidden cursor-pointer' />
      <ul className="hidden justify-between lg:w-[36rem] md:w-[28rem] md:flex font-openSans font-medium">
        <li className='px-6 py-2'>
          <a href="#home">
            Home
          </a>
        </li>
        <li className='px-6 py-2'>
          <a href="#about">
            About
          </a>
        </li>
        <li className='px-6 py-2'>
          <Link to="">
            Faq
          </Link>
        </li>
        <li className='bg-blue-400 px-6 py-2 rounded-xs cursor-pointer text-white'>
          <Link to='/registrasi'>
            Daftar
          </Link>
        </li>
      </ul>
    </div>

    {menuIsClick && 
      <div>
        <ul className="flex flex-col pt-4 pb-8 items-center gap-4 justify-between lg:w-[36rem] md:w-[28rem] md:hidden font-openSans font-medium bg-white">
          <li className='px-6 py-2'>
            <a href="#home">
              Home
            </a>
          </li>
          <li className='px-6 py-2'>
            <a href="#about">
              About
            </a>
          </li>
          <li className='px-6 py-2'>
            <Link to="">
              Faq
            </Link>
          </li>
          <li className='bg-blue-400 px-6 py-2 rounded-xs cursor-pointer text-white w-fit'>
            <Link to='/registrasi'>
              Daftar
            </Link>
          </li>
        </ul>
      </div>
    }
    </>
  )
}

export default LandingNavbar