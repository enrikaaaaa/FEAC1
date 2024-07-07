import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  currentUser?: any;
}

const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send({ error: "Not authenticated" });
    return;
  }

  try {
    const token = authHeader.split(" ")[1];
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT_SECRET environment variable is not defined.");
    }
    const payload = jwt.verify(token, jwtSecret);
    req.currentUser = payload;
  } catch (err) {
    res.status(401).send({ error: "Not authenticated" });
    return;
  }

  next();
};

export default authMiddleware;
