import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request){
    try{
        const {title} = await request.json();
       

        const brand= await db.brand.create({
            data:{
                title,
                
            }
        });
        console.log(brand)
        return NextResponse.json(brand);

    }catch (error){
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to create a brand"
        },{
            status:500
        })
    }
}


export async function GET(request){
    try {
        const brands = await db.brand.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Brands
            },
        })
        return NextResponse.json(brands);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to Fetch a Brand"
        },{
            status:500
        })
    }
}

export async function DELETE(request){
    try {
     const id=request.nextUrl.searchParams.get("id")
     console.log(id)
     const deletebrand= await db.brand.delete({
         where: {
              id
         },
     })
     console.log(deletebrand)
     return NextResponse.json(deletebrand)
    } catch (error) {
     console.log(error)
     return NextResponse.json({
         error,
         message:"Failed to Delete Brand"
     },{
         status:500
     })
     
    }
 }