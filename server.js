require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Mongoose DB
mongoose.connect(process.env.DATABASE_URL, {
  authSource: "admin",
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASSWORD,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected Databases"));

//ROUTE
app.use(express.json());
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(4000, () => console.log("Server Started"));
