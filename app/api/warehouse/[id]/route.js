import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request, { params: { id } }) {
  try {
    const warehouse = await db.warehouse.findUnique({
      where: { id },
    });
    return NextResponse.json(warehouse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to Fetch a Warehouse" },
      { status: 500 }
    );
  }
}


export async function PUT(request, {params:{id}}){
    try {
        const {title,location,warehouseType,description} = await request.json()
        const warehouse = await db.warehouse.update({
            where: {
                id
            },
            data: {
                title,location,warehouseType,description
            },
        });
        console.log(warehouse)
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to Update a Warehouse"
        },{
            status:500
        })
    }
}