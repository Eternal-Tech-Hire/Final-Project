import Ticket from "@/db/models/Ticket"
export const dynamic = "force-dynamic"
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    const userId = request.headers.get("x-user-id");
    if (!userId) {
        return NextResponse.json({
            message: 'User ID Not Found'
        }, {
            status : 404
        })
    }
    const ticketById = await Ticket.getTicketByUserId(userId)
    return NextResponse.json({
        data: ticketById
    }, {status : 200})
}
