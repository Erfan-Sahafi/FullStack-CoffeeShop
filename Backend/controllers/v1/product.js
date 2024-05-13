const { default: mongoose, isValidObjectId } = require("mongoose");
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

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, href, price, category } = req.body;
    if (isValidObjectId(id)) {
      const product = await productModel.findByIdAndUpdate(
        id,
        {
          title,
          desc,
          href,
          price,
          category,
          cover: req.file.filename,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      if (!product) {
        return res.status(404).json({ message: "product id is not found!" });
      }
      return res.json({ message: "product remove successfuly:)", product });
    }
    return res.status(403).json({ message: "id is not valid!" });
  } catch (err) {
    return res.json(err);
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const product = await productModel.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: "product id is not found!" });
      }
      return res.json({ message: "product remove successfuly:)" });
    }
    return res.status(403).json({ message: "id is not valid!" });
  } catch (err) {
    return res.json(err);
  }
};
