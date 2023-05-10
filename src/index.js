const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 750,
        resizable: false,
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        backgroundColor: '#FFF',
        trafficLightPosition: {
            x: 15,
            y: 13
        },
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('./src/app/html/home.html');

    ipcMain.on("close-window", () => {
        mainWindow.close();
    });

    ipcMain.on("hide-window", () => {
        mainWindow.minimize();
    });
};

app.whenReady().then(
    () => {
        createWindow();

        app.on("activate", () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow();
            };
        });
    }
);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    };
});