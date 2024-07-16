import mongoose, { Document, Schema } from "mongoose";

interface IAppointment extends Document {
  userId: string;
  date: string;
  time: string;
  reserved: boolean;
}

const AppointmentSchema: Schema = new Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  reserved: { type: Boolean, required: true },
  img: { type: String, required: true },
  company: { type: String, required: true },
  name: { type: String, required: true },
});

const Appointment = mongoose.model<IAppointment>(
  "Appointment",
  AppointmentSchema,
  "Appointments"
);

export default Appointment;
