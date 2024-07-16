import appointment from "./router/apointmentsRouter";
import auth from "./router/authRouter";
import authMiddleware from "./middlewares/authMiddleware";
import categories from "./router/categoriesRouter";
import { connectToDb } from "./db";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import services from "./router/servicesRouter";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8081;

app.use("/auth", auth);
app.use("/categories", categories, authMiddleware);
app.use("/services", services, authMiddleware);
app.use("/appointments", appointment, authMiddleware);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
