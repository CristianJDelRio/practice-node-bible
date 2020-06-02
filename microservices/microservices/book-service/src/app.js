const express = require("express");

const app = express();

const response = {
  data: [],
  service: "Books Service",
  architecture: "MicroService",
};

const logger = (message) => console.log("[📚 Books Service]: " + message);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/books", (req, res) => {
  response.data.push(
    "The Clean Coder",
    "The Pragmatic Programer",
    "Soft Skills"
  );
  logger("Get Books");

  return res.send(response);
});

module.exports = app;
