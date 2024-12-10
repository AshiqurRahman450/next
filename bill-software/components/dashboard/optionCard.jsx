"use client"
import React from 'react'

export default function optionCard({optionData}) {
    const {title,description,link,linkTitle,enabled,icon:Icon} = optionData
  return (
    <div className="shadow-xl bg-white flex flex-col items-center gap-4 rounded ">
    <h2 className='text-2xl font-bold p-4'>{title}</h2>
    <div className=''>
     <Icon strokeWidth=".5px" className='w-32 h-32'/>
    </div>
    <p className='line-clamp-1 px-5'>
     {description}
    </p>
    {enabled?(
        <a href={link} className='py-2 rounded-sm bg-blue-600 inline-flex items-center px-4 text-white m-5'>

        {linkTitle}
        </a>
    ):(
        <button className='py-2 rounded-sm bg-blue-600 inline-flex items-center px-4 text-white '>Enable</button>
    )}
    
   </div>
  )
}
