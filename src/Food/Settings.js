//import React, { useState } from 'react'
import '../App.css'
import { RiRestaurant2Line } from "react-icons/ri";
import { LuMenuSquare } from "react-icons/lu";
import { RiRestaurantLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsPercent } from "react-icons/bs";
import {Link, Outlet} from 'react-router-dom'
import { LuThumbsUp } from "react-icons/lu";


const Settings = () => {
  //const [isactive, setisactive] = useState(true)

  /*const menuObj = [
    
    {
      icons: <LuMenuSquare />,
      name: "Menu Fliters",
      href:"/"
    },
    {
      icons: <RiRestaurantLine />,
      name: "Cuisines Management",
      href:"/"
    },
    {
      icons: <GiSettingsKnobs />,
      name: "Additional Fliter",
      href:"/"
    },
    {
      icons: <BsPercent />,
      name: "Restaurant Fess",
      href:"/"
    },
    {
      icons: <LuThumbsUp />,
      name: "Review Setting",
      href:"/"
    }
  ]

  return (
    <>
    <div className='container bg-white  p-3 rounded-2 d-flex flex-col left'>
      <button className='btn btn-primary text-start ps-4'><RiRestaurant2Line /> Food Types</button>
      {/*{menuObj.map((item, i) => (
      <ul>
         {menuObj.map((item, index)=>(
         <li key={index}>
          <a href={item.href}>
           <button className='btn text-start ps-0' >
           {item.icons} {item.name}
           </button>
          </a>
         </li>
      ))}
</ul>
    </div>
    </>
  )*/


  const Menu = [
    {title: "Food Types", icon:<RiRestaurant2Line />, href:"Types"},
    {title: "Menu Fliters", icon:<LuMenuSquare />, href:""},
    {title: "Cuisines Management", icon:<RiRestaurantLine />, href:""},
    {title: "Additional Fliter", icon:<GiSettingsKnobs />, href:""},
    {title: "Restaurant Fess", icon:<BsPercent />, href:""},
    {title: "Review Setting", icon: <LuThumbsUp />, href:""}
  ]
  return(
    <>
    <div className='h-90 mt-20 mx-10'>
      <nav className='mr-3 ml-20 flex-col bg-white border-r shadow-sm' style={{ width: '400px', height: '350px', border: '1px groove'}}>
        <ul className='pt-3 men'>
          {Menu.map((menu, index)=>(
            <li key={index} 
            className={' text-bold-500 text-black flex gap-x-10 cursor-pointer p-2 pl-2 hover:bg-blue-300 pl-4 rounded-md'}>
               <Link to={menu.href} className="flex gap-x-3 mr-5 text-black" style={{textDecoration:'none'}}>
               {menu.icon}
               {menu.title}
               </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <Outlet/>
</>
)
}

export default Settings