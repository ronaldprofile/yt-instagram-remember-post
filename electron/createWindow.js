const { BrowserWindow } = require("electron");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 300,

    show: false,
    resizable: false,
    frame: false,
    fullscreenable: false
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("blur", () => mainWindow.hide);

  return mainWindow;
}

module.exports = createWindow();
