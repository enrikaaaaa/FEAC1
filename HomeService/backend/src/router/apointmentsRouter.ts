import express, { Request, Response } from "express";

import Apointments from "../models/appointments";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const Apointment = await Apointments.find();
    res.json(Apointment);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Apointment = await Apointments.findById(id);

    if (!Apointment) {
      return res.status(404).json({ message: "Apointment not found" });
    }

    res.json(Apointment);
  } catch (err) {
    res.status(500).json({ message: "Error fetching Apointment", error: err });
  }
});

export default router;
