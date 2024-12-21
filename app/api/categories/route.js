import { Prisma } from '@prisma/client';
import db from '../../../lib/db'
import { NextResponse } from "next/server";


export async function POST(request){
    try{
        const {title,description} = await request.json();
       

        const category= await db.category.create({
            data:{
                title,
                description,
            }
        });
        console.log(category)
        return NextResponse.json(category);

    }catch (error){
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to create a category"
        },{
            status:500
        })
    }
}

export async function GET(request){
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Category
            },
        })
        return NextResponse.json(categories);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to Fetch a Category"
        },{
            status:500
        })
    }
}

export async function DELETE(request){
   try {
    const id=request.nextUrl.searchParams.get("id")
    console.log(id)
    const deletecategory= await db.category.delete({
        where: {
             id
        },
    })
    console.log(deletecategory)
    return NextResponse.json(deletecategory)
   } catch (error) {
    console.log(error)
    return NextResponse.json({
        error,
        message:"Failed to Delete Category"
    },{
        status:500
    })
    
   }
}