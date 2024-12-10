import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/Datatable'
import {getData} from '../../../../../lib/getData'


export default async function Categories() {
  const categories = await getData("categories");
  
  const columns = ["title","description"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Categories"  newLink="/bill/inventory/Categories/New" />

      {/* table */}
      <div className='my-4 p-8'>
        <DataTable data={categories} columns={columns} resourceTitle="Categories"/>
      </div>
        
     
    </div>
  )
}
