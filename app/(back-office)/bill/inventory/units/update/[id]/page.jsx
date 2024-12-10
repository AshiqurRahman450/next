import React from 'react'
import NewBrand from '../../New/page'
import { getData } from '@/lib/getData'
import NewUnit from '../../New/page'
import NewSupplier from '../../../supplier/New/page'

export default  async function Update({params:{id}}) {
  const data = await getData(`units/${id}`)
  console.log(data)
  return (
    <NewUnit initialData={data} isUpdate={true}/>
  )
}
