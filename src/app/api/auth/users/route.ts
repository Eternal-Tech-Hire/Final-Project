import Users from "@/db/models/Users"
import Company from "@/db/models/Company"
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"

export async function GET(request: Request) {

    const userId = request.headers.get("x-user-id") as string
    const userRole = request.headers.get("x-user-role") as string
    if(userRole == "company"){
        const users = await Company.getById(userId)
        return NextResponse.json({
            data: users
        }, {status : 200})
    }

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