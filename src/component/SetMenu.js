import {
  UserCheck2Icon,
  UnlockKeyhole,
  SquareUserRound,
  BadgeDollarSign,
  MoreHorizontal,
} from 'lucide-react';
export default function Setmenu() {
  const Menu = [
    {title: "Account Settings", icon:<SquareUserRound size={25}/>, href:"/Account"},
    {title: "Personal Information", icon:<UserCheck2Icon size={25}/>, href:"/User"},
    {title: "Change Password", icon:<UnlockKeyhole size={25}/>, href:"/Password"},
    {title: "Saved Payment Method", icon:<BadgeDollarSign size={25}/>, href:"/Payment"},
  ]
  return(
    <>
    <div className='h-90 mt-20 mx-10'>
      <nav className='mr-3 ml-20 flex-col bg-white border-r shadow-sm' style={{ width: '400px', height: '350px', border: '1px groove'}}>
        <div className='p-3 flex boder-t'>
        <img
              className=" imgProfileStyle  h-14 w-12 rounded-full border-0.1"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
            <div className=''>
            <h4 className="font-bold mt-2 mx-2">Phantom Sam</h4>
            <span className="text-xs text-grey-600 mx-2">Manager</span>
            </div>
            <ul className="flex-1 px-3"></ul>
            <div className="flex justify-between items-center ml-3">
              <div>
                <MoreHorizontal size={20}/>
              </div>
            </div>
        </div>
        <ul className='pt-3'>
          {Menu.map((menu, index)=>(
            <li key={index} 
            className={'text-bold-500 text-black flex gap-x-10 cursor-pointer p-2 pl-2 hover:bg-blue-300 rounded-md'}>
               <a href={menu.href} className="flex gap-x-3 mr-5 text-black" style={{textDecoration:'none'}} activeClassName="active">
               {menu.icon}
               {menu.title}
               </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
</>
)
}

