import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/Datatable'
import {getData} from '../../../../../lib/getData'


export default async function Warehouse() {
  const warehouses = await getData("warehouse");
 
  const columns = ["title","location","warehouseType"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Warehouse"  newLink="/bill/inventory/Warehouse/New" />

      {/* table */}
      <div className='my-4 p-8'>
        <DataTable data={warehouses} columns={columns} resourceTitle="warehouse" resourceTitles="Warehouse"/>
      </div>
        
     
    </div>
  )
}
