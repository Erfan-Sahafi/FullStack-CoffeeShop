const userModel = require("../../models/user");
const banUserModel = require("../../models/banUser");
const { isValidObjectId } = require("mongoose");

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

exports.getAll = async (req, res) => {
  try {
    const users = await userModel.find({}, "-password");
    return res.json(users);
  } catch (err) {
    return res.json(err);
  }
};

exports.removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const userRemove = await userModel.findByIdAndDelete({ _id: id });
      if (!userRemove) {
        return res.status(404).json("id is not found!!");
      }
      return res.json("user removed successfuly:)");
    } else {
      return res.status(403).json("id is not valid!!");
    }
  } catch (err) {
    return res.json(err);
  }
};

exports.changeUserRole = async (req, res) => {
  try {
    const { id } = req.body;
    if (isValidObjectId(id)) {
      const user = await userModel.findOne({ _id: id });
      let newRole = user.role === "ADMIN" ? "USER" : "ADMIN";

      const updateRole = await userModel.findByIdAndUpdate(
        { _id: id },
        { role: newRole }
      );
      if (!updateRole) {
        return res.status(404).json("id is not found!!");
      }
      return res.json("user role updated successfuly:)");
    } else {
      return res.status(403).json("id is not valid!!");
    }
  } catch (err) {
    return res.json(err);
  }
};
