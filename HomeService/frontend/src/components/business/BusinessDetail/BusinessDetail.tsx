import React, { useMemo } from "react";

import BusinessSidebarModal from "../BusinessSidebarModal/BusinessSidebarModal";
import Button from "../../common/Button/Button";
import styled from "../BusinessDetail/BusinessDetail.module.scss";
import { useBusinesses } from "../hooks";
import { useParams } from "react-router-dom";
import { useState } from "react";

interface Business {
  _id: string;
  company: string;
  address: string;
  category: string;
  name: string;
  lastName: string;
  email: string;
  img: string;
}

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: businesses, isLoading, error } = useBusinesses();
  const [isOpen, setIsOpen] = useState(false);

  const business = useMemo(() => {
    return businesses?.find(
      (business: { _id: string | undefined }) => business._id === id
    );
  }, [businesses, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching business: {error.message}</div>;
  }

  if (!business) {
    return <div>No business found.</div>;
  }

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styled.intro}>
        <div className={styled.rightSide}>
          <div className={styled.rightSideTop}>
            <img
              className={styled.roundedImage}
              src={business.img}
              alt={business.company}
            />

            <div className={styled.about}>
              <h2 className={styled.chip}>{business.category}</h2>
              <h1>{business.company}</h1>
              <p>{business.address}</p>
              <p>{business.email}</p>
            </div>
          </div>
          <div className={styled.rightSideDescription}>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              tempora eos quidem atque aspernatur maxime iste, omnis laboriosam
              numquam quod! Ipsa nostrum incidunt magni aperiam repudiandae
              commodi dicta fugit ullam!
            </p>
            <h2>Gallary</h2>
            <img
              className={styled.gallary}
              src={business.img}
              alt={business.company}
            />
          </div>
        </div>

        <div className={styled.leftSide}>
          <Button small>
            <img
              src="https://img.icons8.com/?size=100&id=105543&format=png&color=ffffff"
              alt="Icon"
              className={styled.buttonIcon}
            ></img>
          </Button>
          {business.name} {business.lastName}
          <p>available</p>
          <Button small className={styled.longButton} onClick={openModal}>
            <img
              src="https://img.icons8.com/?size=100&id=bysMwFsPqzFF&format=png&color=ffffff"
              alt="icon"
              className={styled.buttonIcon}
            ></img>
            Book Appointment
          </Button>
          <BusinessSidebarModal isOpen={isOpen} onClose={closeModal} />
          <div className={styled.leftSideBusiness}>
            <h2>Similar Business</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
