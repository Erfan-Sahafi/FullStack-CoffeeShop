const productModel = require("../../models/product");
const commentModel = require("../../models/comment");

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
