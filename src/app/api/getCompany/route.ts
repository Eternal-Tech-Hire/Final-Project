import { NextRequest, NextResponse } from "next/server";
import Company from "@/db/models/Company"
import { db } from "@/db/config/mongodb";

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