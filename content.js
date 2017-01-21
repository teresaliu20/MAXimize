var images = document.getElementsByTagName('img'); 
var srcList = [];
for(var i = 0; i < images.length; i++) {
	if(document.getElementsByTagName("img")[i].getAttribute("id")) {
		document.getElementById(document.getElementsByTagName("img")[i].getAttribute("id")).style.display = "none";
	}
	else {
		document.getElementsByTagName("img")[i].setAttribute("id", "censored");
		document.getElementById("censored").style.display = "none";
	}
    srcList.push(images[i].src);
}