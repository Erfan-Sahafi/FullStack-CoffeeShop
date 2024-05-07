const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    score: {                 
      type: Number,
      require:true,
    },
    coverImage: {
      type: String,
      require: true,
    },
    // comment:{
        
    // }
  },
  {
    timestamps: true,
  }
);
