import express, { Request, Response } from "express";
const Apointments = require("../models/appointments");

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const Apointment = await Apointments.find();
    res.json(Apointment);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

router.put("/update/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedApointment = await Apointments.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json(updatedApointment);
  } catch (err) {
    res.status(500).json({ message: "Error updating apointment", error: err });
  }
});

export default router;
