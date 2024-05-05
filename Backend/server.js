const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();


(async () => {
  if (mongoose.connections[0].readyState) {
    return false;
  }
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connected successfuly:)");
})();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is runnig in port ${port}...`);
});
