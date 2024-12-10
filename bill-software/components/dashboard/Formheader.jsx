import React from 'react'
import { X } from 'lucide-react'

export default function Formheader({title,href}) {
  return (
    <div className="flex items-center justify-between bg-white py-3 px-16">
        <h2 className='text-xl font-semibold'>{title}</h2>
        <a href={href}>
          <X/>
        </a>
      </div>
  )
}
