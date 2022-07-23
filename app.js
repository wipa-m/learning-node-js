// import chalk from 'chalk'
const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = 3001;

app.use(morgan('combined'))
//use html website
app.use(express.static(path.join(__dirname,"/public/")))
// เข้ามาใน path / แแล้วจะส่งอะไรกลับไปให้ หน้าเว็บ
// app.get("/", (req, res) => {
//   res.send("Hello Fernkyouya ja");
// });

app.listen(port, () => {
  // console.log("listening on port : " + chalk.green(port));
  debug("listening on port : " + chalk.green(port));
});

