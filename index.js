const express = require("express");

const app = express();

const testFunction = () => {
  return "Test output /n";
};

app.get("/test", (req, res) => res.send(testFunction()));

app.listen(5050);
