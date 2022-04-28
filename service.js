const Service = require("node-linux").Service;
// const { spawn } = require("child_process");
// const { getArgumentValue } = require("./service/services/argumentReader");

// Create a new service object
const svc = new Service({
  name: `test`,
  description: `Test Agent`,
  script: ".\\index.js",
  nodeOptions: ["--harmony", "--max_old_space_size=4096"],
  maxRetries: 0,
  abortOnError: true,
  stopparentfirst: false,
});

// Stops service and listen for the "Uninstall" event, which indicates the
// process has stopped and is uninstalled.

svc.stop();

svc.on("uninstall", function () {
  console.log("Uninstall complete.");
  /*if (installationType === "reinstall") {
    console.log("Reinstalling service");
    svc.install();
  } else {
    console.log("The service exists: ", svc.exists);
  }*/
});

svc.uninstall();

// Listen for the "install" event, which indicates the
// process is available as a service.

svc.on("install", function () {
  console.log("Service installed");
  console.log("The service exists: ", svc.exists);

  // Set Windows Service Recovery options
  // (actions) Wait 1 minute after each restart, and keep restarting indefinitely
  // (reset) Must pass 30 seconds without failures to reset the failure count
  /*spawn(
    "sc.exe",
    `failure edmagentv${appVersionNumber}.exe reset= 30 actions= restart/60000`.split(
      " "
    )
  );*/

  // Disable service (if specified)
  /*if (startupType === "disabled") {
    spawn("powershell.exe", [
      `Set-Service -Name "edmagentv${appVersionNumber}.exe" -Status stopped -StartupType disabled`,
    ]);

    return;
  }*/

  svc.start();
});
svc.install();
