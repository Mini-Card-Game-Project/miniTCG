const express = require('express');
const app = express();
const session = require('express-session');
const routes = require ('./routes')
const path = require ('path');
const port = process.env.PORT || 3000

app.set ('view engine', 'ejs')
app.set ('views', path.join(__dirname, 'views'))

app.use (express.json());
app.use (express.urlencoded({extended:false}));
app.use("/public", express.static(path.join(__dirname + "/public")));
app.use("/videos", express.static(path.join(__dirname + "/videos")));
app.use("/audio", express.static(path.join(__dirname + "/audios")));

app.use(session({
    secret: 'hello world',
    resave: false,
    saveUninitialized: false,
  }))
  
app.use('/', routes);


app.listen(port, ()=> {
  console.log('listening')
})
