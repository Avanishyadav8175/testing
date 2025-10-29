import { AlignVerticalJustifyEnd, BookOpenText, Box, Cog, Combine, Cuboid, DatabaseZap, Gem, Grip, Images, IndianRupee, LayoutList, Package, Proportions, Settings, Settings2, Shapes, Shield, ShoppingBasket, Store, Type, Users } from "lucide-react";
import { ADMIN_ROOT_ROUTE } from "@/common/utils/admin/sidebar";
import { getSection } from "@/common/utils/admin/sidebar";
import { AdminPanelHeading } from "@/components/(admin)/_ui/AdminTypography";
import AddonTable from "@/components/(admin)/routes/content/addon/AddonTable";
import AddonCategoryTable from "@/components/(admin)/routes/category/addon/AddonCategoryTable";
import AdminRoleTable from "@/components/(admin)/routes/admin/adminRole/AdminRoleTable";
import AdminTable from "@/components/(admin)/routes/admin/admin/AdminTable";
import AdvancePaymentTable from "@/components/(admin)/routes/preset/advancePayment/AdvancePaymentTable";
import AITagCategoryTable from "@/components/(admin)/routes/category/aiTag/AITagCategoryTable";
import AITagTable from "@/components/(admin)/routes/preset/aiTag/AITagTable";
import AuthSetting from "@/components/(admin)/routes/setting/auth/AuthSetting";
import BalloonColorGroupTable from "@/components/(admin)/routes/preset/balloonColor/BalloonColorGroupTable";
import BlogArticleTable from "@/components/(admin)/routes/blog/article/BlogArticleTable";
import BlogAuthorTable from "@/components/(admin)/routes/blog/author/BlogAuthorTable";
import BlogCategoryTable from "@/components/(admin)/routes/blog/category/BlogCategoryTable";
import BlogTagTable from "@/components/(admin)/routes/blog/tag/BlogTagTable";
import BrandTable from "@/components/(admin)/routes/preset/brand/BrandTable";
import CancellationPolicyTable from "@/components/(admin)/routes/preset/cancellationPolicy/CancellationPolicyTable";
import CancelledOrderTable from "@/components/(admin)/routes/order/orderCancelled/CancelledOrderTable";
import CareInfoTable from "@/components/(admin)/routes/preset/careInfo/CareInfoTable";
import CatalogueTable from "@/components/(admin)/routes/preset/catalogue/CatalogueTable";
import CatalogueCategoryTable from "@/components/(admin)/routes/category/catalogue/CatalogueCategoryTable";
import ColorTable from "@/components/(admin)/routes/preset/color/ColorTable";
import CityTable from "@/components/(admin)/routes/preset/city/CityTable";
import CommissionTable from "@/components/(admin)/routes/preset/commission/CommissionTable";
import ContentCategoryTable from "@/components/(admin)/routes/category/content/ContentCategoryTable";
import ContentImageManagement from "@/components/(admin)/routes/media/image/ContentImageManagement";
import CountryCodeTable from "@/components/(admin)/routes/preset/countryCode/CountryCodeTable";
import CouponTable from "@/components/(admin)/routes/content/coupon/CouponTable";
import CustomerTable from "@/components/(admin)/routes/customer/customer/CustomerTable";
import CustomizationImageManagement from "@/components/(admin)/routes/media/customizationImage/CustomizationImageManagement";
import LabelTable from "@/components/(admin)/routes/preset/label/LabelTable";
import DeliveredOrderTable from "@/components/(admin)/routes/order/orderDelivered/DeliveredOrderTable";
import DeliveryDetailTable from "@/components/(admin)/routes/preset/deliveryDetail/DeliveryDetailTable";
import DeliveryTypeTable from "@/components/(admin)/routes/preset/deliveryType/DeliveryTypeTable";
import DynamicPageTable from "@/components/(admin)/routes/page/dynamic-page/DynamicPageTable";
import EnhancementTable from "@/components/(admin)/routes/preset/enhancement/EnhancementTable";
import FailedOrderTable from "@/components/(admin)/routes/order/orderFailed/FailedOrderTable";
import FAQGroupTable from "@/components/(admin)/routes/preset/faqGroup/FAQGroupTable";
import FlavourTable from "@/components/(admin)/routes/preset/flavour/FlavourTable";
import FooterSectionTable from "@/components/(admin)/routes/page/footerSection/FooterSectionTable";
import FoundUsSourceTable from "@/components/(admin)/routes/preset/foundUsSource/FoundUsSourceTable";
import GSTTable from "@/components/(admin)/routes/preset/gst/GSTTable";
import HeaderNavLinkTable from "@/components/(admin)/routes/page/headerNavLink/HeaderNavLinkTable";
import HomepageManagement from "@/components/(admin)/routes/page/homepage/HomepageManagement";
import IdentificationImageManagement from "@/components/(admin)/routes/media/identificationImage/IdentificationImageManagement";
import IssueImageManagement from "@/components/(admin)/routes/media/issueImage/IssueImageManagement";
import NewOrderTable from "@/components/(admin)/routes/order/orderNew/NewOrderTable";
import NoteGroupTable from "@/components/(admin)/routes/preset/noteGroup/NoteGroupTable";
import OccasionTable from "@/components/(admin)/routes/preset/occasion/OccasionTable";
import OrderInProgressTable from "@/components/(admin)/routes/order/orderInProgress/OrderInProgressTable";
import PaymentCycleTable from "@/components/(admin)/routes/preset/paymentCycle/PaymentCycleTable";
import PaymentSetting from "@/components/(admin)/routes/setting/payment/PaymentSetting";
import ProcessingTimeTable from "@/components/(admin)/routes/preset/processingTime/ProcessingTimeTable";
import ProductTable from "@/components/(admin)/routes/content/product/ProductTable";
import PromotionTagTable from "@/components/(admin)/routes/preset/promotionTag/PromotionTagTable";
import QuickLinkTable from "@/components/(admin)/routes/preset/quickLink/QuickLinkTable";
import RelationTable from "@/components/(admin)/routes/preset/relation/RelationTable";
import ResetCache from "@/components/(admin)/routes/cache/reset/ResetCache";
import RevalidateCache from "@/components/(admin)/routes/cache/revalidate/ReValidateCache";
import ReviewGroupTable from "@/components/(admin)/routes/preset/reviewGroup/ReviewGroupTable";
import ReviewImageManagement from "@/components/(admin)/routes/media/reviewImage/ReviewImageManagement";
import SearchTagTable from "@/components/(admin)/routes/preset/searchTag/SearchTagTable";
import SecurityQuestionTable from "@/components/(admin)/routes/preset/securityQuestion/SecurityQuestionTable";
import ServiceImageSetting from "@/components/(admin)/routes/setting/serviceImage/ServiceImageSetting";
import ServiceTable from "@/components/(admin)/routes/content/service/ServiceTable";
import StateTable from "@/components/(admin)/routes/preset/state/StateTable";
import SubTopicTable from "@/components/(admin)/routes/page/subTopic/SubTopicTable";
import TopicTable from "@/components/(admin)/routes/page/topic/TopicTable";
import TrendingSearchKeywordTable from "@/components/(admin)/routes/preset/trendingSearchKeyword/TrendingSearchKeywordTable";
import UnitTable from "@/components/(admin)/routes/preset/unit/UnitTable";
import UpgradeTable from "@/components/(admin)/routes/preset/upgrade/UpgradeTable";
import VendorOfferCategoryTable from "@/components/(admin)/routes/preset/vendorOfferCategory/VendorOfferCategoryTable";
import VendorTable from "@/components/(admin)/routes/vendor/vendor/VendorTable";
import VendorRequestTable from "@/components/(admin)/routes/vendor/vendorRequest/VendorRequestTable";
import VenueTable from "@/components/(admin)/routes/preset/venue/VenueTable";

// labels
import CancelledOrderLabel from "@/components/(admin)/sidebar/order/CancelledOrderLabel";
import CustomerLabel from "@/components/(admin)/sidebar/customer/CustomerLabel";
import DeliveredOrderLabel from "@/components/(admin)/sidebar/order/DeliveredOrderLabel";
import FailedOrderLabel from "@/components/(admin)/sidebar/order/FailedOrderLabel";
import InProgressOrderLabel from "@/components/(admin)/sidebar/order/InProgressOrderLabel";
import NewOrderLabel from "@/components/(admin)/sidebar/order/NewOrderLabel";
import VendorLabel from "@/components/(admin)/sidebar/vendor/VendorLabel";
import VendorRequestLabel from "@/components/(admin)/sidebar/vendor/VendorRequestLabel";

// types
import { type AdminPanelSection } from "@/common/types/layouts/admin/adminPanelLayout";
import SubSubTopicTable from "@/components/(admin)/routes/page/subSubTopic/SubSubTopicTable";
import SubSubSubTopicTable from "@/components/(admin)/routes/page/subSubSubTopic/SubSubSubTopicTable";
import GMC from "@/components/(admin)/routes/gmc/GMC";
import SystemHealth from "@/components/(admin)/routes/system/SystemHealth";
import AdminDashboard from "@/components/(admin)/dashboard/AdminDashboard";

export const SIDEBAR_SECTIONS: AdminPanelSection[] = [
  // Dashboard ---------------------------
  {
    sectionName: "dashboard",
    sectionLabel: "Dashboard",
    icon: (
      <Grip
        strokeWidth={1.5}
        width={20}
      />
    ),
    component: <AdminDashboard />,
    path: `/${ADMIN_ROOT_ROUTE}`
  },

  // Additional Presets --------------------
  getSection({
    sectionName: "preset",
    sectionLabel: "Additional Presets",
    icon: (
      <Combine
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "brand",
        sectionLabel: "Brands",
        icon: <></>,
        component: <BrandTable />
      },
      {
        sectionName: "commission",
        sectionLabel: "Commission",
        icon: <></>,
        component: <CommissionTable />
      },
      {
        sectionName: "countryCode",
        sectionLabel: "Country Calling Code",
        icon: <></>,
        component: <CountryCodeTable />
      },
      {
        sectionName: "flavour",
        sectionLabel: "Flavour",
        icon: <></>,
        component: <FlavourTable />
      },
      {
        sectionName: "foundUsSource",
        sectionLabel: "Found Us Source",
        icon: <></>,
        component: <FoundUsSourceTable />
      },
      {
        sectionName: "gst",
        sectionLabel: "GST",
        icon: <></>,
        component: <GSTTable />
      },
      {
        sectionName: "noteGroup",
        sectionLabel: "Note",
        icon: <></>,
        component: <NoteGroupTable />
      },
      {
        sectionName: "occasion",
        sectionLabel: "Occasions",
        icon: <></>,
        component: <OccasionTable />
      },
      {
        sectionName: "paymentCycle",
        sectionLabel: "Payment Cycle",
        icon: <></>,
        component: <PaymentCycleTable />
      },
      {
        sectionName: "quickLink",
        sectionLabel: "Quick Link",
        icon: <></>,
        component: <QuickLinkTable />
      },
      {
        sectionName: "relation",
        sectionLabel: "Relation",
        icon: <></>,
        component: <RelationTable />
      },
      {
        sectionName: "searchTag",
        sectionLabel: "Search Tags",
        icon: <></>,
        component: <SearchTagTable />
      },
      {
        sectionName: "securityQuestion",
        sectionLabel: "Security Question",
        icon: <></>,
        component: <SecurityQuestionTable />
      },
      {
        sectionName: "trendingSearchKeyword",
        sectionLabel: "Trending Keyword",
        icon: <></>,
        component: <TrendingSearchKeywordTable />
      },
      {
        sectionName: "upgrade",
        sectionLabel: "Upgrade",
        icon: <></>,
        component: <UpgradeTable />
      },
      {
        sectionName: "vendorOfferCategory",
        sectionLabel: "Vendor Offer Category",
        icon: <></>,
        component: <VendorOfferCategoryTable />
      },
      {
        sectionName: "venue",
        sectionLabel: "Venue",
        icon: <></>,
        component: <VenueTable />
      }
    ]
  }),

  // PRESETS #############################
  getSection({
    sectionName: "configs",
    sectionLabel: "Configurations",
    icon: (
      <Settings
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "advancePayment",
        sectionLabel: "Advance Payment",
        icon: <></>,
        component: <AdvancePaymentTable />
      },
      {
        sectionName: "balloonColorGroup",
        sectionLabel: "Balloon Color",
        icon: <></>,
        component: <BalloonColorGroupTable />
      },
      {
        sectionName: "cancellationPolicy",
        sectionLabel: "Cancellation Policy",
        icon: <></>,
        component: <CancellationPolicyTable />
      },
      {
        sectionName: "careInfo",
        sectionLabel: "Care Info",
        icon: <></>,
        component: <CareInfoTable />
      },
      {
        sectionName: "city",
        sectionLabel: "Cities",
        icon: <></>,
        component: <CityTable />
      },
      {
        sectionName: "color",
        sectionLabel: "Colors",
        icon: <></>,
        component: <ColorTable />
      },
      {
        sectionName: "coupon",
        sectionLabel: "Coupons",
        icon: <></>,
        component: <CouponTable />
      },
      {
        sectionName: "deliveryDetail",
        sectionLabel: "Delivery Detail",
        icon: <></>,
        component: <DeliveryDetailTable />
      },
      {
        sectionName: "deliveryType",
        sectionLabel: "Delivery Type",
        icon: <></>,
        component: <DeliveryTypeTable />
      },
      {
        sectionName: "enhancement",
        sectionLabel: "Enhancement",
        icon: <></>,
        component: <EnhancementTable />
      },
      {
        sectionName: "faqGroup",
        sectionLabel: "FAQ",
        icon: <></>,
        component: <FAQGroupTable />
      },
      {
        sectionName: "label",
        sectionLabel: "Labels",
        icon: <></>,
        component: <LabelTable />
      },
      {
        sectionName: "processingTime",
        sectionLabel: "Processing Time",
        icon: <></>,
        component: <ProcessingTimeTable />
      },
      {
        sectionName: "promotionTag",
        sectionLabel: "Promotion Tag",
        icon: <></>,
        component: <PromotionTagTable />
      },
      {
        sectionName: "reviewGroup",
        sectionLabel: "Reviews",
        icon: <></>,
        component: <ReviewGroupTable />
      },
      {
        sectionName: "state",
        sectionLabel: "States",
        icon: <></>,
        component: <StateTable />
      },
      {
        sectionName: "unit",
        sectionLabel: "Units",
        icon: <></>,
        component: <UnitTable />
      },
    ]
  }),

  // Media -------------------
  getSection({
    sectionName: "media",
    sectionLabel: "Media",
    icon: (
      <Images
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "image",
        sectionLabel: "Images",
        icon: <></>,
        component: <ContentImageManagement />
      },
      {
        sectionName: "customizationImage",
        sectionLabel: "Customization Image",
        icon: <></>,
        component: <CustomizationImageManagement />
      },
      {
        sectionName: "identificationImage",
        sectionLabel: "Identification Image",
        icon: <></>,
        component: <IdentificationImageManagement />
      },
      {
        sectionName: "issueImage",
        sectionLabel: "Issue Image",
        icon: <></>,
        component: <IssueImageManagement />
      },
      {
        sectionName: "reviewImage",
        sectionLabel: "Review Image",
        icon: <></>,
        component: <ReviewImageManagement />
      }
    ]
  }),

  // PRODUCT PAGE #############################
  getSection({
    sectionName: "product",
    sectionLabel: "Product & Addons",
    icon: (
      <Box
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "products",
        sectionLabel: "Products",
        icon: <></>,
        component: <ProductTable />
      },
      {
        sectionName: "addon",
        sectionLabel: "Addons",
        icon: <></>,
        component: <AddonTable />
      },
      {
        sectionName: "categoryaddon",
        sectionLabel: "Addon Category",
        icon: <></>,
        component: <AddonCategoryTable />
      },
    ]
  }),

  // CATEGORY PAGE #############################
  getSection({
    sectionName: "category",
    sectionLabel: "Category Page",
    icon: (
      <AlignVerticalJustifyEnd
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "category1",
        sectionLabel: "Category 1",
        icon: <></>,
        component: <ContentCategoryTable />
      },
      {
        sectionName: "category2",
        sectionLabel: "Category 2",
        icon: <></>,
        component: <TopicTable />
      },
      {
        sectionName: "category3",
        sectionLabel: "Category 3",
        icon: <></>,
        component: <SubTopicTable />
      },
      {
        sectionName: "category4",
        sectionLabel: "Category 4",
        icon: <></>,
        component: <SubSubTopicTable />
      },
      {
        sectionName: "category5",
        sectionLabel: "Category 5",
        icon: <></>,
        component: <SubSubSubTopicTable />
      },
      {
        sectionName: "catalogue",
        sectionLabel: "Mobile Navbar Categories",
        icon: <></>,
        component: <CatalogueTable />
      },
    ]
  }),


  // OTHER SMALL PAGES #############################
  getSection({
    sectionName: "pages",
    sectionLabel: "Website Pages",
    icon: (
      <Proportions
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "homepage",
        sectionLabel: "Home Page",
        icon: <></>,
        component: <HomepageManagement />
      },
      {
        sectionName: "smallPages",
        sectionLabel: "Smaller Pages",
        icon: <></>,
        component: <DynamicPageTable />
      },
      {
        sectionName: "header",
        sectionLabel: "Header Navigation",
        icon: <></>,
        component: <HeaderNavLinkTable />
      },
      {
        sectionName: "footer",
        sectionLabel: "Footer Sections",
        icon: <></>,
        component: <FooterSectionTable />
      },
      {
        sectionName: "sitemaps",
        sectionLabel: "Sitemaps",
        icon: <></>,
        component: <RevalidateCache />
      }
    ]
  }),



  // Category ----------------------
  // getSection({
  //   sectionName: "category",
  //   sectionLabel: "Category",
  //   icon: (
  //     <AlignVerticalJustifyEnd
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [

  //     {
  //       sectionName: "aiTag",
  //       sectionLabel: "AI Tag Category",
  //       icon: <></>,
  //       component: <AITagCategoryTable />
  //     },

  //     {
  //       sectionName: "content",
  //       sectionLabel: "Content Category",
  //       icon: <></>,
  //       component: <ContentCategoryTable />
  //     }
  //   ]
  // }),

  // // Content ---------------------
  // getSection({
  //   sectionName: "content",
  //   sectionLabel: "Content",
  //   icon: (
  //     <Cuboid
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [


  //   ]
  // }),

  // // Page --------------------
  // getSection({
  //   sectionName: "page",
  //   sectionLabel: "Page",
  //   icon: (
  //     <LayoutList
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [
  //     {
  //       sectionName: "header",
  //       sectionLabel: "Header",
  //       icon: <></>,
  //       component: <HeaderNavLinkTable />
  //     },
  //     {
  //       sectionName: "footer",
  //       sectionLabel: "Footer",
  //       icon: <></>,
  //       component: <FooterSectionTable />
  //     },
  //     {
  //       sectionName: "homepage",
  //       sectionLabel: "Homepage",
  //       icon: <></>,
  //       component: <HomepageManagement />
  //     },
  //     
  //   ]
  // }),

  // // ORDERS AND PAYMENTS --------------------------
  getSection({
    sectionName: "order",
    sectionLabel: "Users & Payments",
    icon: (
      <IndianRupee
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "customer",
        sectionLabel: <CustomerLabel />,
        icon: <></>,
        component: <CustomerTable />
      },
      {
        sectionName: "new",
        sectionLabel: <NewOrderLabel />,
        icon: <></>,
        component: <NewOrderTable />
      },
      {
        sectionName: "inProgress",
        sectionLabel: <InProgressOrderLabel />,
        icon: <></>,
        component: <OrderInProgressTable />
      },
      {
        sectionName: "delivered",
        sectionLabel: <DeliveredOrderLabel />,
        icon: <></>,
        component: <DeliveredOrderTable />
      },
      {
        sectionName: "failed",
        sectionLabel: <FailedOrderLabel />,
        icon: <></>,
        component: <FailedOrderTable />
      },
      {
        sectionName: "cancelled",
        sectionLabel: <CancelledOrderLabel />,
        icon: <></>,
        component: <CancelledOrderTable />
      },
    ]
  }),

  // System Settings --------------------------
  getSection({
    sectionName: "systemSettings",
    sectionLabel: "System Settings",
    icon: (
      <Cog
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "auth",
        sectionLabel: "Authentication",
        icon: <></>,
        component: <AuthSetting />
      },
      {
        sectionName: "payment",
        sectionLabel: "Payment Gateway",
        icon: <></>,
        component: <PaymentSetting />
      },
      {
        sectionName: "serviceImage",
        sectionLabel: "Service Images",
        icon: <></>,
        component: <ServiceImageSetting />
      }
    ]
  }),

  // // Blog --------------------------
  getSection({
    sectionName: "blog",
    sectionLabel: "Blogs",
    icon: (
      <Type
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "article",
        sectionLabel: "All Blogs",
        icon: <></>,
        component: <BlogArticleTable />
      },
      {
        sectionName: "author",
        sectionLabel: "Authors",
        icon: <></>,
        component: <BlogAuthorTable />
      },
      {
        sectionName: "category",
        sectionLabel: "Blog Category",
        icon: <></>,
        component: <BlogCategoryTable />
      },
      {
        sectionName: "tag",
        sectionLabel: "Blog Tags",
        icon: <></>,
        component: <BlogTagTable />
      }
    ]
  }),


  // // Mobile Categories --------------------------
  // getSection({
  //   sectionName: "mobileCatgories",
  //   sectionLabel: "Mobile Categories",
  //   icon: (
  //     <Shapes
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [

  //     {
  //       sectionName: "cataCategory",
  //       sectionLabel: "Mobile Category",
  //       icon: <></>,
  //       component: <CatalogueCategoryTable />
  //     },
  //   ]
  // }),

  // Settings --------------------------
  getSection({
    sectionName: "settings",
    sectionLabel: "Miscellaneous",
    icon: (
      <Settings2
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "health",
        sectionLabel: "System Health",
        icon: <></>,
        component: <SystemHealth />
      },
      {
        sectionName: "reset",
        sectionLabel: "Full Reset",
        icon: <></>,
        component: <ResetCache />
      },
      {
        sectionName: "gmc",
        sectionLabel: "Merchant Centre Products",
        icon: <></>,
        component: <GMC />
      },
      /* {
        sectionName: "revalidate",
        sectionLabel: "Revalidate",
        icon: <></>,
        component: <RevalidateCache />
      } */
      /* {
         sectionName: "adminRole",
         sectionLabel: "Role",
         icon: <></>,
         component: <AdminRoleTable />
       }, */
      {
        sectionName: "admin",
        sectionLabel: "Admins",
        icon: <></>,
        component: <AdminTable />
      },
      //     {
      //       sectionName: "vendor",
      //       sectionLabel: <VendorLabel />,
      //       icon: <></>,
      //       component: <VendorTable />
      //     },
      {
        sectionName: "request",
        sectionLabel: <VendorRequestLabel />,
        icon: <></>,
        component: <VendorRequestTable />
      }
    ]
  }),

  // Vendor Management ---------------------------
  getSection({
    sectionName: "vendor",
    sectionLabel: "Vendor Management",
    icon: (
      <ShoppingBasket
        strokeWidth={1.5}
        width={20}
      />
    ),
    subSections: [
      {
        sectionName: "vendor",
        sectionLabel: <VendorLabel />,
        icon: <></>,
        component: <VendorTable />
      },
      {
        sectionName: "vendorRequest",
        sectionLabel: <VendorRequestLabel />,
        icon: <></>,
        component: <VendorRequestTable />
      }
    ]
  }),

  // // Order --------------------------
  // getSection({
  //   sectionName: "order",
  //   sectionLabel: "Order",
  //   icon: (
  //     <Package
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [

  //     {
  //       sectionName: "delivery",
  //       sectionLabel: (
  //         <span className="flex items-center justify-between pr-2.5 gap-2">
  //           <span>Delivery</span>
  //           <span className="bg-teal-500 scale-90 text-white flex items-center justify-center px-1.5 py-0.5 font-medium rounded-md !text-xs">
  //             0
  //           </span>
  //         </span>
  //       ),
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Order Delivery" />
  //     },

  //     {
  //       sectionName: "deliveryCancellationRequest",
  //       sectionLabel: (
  //         <span className="flex items-center justify-between pr-2.5 gap-2">
  //           <span>Cancellation Request</span>
  //           <span className="bg-teal-500 scale-90 text-white flex items-center justify-center px-1.5 py-0.5 font-medium rounded-md !text-xs">
  //             0
  //           </span>
  //         </span>
  //       ),
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Delivery Cancellation Request" />
  //     }
  //   ]
  // }),

  // // Customer ------------------------
  // getSection({
  //   sectionName: "customer",
  //   sectionLabel: "Customer",
  //   icon: (
  //     <Users
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [

  //     {
  //       sectionName: "lead",
  //       sectionLabel: (
  //         <span className="flex items-center justify-between pr-2.5 gap-2">
  //           <span>Lead</span>
  //           <span className="bg-teal-500 scale-90 text-white flex items-center justify-center px-1.5 py-0.5 font-medium rounded-md !text-xs">
  //             0
  //           </span>
  //         </span>
  //       ),
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Lead" />
  //     },
  //     {
  //       sectionName: "callback",
  //       sectionLabel: (
  //         <span className="flex items-center justify-between pr-2.5 gap-2">
  //           <span>Callback</span>
  //           <span className="bg-teal-500 scale-90 text-white flex items-center justify-center px-1.5 py-0.5 font-medium rounded-md !text-xs">
  //             0
  //           </span>
  //         </span>
  //       ),
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Callback" />
  //     },
  //     {
  //       sectionName: "issue",
  //       sectionLabel: (
  //         <span className="flex items-center justify-between pr-2.5 gap-2">
  //           <span>Issue</span>
  //           <span className="bg-teal-500 scale-90 text-white flex items-center justify-center px-1.5 py-0.5 font-medium rounded-md !text-xs">
  //             0
  //           </span>
  //         </span>
  //       ),
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Issue" />
  //     }
  //   ]
  // }),

  // // Vendor ---------------------------
  // getSection({
  //   sectionName: "vendor",
  //   sectionLabel: "Vendor",
  //   icon: (
  //     <ShoppingBasket
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [
  //     {
  //       sectionName: "vendor",
  //       sectionLabel: <VendorLabel />,
  //       icon: <></>,
  //       component: <VendorTable />
  //     },
  //     {
  //       sectionName: "request",
  //       sectionLabel: <VendorRequestLabel />,
  //       icon: <></>,
  //       component: <VendorRequestTable />
  //     }
  //   ]
  // }),

  // // Seller -------------------------
  // getSection({
  //   sectionName: "seller",
  //   sectionLabel: "Seller",
  //   icon: (
  //     <Gem
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [
  //     {
  //       sectionName: "seller",
  //       sectionLabel: "Seller",
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Seller" />
  //     },
  //     {
  //       sectionName: "request",
  //       sectionLabel: "Request",
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Seller Registration Request" />
  //     }
  //   ]
  // }),

  // // Franchise -----------------------
  // getSection({
  //   sectionName: "franchise",
  //   sectionLabel: "Franchise",
  //   icon: (
  //     <Store
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [
  //     {
  //       sectionName: "franchise",
  //       sectionLabel: "Franchise",
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Franchise" />
  //     },
  //     {
  //       sectionName: "request",
  //       sectionLabel: "Request",
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Franchise Registration Request" />
  //     }
  //   ]
  // }),

  // // Cache Reset ---------------------------
  // getSection({
  //   sectionName: "cache",
  //   sectionLabel: "Cache",
  //   icon: (
  //     <DatabaseZap
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [

  //   ]
  // }),

  // // Admin -------------------------------
  // getSection({
  //   sectionName: "admin",
  //   sectionLabel: "Admin",
  //   icon: (
  //     <Shield
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [
  //     
  //   ]
  // }),

  // // Setting --------------------------
  // getSection({
  //   sectionName: "setting",
  //   sectionLabel: "Setting",
  //   icon: (
  //     <Cog
  //       strokeWidth={1.5}
  //       width={20}
  //     />
  //   ),
  //   subSections: [
  //     {
  //       sectionName: "auth",
  //       sectionLabel: "Auth",
  //       icon: <></>,
  //       component: <AuthSetting />
  //     },
  //     {
  //       sectionName: "payment",
  //       sectionLabel: "Payment",
  //       icon: <></>,
  //       component: <PaymentSetting />
  //     },
  //     {
  //       sectionName: "callback",
  //       sectionLabel: "Callback",
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Callback Setting" />
  //     },
  //     {
  //       sectionName: "contact",
  //       sectionLabel: "Contact",
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Contact Setting" />
  //     },
  //     {
  //       sectionName: "icon",
  //       sectionLabel: "Icon",
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Icon Setting" />
  //     },
  //     {
  //       sectionName: "logo",
  //       sectionLabel: "Logo",
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Logo Setting" />
  //     },
  //     {
  //       sectionName: "serviceImage",
  //       sectionLabel: "Service Image",
  //       icon: <></>,
  //       component: <ServiceImageSetting />
  //     },
  //     {
  //       sectionName: "social",
  //       sectionLabel: "Social",
  //       icon: <></>,
  //       component: <AdminPanelHeading title="Social Setting" />
  //     }
  //   ]
  // })
];
