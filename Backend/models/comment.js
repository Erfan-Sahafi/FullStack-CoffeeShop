const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Comment", schema);

module.exports = model;
