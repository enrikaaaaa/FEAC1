const express = require("express");
require("dotenv").config();
const { MongoClient } = require("mongodb");

const router = express.Router();
const URI = process.env.MONGO_URL;
const client = new MongoClient(URI);

router.post("/login", async (req, res) => {
  try {
    await client.connect();
    const data = await client
      .db("Logoipsum")
      .collection("Users")
      .find()
      .toArray();
    await client.close();
    return res.send(data);
  } catch (err) {
    return res.status(500).send({ err });
  }
});

router.post("/register", async (req, res) => {
  try {
    await client.connect();
    const userData = req.body;
    const result = await client
      .db("Logoipsum")
      .collection("Users")
      .insertOne(userData);

    await client.close();

    res.status(201).json({ message: "Registration successful", userData });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err });
  }
});

module.exports = router;
