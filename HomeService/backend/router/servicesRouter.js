const express = require("express");
const router = express.Router();
const Service = require("../models/service");


router.get("/", async (req, res) => {
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

module.exports = router;
