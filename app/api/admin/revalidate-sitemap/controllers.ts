// libraries
import { cloudfront } from "@/lib/aws";
import { del as clearRedis } from "@/db/redis/methods";

// types
import { type RevalidateImageCache } from "@/common/types/revalidateCache";

export const clearCache = async ({
  redisKeys,
  cloudfrontPath
}: {
  redisKeys: string[];
  cloudfrontPath: string;
}): Promise<RevalidateImageCache> => {
  try {
    // ✅ Redis clear
    const isRedisCleared = await clearRedis({ keys: redisKeys });

    // ✅ CloudFront clear (NEW SIGNATURE)
    await cloudfront.cache.clear([cloudfrontPath]);

    return {
      redis: isRedisCleared,
      cloudfront: true
    };
  } catch (error) {
    console.error("Clear cache failed:", error);

    return {
      redis: false,
      cloudfront: false
    };
  }
};
