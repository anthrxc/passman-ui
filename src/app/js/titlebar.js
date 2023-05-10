const { ipcRenderer } = require('electron');

const closeBtn = document.getElementById('close');
const hideBtn = document.getElementById('hide');

closeBtn.addEventListener('click', () => {
    ipcRenderer.send('close-window');
});

hideBtn.addEventListener('click', () => {
    ipcRenderer.send('hide-window');
});