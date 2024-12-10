"use client"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';

import Textinput from '../Forminputs/Textinput';
import SubmitButton from '../Forminputs/SubmitButton';
import Textareainput from '../Forminputs/Textareainput';
import Selectinput from '../Forminputs/Selectinput'
import { makeApiRequest } from "@/lib/apiRequest";

export default function AddInventoryform({items,warehouses}) {
  
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

   async function onSubmit(data) {
    console.log(data)
    setLoading(true)
    const baseUrl = "http://localhost:3000"
    makeApiRequest(setLoading, `${baseUrl}/api/adjustments/add`, data, "Stock Adjustment", reset);
  }

  return (
    <div>
    
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
          <div className="flex gap-10 items-center ">
         <div className="flex-1">
            <Textinput
              label="Reference Number"
              name="referenceNumber"
              register={register}
              errors={errors}
              className="w-full"
             
            />
          </div>
          <div className="flex-1 ">
       <Selectinput name="itemId" label="Select the Item" register={register} className="w-full" options={items}/>
       </div>
          <div className="flex-1 mb-5.5">
            <Textinput
              label="Enter Quantity of Stock of Add"
              type="number"
              name="addStockQty"
              register={register}
              errors={errors}
              className="w-full"
            />
          </div>

          <div className="flex-1 mb-5.5">
       <Selectinput name="warehouseId" label="Select the Warehouse that will receive the Stock" register={register} className="w-full" options={warehouses}/>
       </div>
       </div>

       


        <Textareainput
          label="Adjustments Notes"
          name="notes" // Changed name to avoid conflict with "title"
          register={register}
          errors={errors}
           className="w-full"
        />
        <SubmitButton isLoading={loading} title="Adjustment" />
      </form>
    </div>
  );
}
