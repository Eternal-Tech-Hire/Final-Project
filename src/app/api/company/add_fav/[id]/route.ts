import Company from "@/db/models/Company"
import { NextResponse } from "next/server";

export async function POST (request: Request,
    { params } : { params : { id: string}}
    ) {
    try{
        const body = await request.json();
        const response = await Company.updateFavEvent(params.id, body.id_seeker, body.url_cv)
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