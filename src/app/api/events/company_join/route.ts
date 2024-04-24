import { NextResponse } from "next/server";
import Events from "@/db/models/Events"

export const POST = async(request: Request) =>{
    try{
        const { _id, idCompany}: { _id: string, idCompany: string} = await request.json()
        const response = await Events.addCompanyJoin(_id, idCompany);
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