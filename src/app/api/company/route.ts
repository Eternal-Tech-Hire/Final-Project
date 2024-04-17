import { NextResponse } from "next/server";
import Company from "@/db/models/Company"

export const POST = async (request: Request) => {
    try{
        const body = await request.json();
        const response = await Company.store(body)
        // console.error(events, "Error dari api/company/route.ts <><><><><><>");
        return NextResponse.json({
            data: response
        }, {status : 200})
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        },{
            status: 500
        })
    }
}

export const GET = async (request: Request) => {
    const response = await Company.getAll()
    return NextResponse.json({
        data: response
    }, {status : 200})
}

export const DELETE = async(request: Request) =>{
    try{
        const { _id}: { _id: string} = await request.json()
        const response = await Company.removeById(_id);
        return NextResponse.json({
            data: response
        },{
            status: 200
        });
    }catch(error){
        return NextResponse.json({
            message: "Internal Server Error"
        },{
            status: 500
        })
    }
}
