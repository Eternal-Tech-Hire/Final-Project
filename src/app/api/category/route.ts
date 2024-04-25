import { NextResponse } from "next/server";
import Category from "@/db/models/Category"

export const POST = async (request: Request) => {
    try{
        const body = await request.json();
        const response = await Category.store(body)
        // console.error(events, "Error dari api/category.route.ts <><><>><><><>");
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
    const response = await Category.getAll()
    return NextResponse.json({
        data: response
    }, {status : 200})
}

export const DELETE = async(request: Request) =>{
    try{
        const { _id}: { _id: string} = await request.json()
        const response = await Category.removeById(_id);
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
