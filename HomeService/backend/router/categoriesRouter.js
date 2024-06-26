const express = require("express");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const authMiddleware = require("../midlewares/authMidleware");

const router = express.Router();
const URI = process.env.MONGO_URL;
const client = new MongoClient(URI);

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const data = await client
      .db("Logoipsum")
      .collection("Categories")
      .find()
      .toArray();
    await client.close();
    return res.send(data);
  } catch (err) {
    return res.status(500).send({ err });
  }
});

router.get("/search/:category", async (req, res) => {
  try {
    const { category } = req.params;
    await client.connect();
    const data = await client
      .db("Logoipsum")
      .collection("Categories")
      .findOne({ name: category });
    await client.close();

    if (!data) {
      return res
        .status(404)
        .json({ message: `Category ${category} not found` });
    }

    res.json(data);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching category by name", error: err });
  }
});

module.exports = router;
