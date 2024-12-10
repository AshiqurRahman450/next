import { NextResponse } from "next/server";
import db from "../../../../lib/db"
export async function GET(request, {params:{id}}){
    try {
        const item = await db.item.findUnique({
            where: {
                id
            },
            include:{ 
              warehouse:true
            }
        });
        return NextResponse.json(item);
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

export async function PUT(request, {params:{id}}){
    try {
        const {title,imageUrl} = await request.json() 
        const item = await db.item.update({
            where: {
                id
            },
            data: {
                title,imageUrl
            },
        });
        console.log(item)
        return NextResponse.json(item);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to Update a Item"
        },{
            status:500
        })
    }
}