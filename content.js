var images = document.getElementsByTagName('img'); 
var srcList = [];
for(var i = 0; i < images.length; i++) {
	if(document.getElementsByTagName("img")[i].getAttribute("id")) {
		document.getElementById(document.getElementsByTagName("img")[i].getAttribute("id")).src = "http://docs.tfs-timetracker.com/download/attachments/2720425/TFS_Timetracker_Client_TrackingStatusGray.png?version=1&modificationDate=1460101655607&api=v2";
	}
	else {
		document.getElementsByTagName("img")[i].setAttribute("id", "censored");
		document.getElementById("censored").src = "http://docs.tfs-timetracker.com/download/attachments/2720425/TFS_Timetracker_Client_TrackingStatusGray.png?version=1&modificationDate=1460101655607&api=v2";
	}
    srcList.push(images[i].src);
}