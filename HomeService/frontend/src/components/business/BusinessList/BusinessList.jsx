import BusinessCard from "@/components/business/BusinessCard/BusinessCard";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./BusinessList.module.scss";
import { useBusinesses } from "@/components/business/hooks";

const BusinessList = ({ categoryName, className }) => {
  const { data } = useBusinesses();
  const businesses = data ?? [];

  const filteredBusiness = categoryName
    ? businesses.filter((business) => business.category === categoryName)
    : businesses;

  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusiness.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};

BusinessList.propTypes = {
  categoryName: PropTypes.string,
  className: PropTypes.string,
};

export default BusinessList;
