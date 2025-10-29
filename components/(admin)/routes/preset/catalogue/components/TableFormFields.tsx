// hooks
import { useEffect, useState } from "react";
import { useSelector } from "@/store/withType";

// redux
import { selectCatalogueCategory } from "@/store/features/categories/catalogueCategorySlice";

// components
import Input from "@/lib/Forms/Input/Input";
import SelectImage from "@/components/custom/inputs/image/SelectImage";

// types
import { type CatalogueDocument } from "@/common/types/documentation/presets/catalogue";

export default function TableFormFields({
  initialDocument
}: {
  initialDocument?: CatalogueDocument;
}) {
  // redux
  /* const { options: catalogueCategoryOptions } = useSelector((state) =>
    selectCatalogueCategory.documentList(state, {
      active: true,
      sortBy: "name",
      orderBy: "asc"
    })
  ); */

  // states
  const [catalogueCategory, setCatalogueCategory] = useState<string>('685513670cffa31fddf42662');

  // effects

  useEffect(() => {
    if (initialDocument) {
      setCatalogueCategory((initialDocument?.category as string) || "");
    }
  }, [initialDocument]);

  return (
    <section className="flex flex-col gap-3 w-[30vw]">
      {/* <Input
        type="dropdown"
        name="category"
        labelConfig={{
          label: "Category"
        }}
        isRequired
        nullOption
        customInitialValuePlaceholderLabel="Select Category"
        options={catalogueCategoryOptions}
        customValue={{
          value: catalogueCategory,
          setValue: setCatalogueCategory
        }}
        errorCheck={false}
        validCheck={false}
      /> */}
      <Input
        type="text"
        name="name"
        isRequired
        labelConfig={{
          label: "Name",
          layoutStyle: ""
        }}
        defaultValue={initialDocument?.name || ""}
        errorCheck={false}
        validCheck={false}
      />
      <Input
        type="text"
        name="path"
        isRequired
        labelConfig={{
          label: "URL",
          layoutStyle: ""
        }}
        defaultValue={initialDocument?.path || ""}
        errorCheck={false}
        validCheck={false}
      />
      <SelectImage
        name="icon"
        label="Icon"
        isRequired
        defaultValue={initialDocument?.icon as string}
      />
    </section>
  );
}
