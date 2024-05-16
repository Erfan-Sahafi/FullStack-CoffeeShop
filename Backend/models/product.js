const { default: mongoose } = require("mongoose");
require("./comment");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
    },
    cover: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.virtual('comments',{
  ref:"Comment",
  localField:"_id",
  foreignField:"product"
})

const model = mongoose.model("Product", schema);

module.exports = model;
