const express = require("express");

const app = express();

const response = {
  data: [],
  service: "Cars Service",
  architecture: "MicroService",
};

const logger = (message) => console.log("[🚗 Cars Service]: " + message);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/cars", (req, res) => {
  response.data.push("Ferrari", "Mustang", "BMW");
  logger("Get Cars");

  return res.send(response);
});

module.exports = app;
