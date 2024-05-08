const { default: mongoose } = require("mongoose");
require('./comment')

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
    score: {
      type: Number,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    comment: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Comment",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Product",schema)

module.exports = model