// config
import { GENERATE_SITEMAP } from "@/config/sitemap";

// constants
import { DOMAIN } from "@/common/constants/environmentVariables";

// requests
import { fetchSitemapBlogs } from "@/request/sitemap/blogs";

// types
import { type Sitemap, type SitemapData } from "@/common/types/sitemap";

export default async function Sitemap(): Promise<Sitemap> {
  if (GENERATE_SITEMAP) {
    const response = await fetchSitemapBlogs();

    const sitemapBlogs =
      response && response?.data ? (response.data as SitemapData[]) : [];
    // [] as SitemapData[];

    const sitemap: Sitemap = sitemapBlogs.map(({ slug, updatedAt }) => ({
      url: `${DOMAIN}/${slug}`,
      changeFrequency: "monthly",
      lastModified: updatedAt,
      priority: 0.5
    }));

    return sitemap;
  }

  return [];
}
