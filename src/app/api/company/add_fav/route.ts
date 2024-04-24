import Company from "@/db/models/Company"
import { NextResponse } from "next/server";

export async function POST (request: Request) {
    try{
        
        const companyId = request.headers.get("x-user-id");
        console.log(companyId, "companyid");
        
        if (!companyId) {
            return NextResponse.json({
                message: 'User ID Not Found'
            }, {
                status : 404
            })
        }

        const body = await request.json();
        console.log(body);
        
        const response = await Company.updateFavEvent(companyId, body.seekerId, body.url)
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