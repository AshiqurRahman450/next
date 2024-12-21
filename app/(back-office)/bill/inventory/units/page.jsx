import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/Datatable'
import {getData} from '../../../../../lib/getData'


export default async function Units() {
  const units = await getData("units");
 
  const columns = ["title","abbreviation"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Units"  newLink="/bill/inventory/units/New" />

      {/* table */}
      <div className='my-4 p-8'>
        <DataTable data={units} columns={columns} resourceTitle="units" resourceTitles="units"/>
      </div>
        
     
    </div>
  )
}
