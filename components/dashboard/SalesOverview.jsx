import { Check, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SalesOverview() {
    const salesActivity = [
        {
            title:"To be Packed",
            number:10,
            unit:"Qty",
            href:"#",
            color:"text-blue-600"
        },
        {
            title:"To be Shipped",
            number:0,
            unit:"Pkgs",
            href:"#",
            color:"text-red-600"
        },
        {
            title:"To be Delivered",
            number:0,
            unit:"Pkts",
            href:"#",
            color:"text-green-600"
        },
        {
            title:"To be Invoiced",
            number:10,
            unit:"Qty",
            href:"#",
            color:"text-orange-600"
        },
    ]
    const inventorySummary = [
        {
            title:"Quantity in Hand",
            number:10,

        },
        {
            title:"Quantity to be Received",
            number:0,

        },
    ]
  return (
    <div className='bg-blue-50 border-b border-slate-300  grid grid-cols-12 '>
        {/* Sales Activity */}
        <div className="col-span-full lg:col-span-8 border-r border-slate-300 p-8 py-16 lg:py-8">
            <h2 className='mb-6 text-xl'>Sales Activity</h2>
            <div className=" md:grid-cols-2 lg:flex gap-8  ">
                {/* Card */}
                {
                    salesActivity.map((item,i)=>{
                        return(
                            <a href={item.href} key={i} className="shadow rounded-lg bg-white border border-slate-200 hover:border-blue-400 px-3 py-3 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
                            <h4 className={`font-semibold text-3xl ${item.color}`}>{item.number}</h4>
                            <small className='text-slate-500'>{item.unit}</small>
                            <div className="flex items-center space-x-2 text-slate-500">
                                <CheckCircle2 className='w-5 h-5'/>
                                <span className='uppercase'>{item.title}</span>
                            </div>
                        </a>
                        )
                    })
                }
               
            </div>
        </div>
        {/* Inventory Summary */}
        <div className="col-span-full lg:col-span-4 p-8">
        <h2 className='mb-6 text-xl ml-4'>Inventory Summary</h2>
        <div className=''>
           {
            inventorySummary.map((item,i)=>{
                return(
                    <div key={i} className='shadow rounded-lg bg-white border border-slate-200 hover:border-blue-400 m-4 py-1 px-3 cursor-pointer flex items-center justify-between gap-3 transition-all duration-300'>
                    <h2 className='uppercase text-slate-500 text-sm'>{item.title}</h2>
                    <h4 className='text-2xl'>{item.number}</h4>
                    </div> 
                )
            })
           }
        </div>

        </div>
    </div>
  )
}
