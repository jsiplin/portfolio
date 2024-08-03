import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;


function passwordCheck(req, res, next) {
  const password = req.body["password"];
  console.log(req.body["password"])
   if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}

app.use(express.static(path.join(__dirname, './js')));
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
res.sendFile(__dirname + "/index.html");
console.log(__dirname + "/index.html")
});

app.get("/kombucha", (req, res) => {
  res.sendFile(__dirname + "/pages/kombucha.html");
  console.log(__dirname + "/pages/kombucha.html")
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

//app.get("/secret", (req, res) => {
//    res.sendFile(__dirname + "/pages/secret/secret.html");
//    console.log(__dirname + "/pages/secret/secret.html")
//    });




app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
