import Company from "@/db/models/Company"
import { NextResponse } from "next/server";

export async function POST (request: Request) {
    try{
        // console.log("masuk post api");
        
        const companyId = request.headers.get("x-user-id");
        // console.log(companyId, "companyid");
        
        if (!companyId) {
            return NextResponse.json({
                message: 'User ID not found'
            }, {
                status : 404
            })
        }

        const body = await request.json();
        // console.log(body, "<< BODY");
        
        const response = await Company.updateFavEvent(companyId, body.userId, body.url)
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