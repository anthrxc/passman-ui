const { ipcRenderer } = require('electron');

minimizeBtn.addEventListener("click", () => {
    ipcRenderer.send("hide-window");
});

closeBtn.addEventListener("click", () => {
    ipcRenderer.send("close-window");
});