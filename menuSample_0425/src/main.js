//投影片
//https://docs.google.com/presentation/d/1ypSYnKQsoYFt52nLcg9nrQZ44H7D40p1hSiTZXrI6LI/edit#slide=id.g5027adc6ea_0_96

import { app, BrowserWindow, Menu,dialog ,globalShortcut} from 'electron';  
//增加menu模組
//dialog模組可以呈現對話框
//globalShortcut用作讀取快速鍵

if (require('electron-squirrel-startup')) { 
  app.quit();
}

let mainWindow;

const createWindow = () => {

  let menu=Menu.buildFromTemplate([                    //新增選單
    {
      //第一層選單***********************************************************
      label:"Menu1",
      submenu:[
        {
          label:"SayHello",
          click:function(item,win){//item是sayhello的按鈕，win是那個殼
            
            ///////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////// 1
            ///////////////////////////////////////////////////////////////////////////////
            //event1是事件名稱，對應到index接收
            win.webContents.send("event1","123456");//傳給index(js)，也是IPC的動作

            console.log("sayHello");//出現在terminal中
            /*
            dialog.showMessageBox({message:"Hello"});
            //alert("hello");
            //因為index.js屬於main proccess，而alert是屬於render proccess，執行序不同>ERROR
            */
          }
        },
        {
          label:"Quit",
          click:function(){
            app.quit();         //關掉app
          }
        }
      ]
    },
    {
      //第二層選單***********************************************************
      //使用投影片P10，常用選單ROLE
      label:"Menu2",
      submenu:[
        {role:"zoomin"},
        {role:"zoomout"},
        {role:"toggleFullScreen"},
        {role:"quit"}
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);                        //取代electron預設選單\
globalShortcut.register("F11",function(){
  let full=mainWindow.isFullScreen();
  mainWindow.setFullScreen(!full);
})


////////////////////////////////////////////////////以下是原生出來的，我不知道是啥
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

function openFile(){
  //dialog開檔存檔一般對話窗，只能在main執行
  dialog.showMessageBox(null,{  //第一個參數是視窗物件，null表示不給，就是主視窗
    message:"Hi!"
  });
}

//從renderer(index.js) call這funciton，所以要把這export出去
module.exports={openFile};



