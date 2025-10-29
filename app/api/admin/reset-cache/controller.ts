import { cloudfront } from "@/lib/aws";
import { revalidateTag } from "next/cache";
import { flush } from "@/db/redis/methods";
import { ALL_CACHE_KEY } from "@/common/constants/cacheKeys";

export const resetAllCache = async (): Promise<boolean> => {
  try {
    await flush();
   // revalidateTag(ALL_CACHE_KEY);
   // await cloudfront.cache.clear({ path: "/*" });
    return true;
  }
  catch {
    return false;
  }
};

export const resetRedisCache = async (): Promise<boolean> => {
  try {
    const isRedisReset = await flush();
    return isRedisReset;
  }
  catch {
    return false;
  }
};

export const resetNextCache = async (): Promise<boolean> => {
  try {
    revalidateTag(ALL_CACHE_KEY);
    return true;
  }
  catch {
    return false;
  }
};

export const resetCloudfrontCache = async (): Promise<boolean> => {
  try {
    const isCloudfrontReset = await cloudfront.cache.clear({ path: "/*" });
    return isCloudfrontReset;
  }
  catch {
    return false;
  }
};
