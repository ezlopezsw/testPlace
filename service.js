const Service = require("node-linux").Service;
// const { spawn } = require("child_process");
// const { getArgumentValue } = require("./service/services/argumentReader");

const installationType = "install";

// Create a new service object
const svc = new Service({
  name: `test`,
  description: `Test Agent`,
  script: "/home/eze/testPlace/index.js",
  nodeOptions: ["--harmony", "--max_old_space_size=4096"],
  maxRetries: 0,
  abortOnError: true,
  stopparentfirst: false,
});

// Stops service and listen for the "Uninstall" event, which indicates the
// process has stopped and is uninstalled.

/*svc.stop();

svc.on('uninstall', function () {
  console.log('Uninstall complete.');
  console.log('The service exists: ', svc.exists);
});

svc.uninstall();*/

svc.on("install", function () {
  console.log("Service installed");
  console.log("The service exists: ", svc.exists);
  svc.start();
});

svc.install();
