import { Golos_Text } from "next/font/google";
import { type Children } from "@/common/types/reactTypes";
import { type Metadata } from "next";
import { WEBSITE_NAME } from "@/common/constants/environmentVariables";
import "@/app/globals.css";

const roboto = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: WEBSITE_NAME
};

export default function RootLayout({ children }: { children: Children }) {
  return (
    <html lang="en">
      <body className={`relative ${roboto.className}`}>{children}</body>
    </html>
  );
}
