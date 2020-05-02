//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded(extended : true));

const port = 3000;

app.get("/", function(req, res) { 
  res.sendFile(__dirname + "index.html")
});

app.post("/", function(req, res){
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  
  let result = num1 + num2;
  
  res.send("The result is " + result);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
