//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

const port = 3000;

app.get("/", function(req, res) { 
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
    
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;
    
    res.send("The result is " + result);
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
})

app.listen(port, () => console.log(`Server started on port ${port}`));
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

app.get("/bmiCalculator", function(req,res){}


app.listen(port, function(){ 
  console.log(`Server started on port ${port}`)
});
