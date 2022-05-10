const express = require("express");
//const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

// use custom error handler
const { Error } = require("./middleware/error");

const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//error handler
app.use(Error);

//resource and endpoints 
app.use("/api/products", require("./routes/api/products"));
app.use("/api/users", require("./routes/api/users"));

app.use(
  cors({
    origin: ["http://localhost:3000","http://localhost:8000"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

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
