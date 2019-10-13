const { ipcRenderer } = require('electron');

window.sendRequest = function() {
  ipcRenderer.send('request', 'hello');
};

ipcRenderer.on('response', (event, arg) => {
  console.log(arg);
});
