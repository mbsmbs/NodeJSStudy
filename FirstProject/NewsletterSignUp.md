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
    
    // Fetch input datas
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    //------------------
    
    // Data to send to mailchimp
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
    /// ------------------

    // convert data to text to send mailchimp
    let jsonData = JSON.stringify(data);
    
    // to where
    const url = "https://us4.api.mailchimp.com/3.0/lists/d1f178682f";
  
    // some options
    const options = {
        method: "POST",
        auth: "minpro:ac717e5003e24aa74b921e52f87e79275-us4"
    }
    
    // get access to mailchimp
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
    
    // then write our data in mailchimp
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

# 7. Deploy with [Heroku](https://www.google.com/search?q=heroku&rlz=1C1SQJL_koCA858CA858&oq=her&aqs=chrome.0.69i59j69i57j0l2j69i60l4.1773j0j1&sourceid=chrome&ie=UTF-8)
  - add Procfile
```
web: node app.js
```
