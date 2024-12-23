import { Pencil, Trash, Trash2 } from 'lucide-react'
import React from 'react'

export default function Datatable({data,columns}) {
    
  return (
    



<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               {
                columns.map((item,i)=>{
                    return(
                        <th key={i} scope="col" className="px-6 py-3">
                        {item}
                    </th>
                    )
                })
               }
                <th scope="col" className="px-6 py-3">
                        Action
                    </th>
               
               
            </tr>
        </thead>
        <tbody>
          {
            data.map((item,i)=>{
                return(
                    <tr  key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                   
                   {
                    columns.map((columnName,i)=>{
                        return(
                            <td  key={i} className="px-6 py-4">
                            {item[columnName]}
                        </td>
                        )
                    })
                   }
                   
                   
                    <td className="px-6 py-4 flex items-center space-x-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center space-x-1">
                            <Pencil className='w-4 h-4'/>
                            <span>Edit</span>
                            </a>
                            <button className='font-medium text-red-600 dark:text-blue-500  flex items-center space-x-1'>
                                <Trash2 className='w-4 h-4'/>
                                <span>Delete</span>
                            </button>
                    </td>
                </tr>
                )
            })
          }
           
           
           
            
        </tbody>
    </table>
</div>


  )
}
