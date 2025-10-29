// config
import { GENERATE_SITEMAP } from "@/config/sitemap";

// constants
import { DOMAIN } from "@/common/constants/environmentVariables";

// requests
import { fetchSitemapProducts } from "@/request/sitemap/products";

// types
import { type Sitemap, type SitemapData } from "@/common/types/sitemap";

export default async function Sitemap(): Promise<Sitemap> {
  if (GENERATE_SITEMAP) {
    const response = await fetchSitemapProducts();

    const sitemapProducts =
      response && response?.data ? (response.data as SitemapData[]) : [];
    // [] as SitemapData[];

    const sitemaps: Sitemap = sitemapProducts.map(({ slug, updatedAt }) => ({
      url: `${DOMAIN}/${slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: 1
    }));

    return sitemaps;
  }

  return [];
}
