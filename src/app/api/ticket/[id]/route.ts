import Ticket from "@/db/models/Ticket"
import { NextResponse } from "next/server";

export async function GET(request: Request,
    { params } : { params : { id: string}}
    ) {
    const tickets = await Ticket.getTicketById(params.id)
    return NextResponse.json({
        data: tickets
    }, {status : 200})
}

export async function POST (request: Request,
    { params } : { params : { id: string}}
    ) {
    try{
        const body = await request.json();
        const ticket = await Ticket.updateTicket(body, params.id)
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