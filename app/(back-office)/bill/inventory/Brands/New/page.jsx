"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Formheader from '../../../../../../components/dashboard/Formheader';
import Textinput from '../../../../../../components/Forminputs/textinput';
import SubmitButton from '../../../../../../components/Forminputs/SubmitButton';
import { makeApiRequest, makePutRequest } from '@/lib/apiRequest';

export default function NewBrand({ initialData = {}, isUpdate = false }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialData });
  const [loading, setLoading] = useState(false);

  function redirect() {
    router.push('/bill/inventory/Brands');
  }

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = 'http://localhost:3000';
    if (isUpdate) {
      // Update Request
      makePutRequest(setLoading, `${baseUrl}/api/brands/${initialData.id}`, data, 'Brand', redirect, reset);
    } else {
      // Create Request
      makeApiRequest(setLoading, `${baseUrl}/api/brands`, data, 'Brand', reset);
    }
  }

  return (
    <div>
      {/* Header */}
      <Formheader title={isUpdate ? 'Update Brand' : 'New Brand'} href="/bill/inventory" />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <Textinput
          label="Brand Title"
          name="title"
          register={register}
          errors={errors}
          classNames="w-full"
        />
        <SubmitButton isLoading={loading} title={isUpdate ? 'Update Brand' : 'New Brand'} />
      </form>
    </div>
  );
}
