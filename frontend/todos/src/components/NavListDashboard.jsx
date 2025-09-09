import { useState } from 'react';
import { Link } from 'react-router'
import * as Icon from 'react-feather'

const navList = [
  {
    id: 1,
    icon: Icon.Home,
    navName: 'Dashboard',
    to: '/'
  },
  {
    id: 2,
    icon: Icon.CheckSquare,
    navName: 'Checklist',
    to: '/todos'
  },
  {
    id: 3,
    icon: Icon.PenTool,
    navName: 'Note',
    to: '/note'
  }
];

const NavListDashboard = () => {
  const [isMouseOver, setIsMouseOver] = useState(null);

  const normalStyleEachList = 'flex gap-3 items-center justify-start px-8 py-4 rounded-lg text-slate-900/60 cursor-pointer duration-100';
  const hoverStyleEachList = 'hover:bg-blue-500 hover:text-slate-100'
  const textNormalStyleEachList = 'font-light font-poppins mt-1';

  return (
    <div className='flex flex-col gap-3'>

      {navList.map((n, i) => (
      <Link to={n.to} onMouseEnter={() => setIsMouseOver(i)} onMouseLeave={() => setIsMouseOver(null)} key={n.id} className={`${normalStyleEachList} ${hoverStyleEachList} ${isMouseOver === i ? 'text-slate-100/80' : 'text-slate-900/80'}`}>
        <n.icon />
        <p className={textNormalStyleEachList}>{n.navName}</p>
      </Link>
      ))}
      
    </div>
   

  )
}

export default NavListDashboard