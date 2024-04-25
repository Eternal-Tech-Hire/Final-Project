import { NextResponse } from "next/server";
import Events from "@/db/models/Events"

export const POST = async (request: Request) => {
    try{
        const body = await request.json();
        const events = await Events.store(body)
        // console.error(events, "Error dari api/events/route.ts <><><><><><>");
        
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

export const GET = async (request: Request) => {
    const events = await Events.getAll()
    return NextResponse.json({
        data: events
    }, {status : 200})
}

export const DELETE = async(request: Request) =>{
    try{
        const { _id}: { _id: string} = await request.json()
        const response = await Events.removeById(_id);
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
