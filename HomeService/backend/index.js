const express = require("express");
const cors = require("cors");
const categories = require("./router/categoriesRouter");
const services = require("./router/servicesRouter");
const auth = require("./router/authRouter");
// const authMiddleware = require("./midlewares/authMidleware"); 

const app = express();

app.use(express.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 8081;

app.use("/auth", auth);
app.use("/categories", categories);
app.use("/services", services);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} port.`);
});
