const mongoose = require("mongoose");
require('dotenv').config();
const dbUrl = process.env.dbURL;

const params = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const connectToMongo = async () => {
  try {
    const connect = await mongoose.connect(dbUrl,params);
    console.log(`DB Connected to ${dbUrl}`);
  }
  catch (error) {
    console.log(error)
    process.exit()
  }
}
module.exports = connectToMongo;