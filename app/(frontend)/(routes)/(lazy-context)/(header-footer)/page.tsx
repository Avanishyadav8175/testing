// app/page.tsx

// ✅ STATIC + ISR (fastest)
export const dynamic = "force-static";
export const revalidate = 300; // 5 min cache

// requests
import { fetchHomepage } from "@/request/page/homepage";

// constants
import { CANONICAL_LINK } from "@/common/constants/meta";
import {
  COMPANY_META_DESCRIPTION,
  COMPANY_NAME,
  COMPANY_PRIMARY_BANNER,
  COMPANY_URL
} from "@/common/constants/companyDetails";

// components
import dynamicImport from "next/dynamic";
import { Suspense } from "react";

// types
import { HomepageLayoutDocument } from "@/common/types/documentation/pages/homepageLayout";

/* ---------------- META ---------------- */
export const metadata = {
  title: COMPANY_NAME,
  description: COMPANY_META_DESCRIPTION,
  alternates: { canonical: CANONICAL_LINK },
  openGraph: {
    title: COMPANY_NAME,
    description: COMPANY_META_DESCRIPTION,
    url: COMPANY_URL,
    images: [COMPANY_PRIMARY_BANNER]
  }
};

/* ---------------- DATA ---------------- */
async function getHomepageLayouts(): Promise<HomepageLayoutDocument[]> {
  try {
    const response = await fetchHomepage("ISR");

    return (response?.data ?? []).filter(
      (item): item is HomepageLayoutDocument => Boolean(item)
    );
  } catch {
    return [];
  }
}


/* ---------------- CLIENT ---------------- */
// ❗ client JS defer
const HomepageClient = dynamicImport(
  () => import("@/components/pages/(frontend)/Home/HomepageClient"),
  { ssr: false }
);

/* ---------------- PAGE ---------------- */
export default async function Home() {
  const homepageLayouts = await getHomepageLayouts();

  return (
    <Suspense fallback={null}>
      <HomepageClient homepageLayouts={homepageLayouts} />
    </Suspense>
  );
}
