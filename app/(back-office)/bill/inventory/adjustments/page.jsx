import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/Datatable'
import {getData} from '../../../../../lib/getData'


export default async function Adjustments() {
  const addAdjustments = await getData("adjustments/add");
  const transferAdjustments = await getData("adjustments/transfer");
 
  const addcolumns = ["referenceNumber","addStockQty"]
  const transfercolumns = ["referenceNumber","transferStockQty"]

  return (
    <div>
      {/* Header */}
      <FixedHeader title="Adjustments"  newLink="/bill/inventory/adjustments/New" />

      {/* table */}
      <div className='my-4 p-8'>
        <h2 className='py-4 text-xl font-semibold'>Stock Increment Adjustments</h2>
        <DataTable data={addAdjustments} columns={addcolumns} resourceTitle="adjustments/add"/>
      </div>

      <div className='my-4 p-8'>
      <h2 className='py-4 text-xl font-semibold'>Stock Transfer Adjustments</h2>
        <DataTable data={transferAdjustments} columns={transfercolumns} resourceTitles="adjustments" resourceTitle="adjustments/transfer"/>
      </div>
        
     
    </div>
  )
}
