// JavaScript Document
var canvas;
var stage;
var text;
var count = 0;
window.onload = function(){
	canvas = document.getElementById('canvas');
	//承载的容器 stage class
	stage = new createjs.Stage("canvas");
	text = new createjs.Text("number->", "20px Arial", "#ff7700");
	stage.addChild(text);
	//监听事件
	createjs.Ticker.setFPS(3);
	createjs.Ticker.addEventListener("tick", tick);
	};
function tick(e){
	count++;
	text.text = "number->" + count + "!";
	stage.update();
	}