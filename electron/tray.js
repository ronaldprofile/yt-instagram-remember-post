const { Tray } = require("electron");
const { resolve } = require("path");

const iconInstagram = resolve(__dirname, "../", "assets", "instagram.png");

function initTray() {
  const tray = new Tray(iconInstagram);

  tray.setToolTip("Instagram remember");

  return tray;
}

module.exports = initTray();
