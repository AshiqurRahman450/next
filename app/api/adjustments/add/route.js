import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function POST(request){
    try{
        const {addStockQty,warehouseId,notes,referenceNumber,itemId,supplierId} = await request.json();

        // Get the Item
        const itemToUpdate = await db.item.findUnique({
            where:{
                id:itemId 
            }
        })
        // console.log(itemToUpdate)
        // Current Item Quantity
        const currentItemQty =itemToUpdate.quantity;
        const newQty = parseInt(currentItemQty) + parseInt(addStockQty)
        console.log(newQty)

         // // Modify  the Item to the New Qty 
        const Updateditem= await db.item.update({
            where: {
                id :itemId
            },
            data: {
                quantity:newQty,
            },
        });
        // Get the Warehouse
       const warehouse = await db.warehouse.findUnique({
        where:{
            id:warehouseId
        }
       })
       //Current stock of the warehouse
       const currentWarehouseStock = warehouse.stockQty
       const newStockQty = parseInt(currentWarehouseStock) + parseInt(addStockQty)
       //Update Stock on the warehouse
       const updatedWarehouse = await db.warehouse.update({
        where:{
            id:warehouseId
        },
        data:{
            stockQty:newStockQty
        }
       })

       

        const adjustment= await db.addStockAdjustment.create({
            data:{
                addStockQty: parseInt(addStockQty),itemId,warehouseId,notes,referenceNumber,supplierId
                
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
            include: {
                supplier: true,  // Returns all fields for all categories
                
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


export async function DELETE(request){
    try {
     const id=request.nextUrl.searchParams.get("id")
     console.log(id)
     const deleteAS= await db.addStockAdjustment.delete({
         where: {
              id
         },
     })
     console.log(deleteAS)
     return NextResponse.json(deleteAS)
    } catch (error) {
     console.log(error)
     return NextResponse.json({
         error,
         message:"Failed to Delete Add Stock"
     },{
         status:500
     })
     
    }
 }