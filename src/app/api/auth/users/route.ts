import Users from "@/db/models/Users"
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"

export async function GET(request: Request) {

    const userId = request.headers.get("x-user-id") as string
    console.log("userid",  userId);
    
    const users = await Users.getUserById(userId)
    return NextResponse.json({
        data: users
    }, {status : 200})
}

// export async function PATCH(request: Request) {
//     const users = await Users.findAll()
//     return NextResponse.json({
//         data: users
//     }, {status : 200})
// }