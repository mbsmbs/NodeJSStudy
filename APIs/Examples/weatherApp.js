const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){

    const query = req.body.cityName;
    const apiKey = "5cb10eaedcb9a09753f0c012ca415d18";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units=" + unit;

    https.get(url,function(weatherResponse){
        console.log(weatherResponse.statusCode);

        weatherResponse.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in "+ query + " is " + temp + " degrees Celcius.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });
});

app.listen(port, function(req, res){
    console.log("Server started on port " + port);
});
