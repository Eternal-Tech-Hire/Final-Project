import Users from "@/db/models/Users"
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"

type RequestParam = {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params }: RequestParam) {

    // const userId = request.headers.get("x-user-id") as string
    // console.log("masuk dari middleware",  userId);
    
    const users = await Users.getUserById(params.id)
    return NextResponse.json({
        data: users
    }, {status : 200})
}


