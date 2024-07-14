// Must be run before adding date//

// Set to Light or dark
document.querySelector("body > button.btn.btn-light").addEventListener("click",setlight)
document.querySelector("body > button.btn.btn-dark").addEventListener("click",setdark)


function setlight() {
	document.querySelector("html").setAttribute("data-bs-theme","light");
	var yoda = new Audio("media/sounds/yodafeeltheforce.mp3");
	yoda.play();
}

function setdark() {
	document.querySelector("html").setAttribute("data-bs-theme","dark");
	var vader = new Audio("media/sounds/darkside.mp3");
	vader.play();
}


datesetup()

document.querySelector("body > div.alert.alert-info").innerText = "Today is "+dumpwday+" "+dumpmonth+" "+dumpday+", "+dumpyear+"\n"+dumptime+" and we are now powered by JavaScript!\n";
document.querySelector("body > button.btn.btn-primary").addEventListener("click",function() {
	var chimessound = new Audio("media/sounds/Chimes.mp3");
	chimessound.play();
	alert("Link Uptop in Menu 'Kombucha Project 2024'");
})



// Bang a gong in Art Section
document.querySelector("body > div.flex-art-container > div:nth-child(1) > img").addEventListener(
	"click", gongit)
document.querySelector("body > div.flex-art-container > div:nth-child(3) > img").addEventListener(
		"click", gongit)

function gongit() {
	var gongsound = new Audio("media/sounds/zildjian_gong.mp3");
	gongsound.play();
}


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



document.querySelector("#featured-3 > div > div:nth-child(1) > a > img").addEventListener("click",addtable1)

function addtable1() {
document.querySelector("#featured-3 > div > div:nth-child(1) > a > img").outerHTML = 
"
<table class='table'>
  <thead class='thead-dark'>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>First</th>
      <th scope='col'>Last</th>
      <th scope='col'>Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
"
}

