var express = require("express");
var app = express();
var multer = require("multer");

var indexRouter = require("./routes/index");

let mongoose = require("mongoose");

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/app")
  .then(() => {
    console.log("mongodb started.");
    app.listen(3000, () => {
      console.log("Server started on 3000");
    });
  })
  .catch(() => {
    console.log("Mongodb connection failed.");
  });

app.use("/", indexRouter);
