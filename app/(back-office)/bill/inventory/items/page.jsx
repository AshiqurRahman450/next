import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/Datatable'
import {getData} from '../../../../../lib/getData'


export default async function Items() {
  const items = await getData("items");
  console.log(items)
 
  const columns = ["imageUrl","title","sellingPrice","buyingPrice","quantity","category.title","warehouse.title"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Items"  newLink="/bill/inventory/items/New" />

      {/* table */}
      <div className='my-4 p-8'>
        <DataTable data={items} columns={columns} resourceTitle="items" resourceTitles="items"/>
        
      </div>
        
     
    </div>
  )
}
