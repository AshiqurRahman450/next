import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function POST(request){
    try{
        const {transferStockQty,itemId,givingWarehouseId,receivingWarehouseId,notes,referenceNumber} = await request.json();
       

        const adjustment= await db.transferStockAdjustment.create({
            data:{
                transferStockQty: parseInt(transferStockQty),itemId,givingWarehouseId,notes,receivingWarehouseId,referenceNumber
                
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
        const transferadjustments = await db.transferStockAdjustment.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Item
            },
        })
        return NextResponse.json(transferadjustments);
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