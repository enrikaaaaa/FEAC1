import React from "react";
import { useParams } from "react-router-dom";

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Business Detail for {id}</h1>
    </div>
  );
};

export default BusinessDetail;
