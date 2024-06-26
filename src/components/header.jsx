import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import profile from '../assets/images/profile.jpg'
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import Headeritem from './headeritem';


function Header() {
    const [toggle,setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon:HiHome
        },
        {
            name: 'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon:HiPlus
        },
        {
            name: 'ORIGINALS',
            icon:HiStar
        },
        {
            name: 'MOVIES',
            icon:HiPlayCircle
        },
        {
            name: 'SERIES',
            icon:HiTv
        },
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-12 items-center'>
         <img src={logo} className='w-[80px] md:w-[115px]  object-cover'/>
         <div className='hidden md:flex gap-8 '>
         {menu.map((item)=>(
         <Headeritem name ={item.name} Icon= {item.icon}/>
         ))}
         </div> 

         <div className=' md:hidden flex gap-5'>
         {menu.map((item,index)=>index<3 &&(
         <Headeritem name ={''} Icon= {item.icon}/>
         ))}
         </div>

         <div className=' md:hidden'onClick={()=>setToggle(!toggle)}>
         <Headeritem name ={''} Icon= {HiDotsVertical}/>
         {toggle?<div className='absolute bg-[#121212] p-3 border-[1px] border-gray-700 px-5 py-5'>
         {menu.map((item,index)=>index>2 &&(
         <Headeritem name ={item.name} Icon= {item.icon}/>
         ))}
         </div>:null}
         </div>
         </div>
      
        
                <img src={profile} className='w-[50px] rounded-full' alt="Profile" />
    
    </div>
  )
}

export default Header