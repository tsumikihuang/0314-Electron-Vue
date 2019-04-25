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

function readFile(){
  let buffer=fs.readFileSync("test.html");
  return buffer.toString("utf-8");
}

function writeFile(str){
  fs.writeFileSync("test.html", str);
}

app.on('ready', createWindow);
module.exports={
  readFile,
  writeFile
};
