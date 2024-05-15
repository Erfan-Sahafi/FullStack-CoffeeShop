const productModel = require("../../models/product");
const commentModel = require("../../models/comment");
const { isValidObjectId } = require("mongoose");

exports.createComment = async (req, res) => {
  try {
    const { body, productHref, score, isAccept } = req.body;
    const product = await productModel.findOne({ href: productHref }).lean();
    const comment = await commentModel.create({
      body,
      product: product._id,
      creator: req.user._id,
      score,
      isAccept: 0,
    });
    if (!comment) {
      return res.status(409).json({ message: "comment create failed!" });
    }
    return res.status(201).json({
      message: "comment create successfuly:)",
      comment,
    });
  } catch (err) {
    return res.json(err);
  }
};

exports.removeComment = async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const comment = await commentModel.findByIdAndDelete(id);
      if (!comment) {
        return res.status(403).json({ message: "error in comment remove" });
      }
      return res.json({ message: "comment remove successfuly:)" });
    }
    return res.status(404).json({ message: "comment id is not valid" });
  } catch (err) {
    return res.json(err);
  }
};

exports.acceptComment = async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const comment = await commentModel.findByIdAndUpdate(
        id,
        { isAccept: 1 },
        { new: true }
      );
      if (!comment) {
        return res.status(403).json({ message: "comment is not found!" });
      }
      return res.json({ message: "comment accepted:)", comment });
    }
    return res.status(404).json({ message: "comment id is not valid!" });
  } catch (err) {
    return res.json(err);
  }
};

exports.rejectComment = async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const comment = await commentModel.findByIdAndUpdate(
        id,
        { isAccept: 0 },
        { new: true }
      );
      if (!comment) {
        return res.status(403).json({ message: "comment is not found!" });
      }
      return res.json({ message: "comment rejected:(", comment });
    }
    return res.status(404).json({ message: "comment id is not valid!" });
  } catch (err) {
    return res.json(err);
  }
};
