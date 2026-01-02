import { CloudFrontClient, CreateInvalidationCommand } from "@aws-sdk/client-cloudfront";

const region = process.env.AWS_REGION!;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID!;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!;
const distributionId = process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID;

const cloudFrontClient = new CloudFrontClient({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
});

export const invalidateCloudFrontCache = async (paths: string[]) => {
  if (!distributionId) {
    console.warn("CloudFront distribution ID not configured");
    return;
  }

  try {
    const command = new CreateInvalidationCommand({
      DistributionId: distributionId,
      InvalidationBatch: {
        Paths: {
          Quantity: paths.length,
          Items: paths
        },
        CallerReference: `invalidation-${Date.now()}`
      }
    });

    const response = await cloudFrontClient.send(command);
    console.log("Cache invalidation created:", response.Invalidation?.Id);
    return response;
  } catch (error) {
    console.error("Failed to invalidate CloudFront cache:", error);
    throw error;
  }
};

export const invalidateImageCache = async (imagePaths: string[]) => {
  const pathsToInvalidate = imagePaths.map(path => `/${path}`);
  return invalidateCloudFrontCache(pathsToInvalidate);
};