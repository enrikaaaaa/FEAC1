import express from "express";
const User = require("../models/user");
const { generateToken } = require("../utils");

const router = express.Router();

router.post(
  "/register",
  async (req: express.Request, res: express.Response) => {
    try {
      const user = req.body;
      const existingUser = await User.findOne({ email: user.email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      const newUser = new User(user);
      await newUser.save();
      return res.status(201).json({ message: "User registered successfully" });
    } catch (err: any) {
      return res.status(500).json({
        message: "Error registering new user.",
        error: err.message,
      });
    }
  }
);

router.post("/login", async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    if (!(await user.isCorrectPassword(password))) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = generateToken(user._id);

    const userWithoutPassword = await User.findById(user._id).select(
      "-password"
    );

    return res
      .status(200)
      .json({ status: "success", token, user: userWithoutPassword });
  } catch (err: any) {
    return res
      .status(500)
      .json({ message: "Error logging in.", error: err.message });
  }
});

export default router;