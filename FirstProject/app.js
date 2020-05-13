const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    let data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    let jsonData = JSON.stringify(data);

    const url = "https://us4.api.mailchimp.com/3.0/lists/OwnIdNumber";

    const options = {
        method: "POST",
        auth: "name : apikey"
    }

    const request = https.request(url, options, function(response){
        if(response.statusCode == 200)
        {
            res.sendFile(__dirname + "/success.html");
        }
        else
        {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();

});

app.post("/failure.html", function(req, res){
    res.redirect("/");
})

app.listen(process.env.PORT || port, function(){
    console.log("Server started on port " + port);
})
