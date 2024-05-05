const userModel = require("../../models/user");
const banUserModel = require("../../models/banUser");

exports.banUser = async (req, res) => {
  const { id } = req.params;
  const mainUser = await userModel.findOne({ _id: id }).lean();
  const banUserResult = await banUserModel.create({
    email: mainUser.email,
    phone: mainUser.phone,
  });

  if (banUserResult) {
    return res.status(200).json({ message: "user ban successfuly:)" });
  }
  return res.status(500).json({ message: "server Error!!" });
};
