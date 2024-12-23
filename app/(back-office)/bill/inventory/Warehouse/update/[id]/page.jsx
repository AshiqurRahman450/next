import React from 'react'
import NewBrand from '../../New/page'
import { getData } from '@/lib/getData'
import NewUnit from '../../New/page'
import NewWarehouse from '../../New/page'

export default  async function Update({params:{id}}) {
  const data = await getData(`warehouse/${id}`)
  console.log(data)
  return (
    <NewWarehouse initialData={data} isUpdate={true}/>
  )
}
