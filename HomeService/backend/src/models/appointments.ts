import mongoose from "mongoose";

const apointmentSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  datetime: { type: String, required: true },
  user: { type: String, required: true },
});

const Category = mongoose.model("Apointment", apointmentSchema, "Apointments");

module.exports = Category;
