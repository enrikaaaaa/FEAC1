import Button from "../../../components/common/Button/Button";
import { ROUTES } from "../../../routes/consts";
import React from "react";
import styles from "./BusinessCard.module.scss";
import { useNavigate } from "react-router-dom";

interface BusinessCardProps {
  business: {
    img: string;
    company: string;
    name: string;
    lastName: string;
    address: string;
    category: string;
  };
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(ROUTES.BOOK_NOW);
  };

  return (
    <div className={styles.card}>
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
        <p
          className={styles.contactPerson}
        >{`${business.name} ${business.lastName}`}</p>
        <p className={styles.address}>{business.address}</p>
        <Button onClick={handleBookNow}>Book now</Button>
      </div>
    </div>
  );
};

export default BusinessCard;
