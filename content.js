// Created by Nishir Shelat, Teresa Liu, and Melissa Wen
// Fight On!

var images = document.getElementsByTagName('img'); 
var srcList = [];
var numCustomClasses = 0;

function start() {

	for(var i = 0; i < images.length; i++) {
		if(document.getElementsByTagName("img")[i].getAttribute("id")) {
			document.getElementById(document.getElementsByTagName("img")[i].getAttribute("id")).src = "https://nishirshelat.com/images/nikias.jpg";
			document.getElementById(document.getElementsByTagName("img")[i].getAttribute("id")).style = "object-fit: fill";
		}
		else {
			document.getElementsByTagName("img")[i].setAttribute("class", "censored");
			numCustomClasses++;
		}
    	srcList.push(images[i].src);
	}

	for(i = 0; i < numCustomClasses; i++) {
		document.getElementsByClassName("censored")[i].src = "https://news.usc.edu/files/2013/01/Nikias.jpg";
		document.getElementsByClassName("censored")[i].style = "object-fit: fill";
	}
}

start();
