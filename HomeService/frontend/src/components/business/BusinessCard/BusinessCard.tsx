import React, { useState } from "react";

import BusinessSidebarModal from "../BusinessSidebarModal/BusinessSidebarModal";
import Button from "../../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/consts";
import styles from "./BusinessCard.module.scss";

interface BusinessCardProps {
  business: {
    img: string;
    company: string;
    name: string;
    lastName: string;
    address: string;
    category: string;
    _id: string;
  };
  onClick?: () => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Link to={`/business/${business._id}`} className={styles.card}>
      <div className={styles.cardContent} onClick={onClick}>
        {business.img && (
          <img
            src={business.img}
            alt={business.company}
            className={styles.image}
          />
        )}
        <div className={styles.infoContainer}>
          <span className={styles.chip}>{business.category}</span>
          <h3 className={styles.name}>{business.company}</h3>
          <p className={styles.contactPerson}>
            {`${business.name} ${business.lastName}`}
          </p>
          <p className={styles.address}>{business.address}</p>
          <Button onClick={openModal}>Book now</Button>
          <BusinessSidebarModal isOpen={isOpen} onClose={closeModal} />
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;
