const express = require("express");

const app = express();

const testFunction = () => {
  console.log("Test output");
};

app.get("/test", (req, res) => testFunction());

app.listen(5050);
