import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  company: { type: String, required: true },
  name: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  address: { type: String, required: true },
  img: { type: String, required: true },
  lastName: { type: String, required: true },
});

const Service = mongoose.model("Service", serviceSchema, "Services");

module.exports = Service;
