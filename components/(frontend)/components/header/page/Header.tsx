// config
import { RENDERING_STRATEGY } from "@/config/renderingStrategy";

// requests
import { fetchHeader } from "@/request/page/header";

// constants
import { ALL_CACHE_KEY, SEARCH_CACHE_KEY } from "@/common/constants/cacheKeys";
import { API_SEARCH_INITIAL_LOAD } from "@/common/apiHandlers/(frontend)/apiLinks";
import { XApiKey } from "@/common/constants/apiKey";

// utils
import { memo } from "react";

// components
import HeaderClient from "./components/HeaderClient";

// types
import { type HeaderNavLinkDocument } from "@/common/types/documentation/pages/headerNavLink";
import { HeaderNavLinkSectionDocument } from "@/common/types/documentation/nestedDocuments/headerNavLinkSection";
import { HeaderNavLinkSectionLinkDocument } from "@/common/types/documentation/nestedDocuments/headerNavLinkSectionLink";

async function getNavLinks() {
  try {
    const response = await fetchHeader(RENDERING_STRATEGY);

    if (response.data) {
      return response.data as HeaderNavLinkDocument[];
    }
  } catch (error) {
    return [];
  }

  return [];
}

export type SearchBarInitialContentsType = {
  aiTags: { _id: string; name: string }[];
  categories: { name: string; slug: string }[];
  trendingKeywords: { label: string; path: string }[];
};


async function Header({ searchResults }: { searchResults: SearchBarInitialContentsType | null }) {
  // const navLinks: HeaderNavLinkDocument[] = await getNavLinks();
  const navLinks: HeaderNavLinkDocument[] = [
    {
      label: "WEDDINGS",
      order: 1,
      sections: [
        {
          heading: "Wedding Top Picks",
          links: [
            { label: "Wedding House Decoration", path: `/wedding-house-decoration` },
            { label: "Wedding Car Decorations", path: `/wedding-car-decorations` },
            { label: "Wedding Varmala", path: `/wedding-varmala` },
          ] as HeaderNavLinkSectionLinkDocument[]
        }
      ] as HeaderNavLinkSectionDocument[]
    },
    {
      label: "FLOWERS",
      order: 2,
      sections: [
        {
          heading: "Flowers Top Picks",
          links: [
            { label: "Chocolate Flower Bouquet", path: `/chocolate-flower-bouquet` },
            { label: "Orchids Flower Bouquet", path: `/orchids-flower-bouquet` },
            { label: "Gerbera Flower Bouquet", path: `/gerbera-flower-bouquet` },
            { label: "Pink Rose Flowers Bouquet", path: `/pink-rose-flowers-bouquet` },
            { label: "White Roses Flower Bouquet", path: `/white-roses-flower-bouquet` },
            { label: "Yellow Roses Flowers Bouquet", path: `/yellow-roses-flowers-bouquet` },
          ] as HeaderNavLinkSectionLinkDocument[]
        }
      ] as HeaderNavLinkSectionDocument[]
    },
    // {
    //   label: "Cakes",
    //   order: 3,
    //   sections: [
    //     {
    //       heading: "",
    //       links: [

    //       ] as HeaderNavLinkSectionLinkDocument[]
    //     }
    //   ] as HeaderNavLinkSectionDocument[]
    // },
    // {
    //   label: "Balloons",
    //   order: 4,
    //   sections: [
    //     heading: "",
    //     links: [

    //     ]
    //   ] as HeaderNavLinkSectionDocument[]
    // },
    {
      label: "GIFTS",
      order: 5,
      sections: [
        {
          heading: "Flowers Top Picks",
          links: [
            { label: "Chocolate Flower Bouquet", path: `/chocolate-flower-bouquet` },
            { label: "Orchids Flower Bouquet", path: `/orchids-flower-bouquet` },
            { label: "Gerbera Flower Bouquet", path: `/gerbera-flower-bouquet` },
            { label: "Pink Rose Flowers Bouquet", path: `/pink-rose-flowers-bouquet` },
            { label: "White Roses Flower Bouquet", path: `/white-roses-flower-bouquet` },
            { label: "Yellow Roses Flowers Bouquet", path: `/yellow-roses-flowers-bouquet` },
          ] as HeaderNavLinkSectionLinkDocument[]
        }
      ] as HeaderNavLinkSectionDocument[]
    },
    // {
    //   label: "Hampers",
    //   order: 6,
    //   sections: [
    //     {
    //       heading: "",
    //       links: [

    //       ] as HeaderNavLinkSectionLinkDocument[]
    //     }
    //   ] as HeaderNavLinkSectionDocument[]
    // },
  ] as HeaderNavLinkDocument[];

  return (
    <HeaderClient
      navLinks={navLinks}
      searchResults={searchResults}
    />
  );
}

export default memo(Header);
