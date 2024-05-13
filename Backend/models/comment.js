const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 5,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    isAccept: {
      type: Number, // 0-1
      default: 0,
    }
  },
  { timestamps: true }
);

const model = mongoose.model("Comment", schema);

module.exports = model;
