const bcrypt = require("bcrypt");
const userModel = require("../../models/user");
const banUserModel = require("../../models/banUser");
const registerValidator = require("../../validators/register");
const jwt = require("jsonwebtoken");

// register user controller
exports.register = async (req, res) => {
  const validationResult = registerValidator(req.body);
  // check with fastest-validator
  if (validationResult !== true) {
    return res.status(422).json(validationResult);
  }
  // get user info from request body
  const { name, username, email, password, phone } = req.body;
  // check user exsist or not
  const isUserExist = await userModel.findOne({
    $or: [{ username }, { email }, { phone }],
  });

  if (isUserExist) {
    return res.status(409).json({
      massage: "username,email or phone is duplicated.",
    });
  }
  // check user is ban or not
  const isUserBan = await banUserModel.find({ email });
  if (isUserBan.length) {
    return res.status(409).json({ message: "this phone and email is ban." });
  }

  const countOfUsers = await userModel.countDocuments();
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    username,
    email,
    phone,
    password: hashPassword,
    role: countOfUsers > 0 ? "USER" : "ADMIN",
  });

  const userObj = user.toObject();
  Reflect.deleteProperty(userObj, "password");

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
    expiresIn: "30 day",
  });

  res.status(201).json({ user: userObj, accessToken });
};

// login user controller
exports.login = async () => {};

// get user info controller
exports.getMe = async () => {};
