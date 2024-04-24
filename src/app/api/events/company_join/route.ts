import { NextResponse } from "next/server";
import Events from "@/db/models/Events";

export const POST = async (request: Request) => {
  try {
    const idCompany = request.headers.get("x-user-id");
    // console.log(idCompany, "<<<<>>");
    
    if (!idCompany) {
      return NextResponse.json(
        {
          message: "User ID not found",
        },
        {
          status: 404,
        }
      );
    }

    const { _id }: { _id: string } = await request.json();
    const response = await Events.addCompanyJoin(_id, idCompany);
    return NextResponse.json(
      {
        data: response,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
};
