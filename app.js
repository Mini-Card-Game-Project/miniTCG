const express = require("express");
const app = express();
const session = require("express-session");
const ejs = require("ejs");
const routes = require("./routes");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname + "/public")));
app.use("/videos", express.static(path.join(__dirname + "/videos")));
app.use("/audio", express.static(path.join(__dirname + "/audio")));

app.use(
  session({
    secret: "hello world",
    resave: false,
    saveUninitialized: true
  })
);

app.use("/", routes);

app.listen(3000, () => {
  console.log("listening to 3000");
});
