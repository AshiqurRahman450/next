import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function POST(request){
    try{
        const {addStockQty,warehouseId,notes,referenceNumber,itemId} = await request.json();
       

        const adjustment= await db.addStockAdjustment.create({
            data:{
                addStockQty: parseInt(addStockQty),itemId,warehouseId,notes,referenceNumber
                
            }
        });
        console.log(adjustment)
        return NextResponse.json(adjustment);

    }catch (error){
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to create a adjustment"
        },{
            status:500
        })
    }
}


export async function GET(request){
    try {
        const adjustments = await db.addStockAdjustment.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Item
            },
        })
        return NextResponse.json(adjustments);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to Fetch a adjustments"
        },{
            status:500
        })
    }
}