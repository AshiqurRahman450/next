import { NextResponse } from "next/server";
import db from '../../../lib/db'
import Categories from "@/app/(back-office)/bill/inventory/Categories/page";
import Suppliers from "@/app/(back-office)/bill/inventory/supplier/page";

export async function POST(request){
    try{
        const itemData = await request.json();
       // Get the Warehouse
       const warehouse = await db.warehouse.findUnique({
        where:{
            id:itemData.WarehouseId
        }
       })
       //Current stock of the warehouse
       const currentWarehouseStock = warehouse.stockQty
       const newStockQty = parseInt(currentWarehouseStock) + parseInt(itemData.quantity)
       //Update Stock on the warehouse
       const updatedWarehouse = await db.warehouse.update({
        where:{
            id:itemData.WarehouseId
        },
        data:{
            stockQty:newStockQty
        }
       })


        const item= await db.item.create({
            data:{
                title:itemData.title,
                categoryId:itemData.CategoryId,
                sku:itemData.sku,
                barcode:itemData.barcode,
                quantity:parseInt(itemData.quantity),
                unitId:itemData.unitId,
                buyingPrice:parseInt(itemData.buyingPrice),
                brandId:itemData.brandId,
                sellingPrice:parseInt(itemData.sellingPrice),
                reorderPoint:parseInt(itemData.ReorderPoint),
                weight:parseFloat(itemData.Weight),
                warehouseId:itemData.WarehouseId,
                dimensions:itemData.dimension,
                taxRate:parseFloat(itemData.taxRate),
                description:itemData.description,
                notes:itemData.Notes,
                supplierId:itemData.supplierId,
                imageUrl:itemData.imageUrl,
            }
        }) ;
        console.log(item)
        return NextResponse.json(item);

    }catch (error){
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to create a item"
        },{
            status:500
        })
    }
}


export async function GET(request){
    try {
        const items = await db.item.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Item
            },
            include: {
                category: true,  // Returns all fields for all categories
                warehouse: true, // Returns all Profile fields
            },
        })
        return NextResponse.json(items);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to Fetch a Item"
        },{
            status:500
        })
    }
}


export async function DELETE(request){
    try {
     const id=request.nextUrl.searchParams.get("id")
     console.log(id)
     const deleteitem= await db.item.delete({
         where: {
              id
         },
     })
     console.log(deleteitem)
     return NextResponse.json(deleteitem)
    } catch (error) {
     console.log(error)
     return NextResponse.json({
         error,
         message:"Failed to Delete Item"
     },{
         status:500
     })
     
    }
 }