import { ALL_CACHE_KEY } from "@/common/constants/cacheKeys";
import { flush } from "@/db/redis/methods";
import { cloudfront } from "@/lib/aws";
import { revalidateTag } from "next/cache";

/* ---------------------------------------
   Reset ALL caches (Redis + Next + CF)
---------------------------------------- */
export const resetAllCache = async (): Promise<boolean> => {
  try {
    // 1️⃣ Clear Redis
    await flush();

    // 2️⃣ Revalidate Next.js cache
    revalidateTag(ALL_CACHE_KEY);

    // 3️⃣ Clear CloudFront cache (safe)
    try {
      await cloudfront.cache.clear(["/*"]);
    } catch (cloudfrontError) {
      console.warn(
        "CloudFront cache clear failed (may not be configured):",
        cloudfrontError
      );
    }

    return true;
  } catch (error) {
    console.error("Error resetting all cache:", error);
    return false;
  }
};

/* ---------------------------------------
   Reset ONLY Redis cache
---------------------------------------- */
export const resetRedisCache = async (): Promise<boolean> => {
  try {
    await flush();
    return true;
  } catch {
    return false;
  }
};

/* ---------------------------------------
   Reset ONLY Next.js cache
---------------------------------------- */
export const resetNextCache = async (): Promise<boolean> => {
  try {
    revalidateTag(ALL_CACHE_KEY);
    return true;
  } catch {
    return false;
  }
};

/* ---------------------------------------
   Reset ONLY CloudFront cache
---------------------------------------- */
export const resetCloudfrontCache = async (): Promise<boolean> => {
  try {
    await cloudfront.cache.clear(["/*"]);
    return true;
  } catch (error) {
    console.warn("CloudFront reset failed:", error);
    return false;
  }
};
