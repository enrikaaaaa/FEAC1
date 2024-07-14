const jwt = require("jsonwebtoken");

const generateToken = (userId: any) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET environment variable is not defined.");
  }
  return jwt.sign({ id: userId }, jwtSecret, {
    expiresIn: "1h",
  });
};

module.exports = { generateToken };
