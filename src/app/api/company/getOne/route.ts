import Company from "@/db/models/Company"
import { NextResponse } from "next/server";

export async function GET(request: Request,
    { params } : { params : { id: string}}
    ) {
        // console.log("masuk get getOne");
        
    const userId = request.headers.get("x-user-id")
    // console.log(userId);
    
    if (!userId) {
        return NextResponse.json({
            message: 'User ID not found'
        }, {
            status : 404
        })
    }

    const response = await Company.getById(userId)
    // console.log(response, " di get");
    
    return NextResponse.json({
        data: response
    }, {status : 200})
}