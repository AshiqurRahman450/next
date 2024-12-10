import { AlignJustify, Bell, ChevronDown, History, LayoutGrid, Plus, Settings, User2, Users } from 'lucide-react'
import React from 'react'
import Searchinput from '../../components/dashboard/searchinput'
import Image from 'next/image'

export default function Header({setShowSidebar}) {
  function handleClick(){
    console.log("btn clicked")
     setShowSidebar(true)
  }
  return (
    <div className='bg-gray-100 h-14 flex items-center justify-between px-8 border-b border-slate-200'>
      <button className='lg:hidden ' onClick={handleClick}>
        <AlignJustify className='w-6 h-6'/>
      </button>
       <div className='flex gap-3'>
        <button className='hidden lg:block'>
            <History className='w-6 h-6'/>
        </button>
        <Searchinput/>
        
       </div>
       <div className=" item-center gap-3 hidden lg:flex ">
        <div className='pr-2 border-r border-gray-300'>
       <button className='p-1 rounded-lg bg-blue-600'>
        <Plus className='text-slate-50 w-5 h-5'/>
       </button>
       </div>

       <div className="flex border-r border-gray-300 space-x-2">
       <button className='p-1 rounded-lg hover:bg-slate-200'>
        <Users className='text-slate-900 w-5 h-5'/>
       </button>
       <button className='p-1 rounded-lg hover:bg-slate-200'>
        <Bell className='text-slate-900 w-5 h-5'/>
       </button>
       <button className='p-1 rounded-lg hover:bg-slate-200'>
        <Settings className='text-slate-900 w-5 h-5'/>
       </button>
       </div>
       <div className='flex gap-3'>
        <button className='flex item-center'>
          <span>Ashik</span>
          <ChevronDown className='w-4 h-4 mt-1.5'/>
        </button>
       
        <button>
          <LayoutGrid/>
        </button>
       </div>

       </div>
       <button className='flex item-center '>
          <Image src='/ashik.png' alt='user image' width={96} height={96} className='w-8 h-8 rounded-full border border-slate-900'/>
        </button>
    </div>
  )
}
