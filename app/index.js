"use strict";
// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//라우팅
const home = require("./src/routes/home");
//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);
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
