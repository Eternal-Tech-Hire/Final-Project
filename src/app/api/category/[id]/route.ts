import Category from "@/db/models/Category"
import { NextResponse } from "next/server";

export async function GET(request: Request,
    { params } : { params : { id: string}}
    ) {
    const response = await Category.getById(params.id)
    return NextResponse.json({
        data: response
    }, {status : 200})
}


export async function POST (request: Request,
    { params } : { params : { id: string}}
    ) {
    try{
        const body = await request.json();
        const response = await Category.update(body, params.id)
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