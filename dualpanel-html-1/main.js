const {app,BrowserWindow} = require('electron');
const fs = require('fs');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });
  win.loadFile('index.html');
  win.on('closed', () => {
    win = null;
  });
}

///new
function readFile(file){
  let str=fs.readFileSync(file);
  str=str.toString('utf-8');
  return str;
}


app.on('ready', createWindow);
module.exports={readFile};