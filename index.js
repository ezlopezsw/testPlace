const express = require("express");

const app = express();

const testFunction = () => {
  return "Test output";
};

app.get("/test", (req, res) => rest.send(testFunction()));

app.listen(5050);
