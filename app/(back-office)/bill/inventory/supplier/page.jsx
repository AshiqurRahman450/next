import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/Datatable'
import {getData} from '../../../../../lib/getData'


export default async function Suppliers() {
  const suppliers = await getData("supplier");

  const columns = ["title","phone","email"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Suppliers"  newLink="/bill/inventory/supplier/New" />

      {/* table */}
      <div className='my-4 p-8'>
        <DataTable data={suppliers} columns={columns} resourceTitle="supplier"/>
      </div>
        
     
    </div>
  )
}
