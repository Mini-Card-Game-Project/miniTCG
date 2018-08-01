"use strict";
const express = require("express");
const app = express();

const path = require("path");
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, "/videos")));
app.use("/public", express.static(path.join(__dirname + "/public")));
app.use("/videos", express.static(path.join(__dirname + "/videos")));



app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server is connecting to port ${port}....`);
});

module.exports = app;
