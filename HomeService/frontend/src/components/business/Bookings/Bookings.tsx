import Appointment from "../types";
import React from "react";
import { useAppointments } from "../hooks";
import { useParams } from "react-router-dom";

const Bookings = () => {
  const { email } = useParams<{ email: string }>();
  const { data, isLoading, isError } = useAppointments(email);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching appointments.</div>;
  }

  return (
    <div>
      <h1>Bookings for {email}</h1>
      <div>
        {data?.map((appointment: Appointment) => (
          <div key={appointment._id}>
            <div>Date: {appointment.date}</div>
            <div>Time: {appointment.time}</div>
            <div>Company: {appointment.business.company}</div>
            <div>Address: {appointment.business.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
