const path = require("path");
const { BrowserWindow } = require("electron"); // https://www.electronjs.org/docs/api/browser-window

exports.createBrowserWindow = () => {
  // https://www.electronjs.org/docs/api/browser-window#class-browserwindow
  return new BrowserWindow({
    width: 1280,
    height: 720,
    icon: path.join(__dirname, "assets/icons/png/64x64.png"),
    title: "astrsk.ai",
    backgroundColor: "#fff",
    webPreferences: {
      nativeWindowOpen: true,
      devTools: false,
      contextIsolation: true,
      webviewTag: true, // https://www.electronjs.org/docs/api/webview-tag,
      preload: path.join(__dirname, "../preload.js"), // required for print function
    },
  });
};
