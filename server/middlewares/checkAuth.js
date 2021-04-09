const jwt = require("jsonwebtoken");
const { unauthorized } = require("../Response/index");

// Authorize User
module.exports = (name) => {
  return (req, res, next) => {
    let token = req.get("Authorization");
    let tokenData;

    if (!token) {
      return unauthorized(res, `Unauthorized user`, null);
    }

    token = token.split(" ")[1];
    try {
      tokenData = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
    } catch (error) {
      return unauthorized(res, `Unauthorized user`, null);
    }

    if (name === "user") req.userId = tokenData.userId;

    next();
  };
};
