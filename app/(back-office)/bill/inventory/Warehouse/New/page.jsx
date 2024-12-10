"use client";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Formheader from "../../../../../../components/dashboard/Formheader";
import Textinput from "../../../../../../components/Forminputs/Textinput";
import SubmitButton from "../../../../../../components/Forminputs/SubmitButton";
import Textareainput from "../../../../../../components/Forminputs/Textareainput";
import Selectinput from "../../../../../../components/Forminputs/Selectinput";
import { makeApiRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

export default function NewWarehouse({ initialData, isUpdate = false }) {
  const router = useRouter();
  console.log(initialData)
  const selectOptions = [
    { title: "Main", id: "main" },
    { title: "Branch", id: "branch" },
  ];

  // React Hook Form Setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  const [loading, setLoading] = useState(false);

  // Reset form if initialData changes
  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  // Redirect Function
  function redirect() {
    router.push("/bill/inventory/warehouse");
  }

  // Handle Form Submission
  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    if (isUpdate) {
      // Update Request
      makePutRequest(
        setLoading,
        `${baseUrl}/api/warehouse/${initialData.id}`,
        data,
        "Warehouse",
        redirect,
        reset
      );
    } else {
      // Create Request
      makeApiRequest(
        setLoading,
        `${baseUrl}/api/warehouse`,
        data,
        "Warehouse",
        reset
      );
    }
  }

  return (
    <div>
      {/* Header */}
      <Formheader
        title={isUpdate ? "Update Warehouse" : "New Warehouse"}
        href="/bill/inventory/warehouse"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <Selectinput
          name="type"
          label="Select the Warehouse Type"
          register={register}
          className="w-full"
          options={selectOptions}
          errors={errors}
        />
        <div className="flex gap-4">
          <div className="flex-1">
            <Textinput
              label="Warehouse Title"
              name="title"
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex-1">
            <Textinput
              label="Warehouse Location"
              name="location"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <Textareainput
          label="Description"
          name="description"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Update Warehouse" : "New Warehouse"}
        />
      </form>
    </div>
  );
}
