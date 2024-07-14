import React, { useMemo } from "react";

import styled from "../BusinessDetail/BusinessDetail.module.scss";
import { useBusinesses } from "../hooks";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      <div className={styled.intro}>
        <div className={styled.rightSide}>
          <img
            className={styled.roundedImage}
            src={business.img}
            alt={business.company}
          />
          <div>
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
          </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
