//main.js  是 electron的進入點
//index.js 是 index網頁的

//require類似匯入(import)的意思

//IPC 行程間通訊，同一台電腦內傳資料。
//是雙向的，雙向於 main 和 renderer
const ipc =require('electron').ipcRenderer;
const remote=require('electron').remote;//中譯>>匯入electorn的remote模組

//node內建模組path
const path=require('path');
//找到絕對路徑
const workdir=path.resolve(__dirname);
//把路徑接再一起
const mainPath=path.join(workdir,"main.js");
//載入main，必須使用絕對路徑
const main=remote.require(mainPath);//幫你把它包在ipc上


///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////// 2
///////////////////////////////////////////////////////////////////////////////
//接收從main來的event1事件
ipc.on("event1",function(event,message){
    //呼叫main裡的openFile function，前提是function有被import

    main.openFile();
    
    //console.log(message);//顯示在網頁中的開發人員工具
})

//開檔案要在main prossess
//but 接收事件在網頁上
/*
menu在main prossess
在menu開檔案
檔案顯示在renderer
存檔再跑回main
*/