import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const {transferStockQty,itemId,ReceivingBranchId,type,notes} = await request.json();
       

        const adjustment= {transferStockQty,ReceivingBranchId,type,notes,itemId};
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