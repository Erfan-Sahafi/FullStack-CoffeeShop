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
  const { name, username, email, password, phone,address,profile } = req.body;
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
    address,
    profile,
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
exports.login = async (req, res) => {
  const { identifire, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ email: identifire }, { username: identifire }],
  });

  if (!user) {
    return res
      .status(401)
      .json({ message: "there is not user with this email or username!" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "password is not valid!" });
  }
  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
    expiresIn: "30 day",
  });
  return res.status(200).json({ accessToken });
};

// get user info controller
exports.getMe = async () => {};
