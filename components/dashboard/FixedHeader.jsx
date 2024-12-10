import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react'
import React from 'react'

export default function FixedHeader({newLink,title}) {
  return (
    <div className='flex items-center justify-between bg-white py-5 px-3'>
      <button className='text-2xl'>{title}</button>
      <div className="flex  gap-4">
        {/* New */}
        <a href={newLink} className='p-1 rounded-sm bg-blue-600 flex items-center px-4 text-white'>
        <Plus className='text-slate-50 w-5 h-5'/>
        <span>New</span>
       </a>
        {/* Layout */}
        <div className="flex rounded-md overflow-hidden">
          <button className='bg-gray-300 p-1 border-r border-gray-400'><List className='w-5 h-5'/></button>
          <button className='bg-gray-100 p-1 rounded-md'><LayoutGrid className='w-5 h-5'/></button>
        </div>
        {/* More */}
        <button className='bg-gray-100 p-1 rounded-md'>
          <MoreHorizontal className='w-5 h-5'/>
        </button>
        {/* Help */}
        <button className='bg-orange-400 p-2 text-white rounded-md'>
          <HelpCircle className='w-5 h-5' />
        </button>
      </div>
    </div>
  )
}
