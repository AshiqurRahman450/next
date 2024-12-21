import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {
      const { title, phone, email, address, contactPerson, supplierCode, paymentTerms, taxID, notes } = await request.json();
      const supplier = await db.supplier.create({
        data: { title, phone, email, address, contactPerson, supplierCode, paymentTerms, taxID, notes }
      });
      console.log(supplier);
      return NextResponse.json(supplier);
    } catch (error) {
      console.error("Database error:", error);  // Improved error logging
      return NextResponse.json({
        error: error.message, // Provide a more detailed error message
        message: "Failed to create a Supplier",
      }, { status: 500 });
    }
  }
  

  export async function GET(request){
    try {
        const supplier = await db.supplier.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Supplier
            },
        })
        return NextResponse.json(supplier);
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to Fetch a Supplier"
        },{
            status:500
        })
    }
}

export async function DELETE(request){
  try {
   const id=request.nextUrl.searchParams.get("id")
   console.log(id)
   const deletesupplier= await db.supplier.delete({
       where: {
            id
       },
   })
   console.log(deletesupplier)
   return NextResponse.json(deletesupplier)
  } catch (error) {
   console.log(error)
   return NextResponse.json({
       error,
       message:"Failed to Delete Supplier"
   },{
       status:500
   })
   
  }
}