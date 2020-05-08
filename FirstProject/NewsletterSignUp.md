# 1. Setting up Newletter SignUp Project
  
# 2. Set static folder
```
app.use(express.static("public"));
```
  - inside public folder : css, images...

# 3. [Use Bootstrap Sign Up example](https://getbootstrap.com/docs/4.4/examples/sign-in/)
  - Copy html & css files

# 4. GET
```
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});
```

# 5. POST
```
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

    const url = "https://us4.api.mailchimp.com/3.0/lists/d1f178682f";

    const options = {
        method: "POST",
        auth: "minpro:ac717e5003e24aa74b921e52f87e79275-us4"
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
```

# 6. if failure.html
```
app.post("/failure.html", function(req, res){
    res.redirect("/");
})
```
