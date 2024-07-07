import express, { Request, Response } from "express";
const Category = require("../models/category");

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const Categories = await Category.find();
    res.json(Categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

router.get("/search/:category", async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const foundCategory = await Category.findOne({ name: category });

    if (!foundCategory) {
      return res
        .status(404)
        .json({ message: `Category ${category} not found` });
    }

    res.json(foundCategory);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching category by name", error: err });
  }
});

export default router;
