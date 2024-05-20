const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.MONGO_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
try {
  // Connect to the MongoDB cluster
  mongoose
    .connect(DB)
    .then(() => console.log("Mongoose is connected"));
} catch (e) {
  console.log("could not connect");
}

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is runnig in port ${port}...`);
});
