// providers
import { AppStatesProvider } from "@/hooks/useAppState/useAppState";

// types
import { type ReactNode } from "react";

export default function LazyContextLayout({
  children
}: {
  children: ReactNode;
}) {
  return <AppStatesProvider>{children}</AppStatesProvider>;
}
