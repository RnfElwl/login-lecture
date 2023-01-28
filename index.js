"use strict";

const express = require("express");
const app = express();

//앱세팅

app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");
app.use("/", home);
const login = require("./routes/home");
app.use('/login', login)

module.exports = app;



// express 없이 작성한 서버 연결 코드
// const http = require("http");

// const app = http.createServer((req, res) =>{
//     res.writeHead(200, {"Conntent-Type": "text/html; Charset=utf-8"});
//     console.log(req.url);
//     if (req.url === '/'){
//         res.end("this is root");
//     }
//     else if(req.url === '/login'){
//         res.end("this is login screen");
//     }
// });



// app.listen(3001, () => {
//     console.log("http listen server")
// })