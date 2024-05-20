const express = require("express");
const path = require("path");
const authRouter = require("./routes/v1/auth");
const userRouter = require("./routes/v1/user");
const productRouter = require("./routes/v1/product");
const commentRouter = require("./routes/v1/comment");
const cors = require("cors");

const app = express();
app.use(
  "/products/covers",
  express.static(path.join(__dirname, "public", "products", "covers"))
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/v1/auth", authRouter);
app.use("/v1/users", userRouter);
app.use("/v1/products", productRouter);
app.use("/v1/comments", commentRouter);


module.exports = app;
