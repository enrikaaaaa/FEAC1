const express = require("express");
const router = express.Router();
const Service = require("../models/service");

import { Request, Response } from "express";

import { ObjectId } from "mongodb";

router.get("/", async (req: Request, res: Response) => {
  try {
    const services = await Service.aggregate([
      {
        $lookup: {
          from: "Categories",
          localField: "category",
          foreignField: "_id",
          as: "categoryData",
        },
      },
      {
        $unwind: "$categoryData",
      },
      {
        $project: {
          _id: 1,
          company: 1,
          name: 1,
          lastName: 1,
          address: 1,
          category: "$categoryData.name",
          img: 1,
        },
      },
    ]);

    res.json(services);
  } catch (err) {
    console.error("Error fetching services:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const service = await Service.findById({ id: Object(id) });

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(service);
  } catch (err) {
    console.error("Error fetching service:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
