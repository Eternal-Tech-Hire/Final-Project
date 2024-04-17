import { NextResponse } from "next/server";
import Ticket from "@/db/models/Ticket"

export const GET = async (request: Request) => {
    const ticket = await Ticket.getAll()
    return NextResponse.json({
        data: ticket
    }, {status : 200})
}

export const POST = async (request: Request) => {
    try{
        const userId = request.headers.get("x-user-id");
        if (!userId) {
            return NextResponse.json({
                message: 'User ID not found'
            }, {
                status : 404
            })
        }
    
        const body = await request.json();
        const { eventId } = body;
        const ticket = await Ticket.addTicket(body, userId, eventId)
        // console.error(ticket, "Error dari api/ticket/route.ts <><><><><><>");
        return NextResponse.json({
            data: ticket
        }, {status : 200})
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        },{
            status: 500
        })
    }
}

export const DELETE = async(request: Request) =>{
    try{
        const { _id}: { _id: string} = await request.json()
        const response = await Ticket.removeTicketById(_id);
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
