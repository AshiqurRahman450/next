import React from 'react'
import NewBrand from '../../New/page'
import { getData } from '@/lib/getData'
import NewCategories from '../../New/page'
import createItemForm from '../../../../../../../components/dashboard/createItemform'
import Newitem from '../../New/page'


export default  async function Update({params:{id}}) {
  const data = await getData(`items/${id}`)
  console.log(data)
  return (
    <Newitem initialData={data} isUpdate={true} />
  )
}
