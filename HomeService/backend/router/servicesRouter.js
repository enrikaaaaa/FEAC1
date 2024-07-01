const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const router = express.Router();
const URI = process.env.MONGO_URL;
const client = new MongoClient(URI);

router.get("/", async (req, res) => {
  try {
    await client.connect();

    const servicesCollection = client.db("Logoipsum").collection("Services");
    const categoriesCollection = client.db("Logoipsum").collection("Categories");

    const data = await servicesCollection.aggregate([
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
          lastname: 1,
          address: 1,
          category: "$categoryData.name",
          img: 1,
        },
      },
    ]).toArray();

    await client.close();

    return res.json(data);
  } catch (err) {
    console.error("Error fetching services:", err);
    return res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = router;
