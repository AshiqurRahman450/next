import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request){
    try{
        const {title,location,type,description} = await request.json();
       

        const warehouse= await db.warehouse.create({
            data:{
                title,
                description,
                location,
                warehouseType:type,
            }
        });
        console.log(warehouse)
        return NextResponse.json(warehouse);

    }catch (error){
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to create a Warehouse"
        },{
            status:500
        })
    }
}


export async function GET(request){
    try {
        const warehouse = await db.warehouse.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            },
        })
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to Fetch a Warehouse"
        },{
            status:500
        })
    }
}