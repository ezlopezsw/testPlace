const Service = require("node-linux").Service;
// const { spawn } = require("child_process");
// const { getArgumentValue } = require("./service/services/argumentReader");

// Create a new service object
const svc = new Service({
  name: `test`,
  description: `Test Agent`,
  script: "/home/eze/testPlace/index.js",
});

svc.on("install", function () {
  console.log("Service installed");
  console.log("The service exists: ", svc.exists);
  svc.start();
});
svc.install();
