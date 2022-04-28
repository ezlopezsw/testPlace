const express = require("express");

const app = express();

const testFunction = () => {
  console.log("Test output");
};

app.listen(5050);

app.get("/test", (req, res) => testFunction());
