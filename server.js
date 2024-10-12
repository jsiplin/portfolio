import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("public"));

var userIsAuthorised = false;


function passwordCheck(req, res, next) {
  const password = req.body["password"];
  //console.log(req.body["password"]);
   if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  };
  next();
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passwordCheck);

app.post("/passcheck", (req, res) => {
  console.log("Uptop:"+userIsAuthorised)


  if (userIsAuthorised) {
    res.sendFile(__dirname + "/pages/secret/secret.html");
  } else {
    res.sendFile(__dirname + "/pages/passcheck.html");
    //Alternatively res.redirect("/");
  }
});

app.get("/", (req, res) => {
//res.sendFile(__dirname + "/index.html");
//console.log(__dirname + "/index.html")

function whatsthemonth(monthnumber) {
  // daynumber = 1;
  if (monthnumber === 0)
    return 'January';
  else if (monthnumber === 1 )
    return 'February';
  else if (monthnumber === 2 )
    return 'March';
  else if (monthnumber === 3 )
    return 'April';
  else if (monthnumber === 4 )
    return 'May';
  else if (monthnumber === 5 )
    return 'June';
  else if (monthnumber === 6 )
    return 'July';
  else if (monthnumber === 7 )
    return 'August';
  else if (monthnumber === 8 )
    return 'September';
  else if (monthnumber === 9 )
    return 'October';
  else if (monthnumber === 10 )
    return 'November';
  else if (monthnumber === 11 )
    return 'December';

}

function whatstheday(daynumber) {
  // daynumber = 1;
  if (daynumber === 0)
    return 'Sunday';
  else if (daynumber === 1 )
    return 'Monday';
  else if (daynumber === 2 )
    return 'Tuesday';
  else if (daynumber === 3 )
    return 'Wednesday';
  else if (daynumber === 4 )
    return 'Thursday';
  else if (daynumber === 5 )
    return 'Friday';
  else if (daynumber === 6 )
    return 'Saturday';
}

function pullfromdate(needed){
	var datedump = Date().split(" ");
	if (needed === 'time')
    return datedump[4];
  if (needed === 'zone')
    return datedump[6]+" "+datedump[7]+" "+datedump[8];
  console.log(Date());
}


var datepassing = new Date();
var daypassing = whatstheday(datepassing.getDay());
var monthpassing = whatsthemonth(datepassing.getMonth());
var yearpassing = datepassing.getFullYear();
var zonepassing = pullfromdate('zone');
var timepassing = pullfromdate('time');
var daynumpassing = datepassing.getDate();

res.render("index.ejs", {
  date: datepassing ,
  day: daypassing,
  daynumber: daynumpassing,
  month: monthpassing,
  year: yearpassing,
  timezone: zonepassing,
  time: timepassing,
});

});

app.get("/kombucha", (req, res) => {
  res.render("kombucha.ejs", {

  });
  
  });


app.get("/resume", (req, res) => {
    res.sendFile(__dirname + "/pages/resume.html");
    console.log(__dirname + "/pages/resume.html")
    });

app.get("/offerings", (req, res) => {
    res.sendFile(__dirname + "/pages/offerings.html");
    console.log(__dirname + "/pages/offerings.html")
    });

app.get("/passcheck", (req, res) => {
    res.sendFile(__dirname + "/pages/passcheck.html");
    console.log(__dirname + "/pages/passcheck.html")
    });

app.get("/calendar", (req, res) => {
  res.render("calendarscrap.ejs", {});
  //res.sendFile(__dirname + "/pages/calendar.html");

  
  });

app.get("/voting", (req, res) => {
  res.render("voting.ejs", {});
  //res.sendFile(__dirname + "/pages/calendar.html");
  });

app.get("/calendarscrap", (req, res) => {
  res.render("calendarscrap.ejs", {});
  //res.sendFile(__dirname + "/pages/calendar.html");
  });

app.get("/batches", (req, res) => {
  res.render("batches.ejs", {});
  //res.sendFile(__dirname + "/pages/calendar.html");
  });

//app.get("/secret", (req, res) => {
//    res.sendFile(__dirname + "/pages/secret/secret.html");
//    console.log(__dirname + "/pages/secret/secret.html")
//    });


app.post("/submit", (req, res) => {
  console.log(req.body);
});

//app.listen(port, () => {
//  console.log(`Listening on port ${port}`);
//});

app.listen(process.env.PORT || port, '0.0.0.0', () => {
  console.log("Server is running.");
});




