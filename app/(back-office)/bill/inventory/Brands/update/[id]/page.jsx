import React from 'react';
import NewBrand from '../../New/page'; // Ensure the import path is correct
import { getData } from '@/lib/getData';

// Fetch data on the server side using getServerSideProps
export async function getServerSideProps(context) {
  const { id } = context.params;
  const data = await getData(`brands/${id}`);
  return {
    props: {
      initialData: data,
      isUpdate: true,
    },
  };
}

export default function Update({ initialData, isUpdate }) {
  return (
    <NewBrand initialData={initialData} isUpdate={isUpdate} />
  );
}
