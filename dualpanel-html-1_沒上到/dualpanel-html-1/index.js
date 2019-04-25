window.$=require('jquery');
const remote=require("electron").remote;
const {readFile, writeFile}=remote.require('./main');

$(document).ready(function(){
    $("#btOpenFile").click(function(){
        let str=readFile();
        $("#source").val(str);
        $("#result").html($("#source").val());
    });

    $("#source").keyup(function(){
        $("#result").html($("#source").val());
    });
});