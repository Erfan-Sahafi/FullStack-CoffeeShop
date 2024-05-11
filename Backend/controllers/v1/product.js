const productModel = require("../../models/product");

exports.createProduct = async (req, res) => {
  try {
    const { title, desc, href, price, category } = req.body;

    const product = await productModel.create({
      title,
      desc,
      href,
      price,
      category,
      cover: req.file.filename,
    });

    if (!product) {
      return res.status(403).json("product create error!!");
    }
    return res.status(201).json({
      message: "product create successfuly:)",
      product,
    });
  } catch (err) {
    return res.json(err);
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await productModel.find({}).populate("comment").lean();
    if (!products) {
      return res.status(403).json({
        message: "product get error!",
      });
    }
    return res.json({
      products,
    });
  } catch (err) {
    return res.json(err);
  }
};

exports.getOne = async (req, res) => {
  try {
    const { href } = req.params;
    const product = await productModel.findOne({ href });
    if (!product) {
      return res.status(404).json({ message: "product not found!" });
    }
    return res.json({ product });
  } catch (err) {
    return res.json(err);
  }
};
