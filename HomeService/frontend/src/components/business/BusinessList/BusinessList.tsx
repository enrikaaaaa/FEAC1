import BusinessCard from "../../../components/business/BusinessCard/BusinessCard";
import React from "react";
import classNames from "classnames";
import styles from "./BusinessList.module.scss";
import { useBusinesses } from "../../../components/business/hooks";

interface BusinessListProps {
  categoryName?: string;
  className?: string;
}

const BusinessList = ({ categoryName, className }: BusinessListProps) => {
  const { data } = useBusinesses();
  const businesses = data ?? [];

  const filteredBusiness = categoryName
    ? businesses.filter((business: any) => business.category === categoryName)
    : businesses;

  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusiness.map((business: any) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
