import { Request, Response } from "express";

import Service from "../models/service";
import express from "express";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error("Error fetching services:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (err) {
    console.error("Error fetching service:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/category/:category", async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const services = await Service.find({ category });
    res.json(services);
  } catch (err) {
    console.error("Error fetching services by category:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
