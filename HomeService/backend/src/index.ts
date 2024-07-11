import authMiddleware from "./middlewares/authMiddleware";
import categories from "./router/categoriesRouter";
import { connectToDb } from "./db";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const auth = require("./router/authRouter");
const services = require("./router/servicesRouter");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8081;

app.use("/auth", auth);
app.use("/categories", categories, authMiddleware);
app.use("/services", services, authMiddleware);
app.use("/appointments", authMiddleware);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
