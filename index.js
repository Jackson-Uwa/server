const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");

const app = express();

//connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", require("./routes/api/products"));
app.use("/api/users", require('./routes/api/users'));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`server started on port => (localhost://${port})`)
);

/*
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  console.log(path.join(__filename));
  next();
};
app.use(logger)
*/
