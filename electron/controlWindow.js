function controlWindow(window, tray) {
  function toggle() {
    if (window.isVisible()) {
      window.hide();
    } else {
      show();
    }
  }

  function show() {
    const { axisX, axisY } = getPosition();
    window.setPosition(axisX, axisY, false);

    window.show();
    window.focus();
  }

  function getPosition() {
    const windowBounds = window.getBounds();
    const trayBounds = tray.getBounds();

    const axisX = Math.round(
      trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
    );
    const axisY = Math.round(trayBounds.y + trayBounds.height + 3);

    return { axisX, axisY };
  }

  return {
    toggle
  };
}

module.exports = controlWindow;
