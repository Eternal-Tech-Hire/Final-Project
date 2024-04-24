import { NextRequest, NextResponse } from "next/server";
import Company from "@/db/models/Company"
import { db } from "@/db/config/mongodb";

export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        const response = await Company.store(body)
        // console.error(events, "Error dari api/company/route.ts <><><><><><>");
        return NextResponse.json({
            data: response
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, {
            status: 500
        })
    }
}

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams.get("search");
    const search = searchParams || "";
    let response;

    if (search) {
        // console.log("masuk?");
        // console.log(search);
        response = await db
            .collection("Company")
            .find({
                name: {
                    $regex: search,
                    $options: "i",
                },
            })
            .toArray();

        console.log(response);
    } else {
        //   console.log("masuk tanpa search");
        response = await Company.getAll();
    }
    // const response = await Company.getAll()
    return NextResponse.json({
        data: response
    }, { status: 200 })
}

export const DELETE = async (request: Request) => {
    try {
        const { _id }: { _id: string } = await request.json()
        const response = await Company.removeById(_id);
        return NextResponse.json({
            data: response
        }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, {
            status: 500
        })
    }
}