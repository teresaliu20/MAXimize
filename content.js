var images = document.getElementsByTagName('img'); 
var srcList = [];
var numCustomClasses = 0;

function start() {

	for(var i = 0; i < images.length; i++) {
		if(document.getElementsByTagName("img")[i].getAttribute("id")) {
			document.getElementById(document.getElementsByTagName("img")[i].getAttribute("id")).src = "https://about.usc.edu/files/2011/07/Nikias.jpg";
		}
		else {
			document.getElementsByTagName("img")[i].setAttribute("class", "censored");
			numCustomClasses++;
		}
    	srcList.push(images[i].src);
	}

	for(i = 0; i < numCustomClasses; i++) {
		document.getElementsByClassName("censored")[i].src = "https://about.usc.edu/files/2011/07/Nikias.jpg";
	}
}

start();
