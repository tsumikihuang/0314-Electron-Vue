window.$=require('jquery');
const fs=require('fs');

const remote=require('electron').remote;
const main=remote.require('./main')

$(document).ready(function(){
    $("#btOpenFile").click(function(){
        let str=fs.readFile("test.html");
        //let str=fs.readFileSync("test.html");
        //str=str.toString("utf-8");
        $("#source").val(str);

        $("#result").html(str);
    })

    $("#source").keyup(function(){
        let str=$("#source").val();
        $("#result").html(str);
    })

})