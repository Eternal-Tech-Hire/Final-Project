import Events from "@/db/models/Events"
import { NextResponse } from "next/server";

export async function GET(request: Request,
    { params } : { params : { id: string}}
    ) {
    const events = await Events.getById(params.id)
    return NextResponse.json({
        data: events
    }, {status : 200})
}

export async function POST (request: Request,
    { params } : { params : { id: string}}
    ) {
    try{
        const body = await request.json();
        const events = await Events.update(body, params.id)
        return NextResponse.json({
            data: events
        }, {status : 200})
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        },{
            status: 500
        })
    }
}