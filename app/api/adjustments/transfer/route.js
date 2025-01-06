import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function POST(request) {
    try {
        const {
            transferStockQty,
            itemId,
            givingWarehouseId,
            receivingWarehouseId,
            notes,
            referenceNumber
        } = await request.json();

        // The Giving Warehouse
        const givingWarehouse = await db.warehouse.findUnique({
            where: {
                id: givingWarehouseId
            }
        });

        // Get the Current Stock
        const currentGivingWarehouseStock = givingWarehouse.stockQty;

        if(parseInt(currentGivingWarehouseStock)> parseInt(transferStockQty)){
            const newStockForGivingWarehouse = parseInt(currentGivingWarehouseStock) - parseInt(transferStockQty);

            // Update Stock
            const updatedGivingWarehouse = await db.warehouse.update({
                where: {
                    id: givingWarehouseId
                },
                data: {
                    stockQty: newStockForGivingWarehouse
                }
            });
    
            // Get the Receiving Warehouse
            const receivingWarehouse = await db.warehouse.findUnique({
                where: {
                    id: receivingWarehouseId
                }
            });
    
            // Get the Current Stock
            const currentReceivingWarehouseStock = receivingWarehouse.stockQty;
    
            const newStockForReceivingWarehouse = parseInt(currentReceivingWarehouseStock) + parseInt(transferStockQty);
    
            // Update Stock
            const updatedReceivingWarehouse = await db.warehouse.update({
                where: {
                    id: receivingWarehouseId
                },
                data: {
                    stockQty: newStockForReceivingWarehouse
                }
            });
    
            // Create Transfer Stock Adjustment Record
            const adjustment = await db.transferStockAdjustment.create({
                data: {
                    transferStockQty: parseInt(transferStockQty),
                    itemId,
                    givingWarehouseId,
                    notes,
                    receivingWarehouseId,
                    referenceNumber
                }
            });
    
            console.log(adjustment);
            return NextResponse.json(adjustment);
        }else{
            return NextResponse.json({
                data:null,
                message:"Giving Warehouse has No enough Stock"
            },{status:409})
        }
        }

         catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create an adjustment"
            },
            {
                status: 500
            }
        );
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

export async function DELETE(request){
    try {
     const id=request.nextUrl.searchParams.get("id")
     console.log(id)
     const deleteTS= await db.transferStockAdjustment.delete({
         where: {
              id
         },
     })
     console.log(deleteTS)
     return NextResponse.json(deleteTS)
    } catch (error) {
     console.log(error)
     return NextResponse.json({
         error,
         message:"Failed to Delete Transfer Stock"
     },{
         status:500
     })
     
    }
 }