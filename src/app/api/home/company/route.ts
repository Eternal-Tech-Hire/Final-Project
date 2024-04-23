import { NextRequest, NextResponse } from "next/server";
import Company from "@/db/models/Company";
import { db } from "@/db/config/mongodb";

export const GET = async (request: NextRequest) => {
  
  const response = await Company.findFeaturedCompany();

  return NextResponse.json(
    {
      data: response,
    },
    { status: 200 }
  );
};
