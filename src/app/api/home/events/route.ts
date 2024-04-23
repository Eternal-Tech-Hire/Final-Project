import { NextRequest, NextResponse } from "next/server";
import Company from "@/db/models/Company";
import { db } from "@/db/config/mongodb";
import Events from "@/db/models/Events";

export const GET = async (request: NextRequest) => {
  
  const response = await Events.findFeaturedEvents();

  return NextResponse.json(
    {
      data: response,
    },
    { status: 200 }
  );
};
