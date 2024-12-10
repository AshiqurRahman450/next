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
    <div className='h-32  p-6 header-bg bg-slate-50  border-b border-slate-300'>
        <div className="flex space-x-3">
            <div className='flex w-12 h-12 rounded-lg bg-white items-center justify-center'>
                <Building2/>
            </div>
            <div className="flex flex-col">
                <p className='text-slate-700 font-semibold'>Hello, Ashiqur Rahman</p>
                 <span className='text-sm'>Ashik</span>
            </div>
        </div>
        <nav className='sticky mt-6 flex space-x-4'>
          
          {
            navLinks.map((item,i)=>{
                return(
                    <a  key={i} className={`${pathname===item.href?"py-1 border-b-2 border-blue-600":"py-1" }`} href={item.href}>{item.title}</a>
                    
                )
            })
          }
        </nav>
    </div>
  )
}
