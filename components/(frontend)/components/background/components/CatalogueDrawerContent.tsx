// requests
import { fetchCatalogueCategories } from "@/request/catalogueCategories/catalogueCategories";

// utils
import { memo } from "react";

// hooks
import { useEffect, useState } from "react";

// components
import { Accordion } from "@/components/ui/accordion";
import CatalogueCategory from "./CatalogueCategory";

// types
import { type CatalogueCategoryDocument } from "@/common/types/documentation/categories/catalogueCategory";
import { CatalogueDocument } from "@/common/types/documentation/presets/catalogue";
import Link from "next/link";
import Image from "next/image";
import { ImageDocument } from "@/common/types/documentation/media/image";
import ShineAnimation from "@/components/(frontend)/global/_Templates/ShineAnimation/ShineAnimation";

function CatalogueDrawerContent({ onClose }: { onClose: () => void }) {
  const [catalogueCategories, setCatalogueCategories] = useState<
    CatalogueCategoryDocument[]
  >([]);

  useEffect(() => {
    fetchCatalogueCategories()
      .then(({ data: catalogueCategories }) => {
        setCatalogueCategories(
          catalogueCategories as CatalogueCategoryDocument[]
        );
      })
      .catch(() => { });
  }, []);

  const catalogues = catalogueCategories[0]?._catalogues as CatalogueDocument[];

  return (
    <section className="overflow-y-scroll">
      <h4 className="text-2xl font-medium py-4 text-center">Our Popular Categories</h4>
      {/* <Accordion
        type="single"
        collapsible
      >
        {catalogueCategories.map((catalogueCategory) => (
          <CatalogueCategory
            key={catalogueCategory._id as string}
            catalogueCategory={catalogueCategory}
            onClose={onClose}
          />
        ))}
      </Accordion> */}

      {catalogues &&
        <section className="my-2 grid grid-cols-3 gap-5">
          {catalogues.map((catalogue, i) => (
            <Link key={i} href={catalogue.path} className="flex flex-col justify-start gap-2">
              <div className="rounded-full aspect-square overflow-hidden relative bg-sienna-3 p-2">
                <Image alt={(catalogue.icon as ImageDocument)?.alt || ""} src={(catalogue.icon as ImageDocument)?.url || ""} width={200} height={200} unoptimized decoding="async" className="w-full h-full object-cover object-center rounded-full ring-4 ring-ivory-1" />
                <ShineAnimation />
              </div>
              <div className="text-center font-medium">{catalogue.name}</div>
            </Link>
          ))}
        </section>
      }
    </section>
  );
}

export default memo(CatalogueDrawerContent);
