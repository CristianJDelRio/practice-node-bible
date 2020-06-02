const express = require("express");

const app = express();

const response = {
  data: [],
  service: "Monolithic Service",
  architecture: "Monolithic",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v1/users", (req, res) => {
  response.data.push("Marluan", "jeffrey", "Alexis");
  return res.send(response);
});

app.get("/api/v1/books", (req, res) => {
  response.data.push(
    "The Clean Coder",
    "The Pragmatic Programer",
    "Soft Skills"
  );
  return res.send(response);
});

app.get("/api/v1/cars", (req, res) => {
  response.data.push("Ferrari", "Mustang", "BMW");
  return res.send(response);
});

module.exports = app;
