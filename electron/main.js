const { app } = require("electron");
const controlWindow = require("./controlWindow");

function App() {
  const window = require("./createWindow");
  const tray = require("./tray");

  const { toggle } = controlWindow(window, tray);

  tray.on("click", toggle);
}

app.whenReady().then(() => {
  App();
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
