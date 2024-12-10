"use client"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import Formheader from '../dashboard/Formheader';
import Textinput from '../Forminputs/Textinput';
import SubmitButton from '../Forminputs/SubmitButton';
import Textareainput from '../Forminputs/Textareainput';
import Selectinput from '../Forminputs/Selectinput'
import { UploadButton, UploadDropzone } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Imageinput from "../Forminputs/Imageinput"
import { makeApiRequest, makePutRequest } from "@/lib/apiRequest"; 
import { useRouter } from "next/navigation";


export default function createItemForm({categories,units,brands,warehouses,supplier,initialData={},isUpdate=false}) {
  const router = useRouter()
  const [imageUrl,setImageUrl] = useState('')
 
 
  const { register, handleSubmit, reset, formState: { errors } } = useForm({defaultValues:initialData

  });
  const [loading, setLoading] = useState(false);
  function redirect(){
    router.push("bill/inventory/Brands")
  }

   async function onSubmit(data) {
    data.imageUrl=imageUrl
    console.log(data)
    setLoading(true)
    const baseUrl = "http://localhost:3000"
    if(isUpdate){
      //Update Request
      makePutRequest(setLoading, `${baseUrl}/api/items/${initialData.id}`, data, "Items",redirect, reset);
    }else{
      makeApiRequest(setLoading, `${baseUrl}/api/items`, data, "Items", reset);
    }
   
    setImageUrl("")
  }

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
  >
    <div className="flex gap-10">
     <div className="flex-1">
        <Textinput
          label="Item Name"
          name="title"
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex-1">
   <Selectinput name="CategoryId" label="Select the Item Category" register={register} className="w-full" options={categories}/>
   </div>
   </div>
     <div className="flex gap-10 mt-5">
      <div className="flex-1">
        <Textinput
          label="Item SKU"
          name="sku"
          register={register}
          errors={errors}
          className="w-full"
        />
      </div>
      <div className="flex-1">
        <Textinput
          label="Item Barcode"
          name="barcode"
          register={register}
          errors={errors}
          className="w-full"
        />
      </div>
      </div>
      <div className="flex gap-10 mt-5">
      <div className="flex-1">
        <Textinput
          label="Item Quantity"
          name="quantity"
          register={register}
          errors={errors}
          className="w-full"
        />
      </div>
      <div className="flex-1">
      <Selectinput name="unitId" label="Select the Unit" register={register} className="w-full" options={units}/>
      </div>
      </div>
      <div className="flex gap-10 mt-5">
      <div className="flex-1">
        <Textinput
          label="Buying Price"
          name="buyingPrice"
          register={register}
          errors={errors}
          type='number'
          className="w-full"
        />
      </div>

      <div className="flex-1">
      <Selectinput name="brandId" label="Select the Brand" register={register} className="w-full" options={brands}/>
      </div>
      </div>
      <div className="flex gap-10 mt-5">
      <div className="flex-1">
        <Textinput
          label="Selling Price"
          name="sellingPrice"
          register={register}
          errors={errors}
          type='number'
          className="w-full"
        />
      </div>

      <div className="flex-1">
        <Textinput
          label="Re-Order Point"
          name="ReorderPoint"
          register={register}
          errors={errors}
          type='number'
          className="w-full"
        />
      </div>
      </div>
       
      <div className="flex gap-10 mt-5">
      <div className="flex-1">
      <Selectinput name="WarehouseId" label="Select the Warehouse" register={register} className="w-full" options={warehouses}/>
      </div>

      <div className="flex-1">
        <Textinput
          label="Item Weight in Kg"
          name="Weight"
          register={register}
          errors={errors}
          type='number'
          className="w-full"
        />
      </div>
      </div>

      <div className="flex gap-10 mt-5">
      <div className="flex-1">
        <Textinput
          label="Item Dimension in cm (20 x 30 x 100)"
          name="dimension"
          register={register}
          errors={errors}
          type='number'
          className="w-full"
        />
      </div>

      <div className="flex-1">
        <Textinput
          label="Item Tax Rate in %"
          name="taxRate"
          register={register}
          errors={errors}
          type='number'
          className="w-full"
        />
      </div>
      </div>

      <div className="flex-1 mt-7">
      <Selectinput name="supplierId" label="Select the Supplier" register={register} className="w-full" options={supplier}/>
      </div>


      


  
    <Textareainput
      label="Item Description"
      name="description" // Changed name to avoid conflict with "title"
      register={register}
      errors={errors}
       className="w-full mt-10"
    />
      <Textareainput
      label="Item Notes"
      name="Notes" // Changed name to avoid conflict with "title"
      register={register}
      errors={errors}
       className="w-full mt-10"
    />
   <Imageinput label="Item image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader"/>
    <SubmitButton isLoading={loading} title={isUpdate?"Upadte Item":"New Item"} />
  </form>
  );
}
