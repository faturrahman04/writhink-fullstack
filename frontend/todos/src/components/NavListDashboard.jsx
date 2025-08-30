import * as Icon from 'react-feather'

const navList = [
  {
    id: 1,
    icon: Icon.Home,
    navName: 'Dashboard'
  },
  {
    id: 2,
    icon: Icon.CheckSquare,
    navName: 'Checklist'
  },
  {
    id: 3,
    icon: Icon.PenTool,
    navName: 'Note'
  }
];

const NavListDashboard = () => {
  const normalStyleEachList = 'flex gap-3 items-center justify-start px-8 py-3 rounded-lg text-slate-900/60 cursor-pointer';
  const hoverStyleEachList = 'hover:bg-blue-500 hover:text-slate-100'
  const textNormalStyleEachList = 'font-semibold mt-1';
  let iconNormalStyleEachList = 'w-6 text-slate-900/60';

  let mouse // Masih bug, icon belum berubah warna saat dihover

  function mouseOver() {
    iconNormalStyleEachList = 'w-6 text-slate-900/60 hover:text-slate-100'
  }

  return (
    <div className='flex flex-col gap-2'>

      {navList.map(n => (
      <div onMouseOver={mouseOver} key={n.id} className={`${normalStyleEachList} ${hoverStyleEachList}`}>
        <n.icon className={iconNormalStyleEachList} />
        <p className={textNormalStyleEachList}>{n.navName}</p>
      </div>
      ))}
      
    </div>
   

  )
}

export default NavListDashboard