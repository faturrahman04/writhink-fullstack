import { useState } from 'react';
import { Link, useLocation } from 'react-router'
import * as Icon from 'react-feather'

const navList = [
  {
    id: 1,
    icon: Icon.CheckSquare,
    navName: 'Checklist',
    to: '/dashboard' // upadate jika menambah fitur baru
  },
];

const NavListDashboard = () => {
  const [isMouseOver, setIsMouseOver] = useState(null);
  const location = useLocation();

  const normalStyleEachList = 'flex gap-3 2xl:gap-4 items-center justify-start px-5 xl:px-8 2xl:px-9 py-2 xl:py-4 2xl:py-5 rounded-lg text-slate-900/60 cursor-pointer duration-100';
  const hoverStyleEachList = 'hover:bg-blue-500 hover:text-slate-100';
  const textNormalStyleEachList = 'font-light font-poppins text-sm xl:text-base 2xl:text-xl';
  const activeStyleEachList = 'bg-blue-500 text-white';

  return (
    <div className='flex flex-col gap-3'>

      {navList.map((n, i) => (
      <Link 
        to={n.to} 
        onMouseEnter={() => setIsMouseOver(i)} 
        onMouseLeave={() => setIsMouseOver(null)} 
        key={n.id} 
        className={`${normalStyleEachList} ${hoverStyleEachList} ${isMouseOver === i ? 'text-slate-100/80' : 'text-slate-900/80'} ${location.pathname == n.to ? activeStyleEachList : ''}`}>
        <n.icon />
        <p className={textNormalStyleEachList}>{n.navName}</p>
      </Link>
      ))}
      
    </div>
   

  )
}

export default NavListDashboard