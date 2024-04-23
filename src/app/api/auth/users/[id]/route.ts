import Users from "@/db/models/Users"
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"

type RequestParam = {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params }: RequestParam) {

    const users = await Users.getUserById(params.id)
    return NextResponse.json({
        data: users
    }, {status : 200})
}


export async function POST (request: Request,  { params }: RequestParam){
    try{
        const body = await request.json();
        console.log(body);

        const response = await Users.update(params.id, body)            
        return NextResponse.json({
            data: response
        }, {status : 200})

    } catch (error) {
        return NextResponse.json({
            message: ""
        },{
            status: 500
        })
    }
}