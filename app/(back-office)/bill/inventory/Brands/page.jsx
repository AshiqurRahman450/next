import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/Datatable'
import {getData} from '../../../../../lib/getData'


export default async function Brands() {
  const brands = await getData("brands");
 
  const columns = ["title","createdAt","updatedAt"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Brands"  newLink="/bill/inventory/Brands/New" />

      {/* table */}
      <div className='my-4 p-8'>
        <DataTable data={brands} columns={columns} resourceTitle="brands" resourceTitles="Brands"/>
      </div>
        
     
    </div>
  )
}
