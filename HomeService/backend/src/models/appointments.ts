import mongoose from "mongoose";

const apointmentSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Apointments",
    required: true,
  },
  datetime: { type: String, required: true },
  user: { type: String, required: true },
});

const Apointments = mongoose.model(
  "Apointment",
  apointmentSchema,
  "Apointments"
);

export default Apointments;
