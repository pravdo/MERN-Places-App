const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "A unknown error occured" });
});

mongoose
  // .connect(`mongodb+srv://ben:Ben3479@cluster0.a4r2ddg.mongodb.net/`)
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
