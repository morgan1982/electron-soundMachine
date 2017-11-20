const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let MainWindow;


app.on('ready', () => {
    MainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        frame: false,
        resizable: false
    })

    MainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './app/index.html'),
        protocol: 'file',
        slashes: true
    }));

    MainWindow.webContents.openDevTools();

    MainWindow.on('closed', () => {
        MainWindow = null;
    })
});

app.on('window-all-closed', () => {
    app.quit();
})



console.log("hello");






