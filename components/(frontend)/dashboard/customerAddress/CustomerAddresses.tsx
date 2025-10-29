"use client";

// libraries
import mongoose from "mongoose";

// constants
import { GOOGLE_ANALYTICS_ID } from "@/common/constants/environmentVariables";

// hooks
import { useEffect, useState } from "react";
import { useCustomerProfile } from "@/hooks/useCustomerProfile";

// components
import CustomerAddressForm from "./components/CustomerAddressForm";
import CustomerAddressEmptyList from "./components/CustomerAddressEmptyList";
import CustomerAddressList from "./components/CustomerAddressList";
import { GoogleAnalytics } from "@next/third-parties/google";

// types
import { type CustomerAddressDocument } from "@/common/types/documentation/nestedDocuments/customerAddress";
import { useAppStates } from "@/hooks/useAppState/useAppState";

export default function CustomerAddresses() {
  // hooks
  const {
    profile: {
      data: { addresses }
    }
  } = useAppStates();
  const {
    address: { onAdd, onUpdate, onDelete }
  } = useCustomerProfile();

  // states
  const [selectedCustomerAddressId, setSelectedCustomerAddressId] =
    useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);

  // variables
  const hasAddresses = Boolean(addresses.length);

  const selectedCustomerAddress = addresses.find(
    ({ _id }) => _id === selectedCustomerAddressId
  );

  // handlers
  const handleAddOrUpdateAddress = (newAddress: CustomerAddressDocument) => {
    if (mongoose.Types.ObjectId.isValid(newAddress._id as string)) {
      onUpdate(newAddress);
      setSelectedCustomerAddressId("");
    } else {
      onAdd(newAddress);
    }
  };

  const handleAddAddress = () => {
    setShowForm(true);
  };

  const handleUpdateAddress = (addressId: string) => {
    setSelectedCustomerAddressId(addressId);
    setShowForm(true);
  };

  const handleDeleteAddress = (addressId: string) => {
    onDelete(addressId);
  };

  // side effects
  useEffect(() => {
    if (!showForm) {
      setSelectedCustomerAddressId("");
    }
  }, [showForm]);

  return (
    <>
      <section
        className={`${hasAddresses ? "max-lg:px-3.5 lg:pl-5 grid grid-cols-1" : "max-lg:px-3.5 lg:pl-5 grid grid-cols-1 gap-8 auto-rows-min justify-center text-center mt-10 lg:mt-28"}`}
      >
        {hasAddresses ? (
          <CustomerAddressList
            addresses={addresses}
            onAdd={handleAddAddress}
            onUpdate={handleUpdateAddress}
            onDelete={handleDeleteAddress}
          />
        ) : (
          <CustomerAddressEmptyList onAdd={handleAddAddress} />
        )}
        <CustomerAddressForm
          addressCount={addresses.length}
          showForm={showForm}
          defaultValue={selectedCustomerAddress}
          onChangeShowForm={setShowForm}
          onSubmit={handleAddOrUpdateAddress}
        />
      </section>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
    </>
  );
}
