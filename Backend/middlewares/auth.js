const userModel = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req?.header("Authorization")?.split(" ");

  if (authHeader?.length !== 2) {
    return res.status(403).json({
      message: "this route is protected and you can't have access to it!!",
    });
  }

  const token = authHeader[1];
  try {
    const jwtPayload = jwt.verify(token, process.env.JWT_KEY);
    const user = await userModel.findById(jwtPayload.id).lean();
    Reflect.deleteProperty(user, "password");
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json(err);
  }
};
