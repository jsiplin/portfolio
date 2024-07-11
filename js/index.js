// Must be run before adding date//
datesetup()

document.querySelector("body > div.alert.alert-info").innerText = "Today is "+dumpwday+" "+dumpmonth+" "+dumpday+", "+dumpyear+"\n"+dumptime+" and we are now powered by JavaScript!\n";
document.querySelector("body > button.btn.btn-primary").addEventListener("click",function() {
	var chimessound = new Audio("sounds/Chimes.mp3");
	chimessound.play();
	alert("Link Uptop in Menu 'Kombucha Project 2024'");
})

//window.location.href = "http://www.w3schools.com";

function datesetup(){
	var datedump = Date().split(" ");
	dumpwday = datedump[0];
	dumpmonth = datedump[1];
	dumpday = datedump[2];
	dumpyear = datedump[3];
	dumptime = datedump[4];
	function fixwd(){
		properwday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
		for (i in properwday){
			if (properwday[i].slice(0,3) == dumpwday) {
				dumpwday = properwday[i];
			}
		}
	}
	
	function fixmonth(){
		propermonth = ["January","February","March","April","May","June","July","August","September","Novemember","December"]
		for (i in propermonth){
			if (propermonth[i].slice(0,3) == dumpmonth) {
				dumpmonth = propermonth[i];
			}
		}
	}
fixwd();
fixmonth();
console.log(dumpwday + dumpmonth)	
}