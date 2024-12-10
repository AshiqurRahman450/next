import React from 'react'
import NewBrand from '../../New/page'
import { getData } from '@/lib/getData'
import NewCategories from '../../New/page'

export default  async function Update({params:{id}}) {
  const data = await getData(`categories/${id}`)
  console.log(data)
  return (
    <NewCategories initialData={data} isUpdate={true}/>
  )
}
