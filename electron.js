const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100, height: 800,
    minWidth: 450, minHeight:450,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false
  });

  win.loadURL(`http://localhost:3000`);
}

app.on('ready', createWindow);
