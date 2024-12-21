"use client"
import { Building2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HomeNavbar() {
    const pathname = usePathname();
    console.log(pathname)
    const navLinks=[
        {
            title:"Dashboard",
            href:"/bill/home/dashboard",
        },
        {
            title:"Getting Started",
            href:"/bill/home/gettingstarted",
        },
        {
            title:"Recent Updates",
            href:"/bill/home/updates",
        },
        {
            title:"Announcements",
            href:"/bill/home/announcements",
        }

    ]
  return (
    <div className='h-32  p-6 header-bg bg-slate-50  '>
        <div className="flex space-x-3">
            <div className='flex w-12 h-12 rounded-lg bg-white items-center justify-center'>
                <Building2/>
            </div>
            <div className="flex flex-col">
                <p className='text-slate-700 font-semibold'>Hello, Ashiqur Rahman</p>
                 <span className='text-sm'>Ashik</span>
            </div>
        </div>
        <nav className=' mt-6 flex space-x-4'>
          
          
          

<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
{
            navLinks.map((item,i)=>{
                return(
                    <li className='me-2' key={i}>
                        <a   className={`${pathname===item.href?"inline-block  px-4 py-2 rounded-t-lg hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-800 dark:hover:text-blue-300":"inline-block px-4 py-2 text-grey-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-gray-500" }`} href={item.href}>{item.title}</a>
                    </li>
                    
                )
            })
            
          }
    
  
    
    
</ul>

        </nav>
    </div>
  )
}
