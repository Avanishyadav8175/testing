// constants
import { GOOGLE_CLIENT_ID } from "@/common/constants/environmentVariables";

// hooks
import { CartProvider } from "@/hooks/useCart";
import { CustomerAuthProvider } from "@/hooks/auth/useCustomerAuth";
import { CustomerProfileProvider } from "@/hooks/useCustomerProfile";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LocationProvider } from "@/hooks/useLocation/useLocation";
import { SearchProvider } from "@/hooks/useSearch/useSearch";
import { SettingProvider } from "@/hooks/useSetting/useSetting";

// types
import { type ReactNode } from "react";

export default async function ContextProvider({
  children
}: {
  children: ReactNode;
}) {
  return (
    <SettingProvider>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID as string}>
        <CustomerAuthProvider>
          <CustomerProfileProvider>
            <LocationProvider>
              <SearchProvider>
                <CartProvider>{children}</CartProvider>
              </SearchProvider>
            </LocationProvider>
          </CustomerProfileProvider>
        </CustomerAuthProvider>
      </GoogleOAuthProvider>
    </SettingProvider>
  );
}
