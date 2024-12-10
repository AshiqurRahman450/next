"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Formheader from "../../../../../../components/dashboard/Formheader";
import Textinput from "../../../../../../components/Forminputs/textinput";
import SubmitButton from "../../../../../../components/Forminputs/SubmitButton";
import Textareainput from "../../../../../../components/Forminputs/Textareainput";
import Selectinput from "../../../../../../components/Forminputs/Selectinput";
import { makeApiRequest, makePutRequest  } from "@/lib/apiRequest"; // Import from utility file
import { useRouter } from "next/navigation";

export default function NewSupplier({initialData={},isUpdate=false}) {
  const router = useRouter()
  const selectOptions = [
    { label: "Main", value: "main" },
    { label: "Branch", value: "branch" },
  ];

  const { register, handleSubmit, reset, formState: { errors } } = useForm({defaultValues:initialData});
  const [loading, setLoading] = useState(false);
  function redirect(){
    router.push("/bill/inventory/supplier")
  }

  async function onSubmit(data) {
    console.log(data);
    const baseUrl = "http://localhost:3000";
    if(isUpdate){
      //Update Request
      makePutRequest(setLoading, `${baseUrl}/api/supplier/${initialData.id}`, data, "Supplier",redirect, reset);
    }else{
      makeApiRequest(setLoading, `${baseUrl}/api/supplier`, data, "Supplier", reset);
    }
   
  }

  return (
    <div>
      {/* Header */}
      <Formheader title={isUpdate?"Update Supplier":"New Supplier"} href="/bill/inventory/supplier" />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <Textinput label="Supplier Name" name="title" register={register} errors={errors} />
          </div>
          <div className="flex-1">
            <Textinput label="Supplier Phone Number" name="phone" register={register} errors={errors} />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex-1">
            <Textinput label="Supplier Email" name="email" type="email" register={register} errors={errors} />
          </div>
          <div className="flex-1">
            <Textinput label="Supplier Address" name="address" register={register} errors={errors} />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex-1">
            <Textinput label="Supplier Contact Person" name="contactPerson" register={register} errors={errors} />
          </div>
          <div className="flex-1">
            <Textinput label="Supplier Code" name="supplierCode" register={register} errors={errors} />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex-1">
            <Textinput label="Supplier TIN" name="taxID" register={register} errors={errors} />
          </div>
        </div>

        <Textareainput label="Supplier Payments Terms" name="paymentTerms" register={register} errors={errors} className="w-full mt-6" />
        <Textareainput label="Notes" name="notes" register={register} errors={errors} className="w-full mt-6" />
        <SubmitButton isLoading={loading} title={isUpdate?"Update Supplier":"New Supplier"} />
      </form>
    </div>
  );
}
