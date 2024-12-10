

import React from 'react';
import Formheader from '../../../../../../components/dashboard/Formheader';

import {getData} from "@/lib/getData"

import CreateItemForm from '../../../../../../components/dashboard/createItemform';



export default async function Newitem({initialData={},isUpdate=false}) {
  // Sequencial Fetching => Waterfall
  const categoriesData=  getData('categories');
  const unitsData =  getData('units');
  const brandsData = getData('brands');
  const warehousesData =getData('warehouse');
  const suppilerData = getData('supplier');

  //Parallel Fetching
  const [categories,units,brands,warehouses,suppiler ] = await Promise.all([categoriesData,unitsData,brandsData,warehousesData,suppilerData])

  

  return (
    <div>
      {/* Header */}
      <Formheader title={isUpdate?"Update Item":"New Item"} href="/bill/inventory/items" />

      {/* Form */}
     <CreateItemForm categories={categories} units={units} brands={brands} warehouses={warehouses} supplier={suppiler} initialData={initialData} isUpdate={isUpdate}/>
    </div>
  );
}
