"use client"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import Formheader from '../../../../../../components/dashboard/Formheader';
import Textinput from '../../../../../../components/Forminputs/Textinput';
import SubmitButton from '../../../../../../components/Forminputs/SubmitButton';
import { makeApiRequest } from "@/lib/apiRequest"; 

export default function NewUnit() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    makeApiRequest(setLoading, `${baseUrl}/api/units`, data, "Unit", reset);
  }

  return (
    <div>
      {/* Header */}
      <Formheader title="New Unit" href="/bill/inventory/units" />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <Textinput
              label="Unit Title"
              name="title"
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex-1">
            <Textinput
              label="Unit Abbreviation"
              name="abbreviation"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        
        <SubmitButton isLoading={loading} title="Unit" />
      </form>
    </div>
  );
}
