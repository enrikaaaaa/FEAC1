const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JSON_WEB_TOKEN, {
    expiresIn: "1h",
  });
};

module.exports = { generateToken };
