require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { connectToDb } = require("./db");
const categories = require("./router/categoriesRouter");
const services = require("./router/servicesRouter");
const auth = require("./router/authRouter");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8081;

app.use("/auth", auth);
app.use("/categories", categories);
app.use("/services", services);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
