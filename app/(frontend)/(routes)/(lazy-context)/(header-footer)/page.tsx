// config
import { RENDERING_STRATEGY } from "@/config/renderingStrategy";

// vercel
export const dynamic =
  RENDERING_STRATEGY === "SSR" ? "force-dynamic" : undefined;

// requests
import { fetchHomepage } from "@/request/page/homepage";

// constants
import { CANONICAL_LINK } from "@/common/constants/meta";

// components
import HomepageClient from "@/components/pages/(frontend)/Home/HomepageClient";

// types
import { type HomepageLayoutDocument } from "@/common/types/documentation/pages/homepageLayout";
import { COMPANY_LOGO_URL, COMPANY_META_DESCRIPTION, COMPANY_NAME, COMPANY_PRIMARY_BANNER, COMPANY_URL } from "@/common/constants/companyDetails";

export const metadata = {
  title: COMPANY_NAME,
  description: COMPANY_META_DESCRIPTION,
  openGraph: {
    title: COMPANY_NAME,
    description: COMPANY_META_DESCRIPTION,
    url: COMPANY_URL,
    siteName: COMPANY_NAME,
    images: [COMPANY_PRIMARY_BANNER],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_NAME,
    description: COMPANY_META_DESCRIPTION,
    images: [COMPANY_PRIMARY_BANNER]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  keywords: [],
  alternates: {
    canonical: CANONICAL_LINK
  }
};

async function getHomepageLayouts() {
  try {
    const response = await fetchHomepage(RENDERING_STRATEGY);

    if (response.data) {
      return response.data as HomepageLayoutDocument[];
    }
  } catch (error) {
    return [] as HomepageLayoutDocument[];
  }

  return [] as HomepageLayoutDocument[];
}

export default async function Home() {
  const homepageLayouts = (await getHomepageLayouts()) || [];

  return <HomepageClient homepageLayouts={homepageLayouts} />;
}
