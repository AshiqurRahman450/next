import { NextResponse } from "next/server";
import db from "../../../../lib/db"
export async function GET(request, {params:{id}}){
    try {
        const brands = await db.brand.findUnique({
            where: {
                id
            },
        });
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

export async function PUT(request, {params:{id}}){
    try {
        const {title} = await request.json()
        const brands = await db.brand.update({
            where: {
                id
            },
            data: {
                title
            },
        });
        console.log(brands)
        return NextResponse.json(brands);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Failed to Update a Brand"
        },{
            status:500
        })
    }
}