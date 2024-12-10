"use client"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import Formheader from '../../../../../../components/dashboard/Formheader';
import Textinput from '../../../../../../components/Forminputs/Textinput';
import SubmitButton from '../../../../../../components/Forminputs/SubmitButton';
import Textareainput from '../../../../../../components/Forminputs/Textareainput';
import { makeApiRequest, makePutRequest  } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

export default function NewCategories({initialData={},isUpdate=false}) {
  const router = useRouter
  const { register, handleSubmit, reset, formState: { errors } } = useForm({defaultValues:initialData});
  const [loading, setLoading] = useState(false);
  function redirect(){
    router.push("bill/inventory/Categories")
  }

   async function onSubmit(data) {
    console.log(data)
    setLoading(true)
    const baseUrl = "http://localhost:3000"
    if(isUpdate){
      //Update Request
      makePutRequest(setLoading, `${baseUrl}/api/categories/${initialData.id}`, data, "Category",redirect, reset);
    }else{
      makeApiRequest(setLoading, `${baseUrl}/api/categories`, data, "Category", reset);
    }
    
  }

  return (
    <div>
      {/* Header */}
      <Formheader title={isUpdate?"Update Category":"New Category"} href="/bill/inventory" />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <Textinput
          label="Category Title"
          name="title"
          register={register}
          errors={errors}
        />
        <Textareainput
          label="Description"
          name="description" // Changed name to avoid conflict with "title"
          register={register}
          errors={errors}
        />
        <SubmitButton isLoading={loading} title={isUpdate?"Update Category":"New Category"} />
      </form>
    </div>
  );
}
