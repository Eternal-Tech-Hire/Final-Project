import Users from "@/db/models/Users"
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"

export async function GET(request: Request) {
    const users = await Users.findAll()
    return NextResponse.json({
        data: users
    }, {status : 200})
}
