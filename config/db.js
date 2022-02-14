const mongoose = require("mongoose");

const connectDB = async () => {
   try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo database started at port ${conn.connection.host}`);
  } catch (error) {
    console.log(console.error);
    process.exit(1)
  }
};

module.exports = connectDB;
