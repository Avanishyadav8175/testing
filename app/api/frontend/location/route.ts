// next config
export const dynamic = "force-dynamic";

// libraries
import { get as getFromRedis, set as setToRedis } from "@/db/redis/methods";

// constants
import { LOCATION_CACHE_KEY } from "@/common/constants/cacheKeys";

// controllers
import { getCities } from "./controllers";

// constants
import {
  notFoundErrorResponse,
  serverErrorResponse
} from "@/common/utils/api/error";

// utils
import { Response } from "@/common/utils/api/next";
import { successData } from "@/common/utils/api/data";

// types
import { type APIResponseType } from "@/common/types/apiTypes";
import { type CityDocument } from "@/common/types/documentation/presets/city";
import { type NextRequest } from "next/server";

export const GET = async (
  req: NextRequest
): Promise<APIResponseType<CityDocument[]>> => {
  try {
    const cachedDocuments = await getFromRedis<CityDocument[]>({
      key: LOCATION_CACHE_KEY
    });

    if (!cachedDocuments) {
      const documents = await getCities();

      if (!documents) {
        return Response<CityDocument[]>(notFoundErrorResponse);
      }

      await setToRedis({
        key: LOCATION_CACHE_KEY,
        value: documents
      });

      return Response(successData(documents));
    } else {
      return Response(successData(cachedDocuments));
    }
  } catch (error: any) {
    console.error("Error", error);

    return Response<null>(serverErrorResponse);
  }
};
