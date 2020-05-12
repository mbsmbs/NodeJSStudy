# 1. [Installation](https://ejs.co/#install)
```
npm i ejs
```

# 2. Create folder named 'views'

# 3. Create EJS file : FileName.ejs
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>It's <%= kindOfDay %>!</h1>
    </body>
</html>
```

# 4. app.js
```
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

// set views folder as ejs folder
app.set('view engine', 'ejs');

app.get("/", function(req, res)
{
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;

        case 0:
            day = "Monday";
            break;
    
        case 0:
            day = "Tuesday";
            break;

        case 0:
            day = "Wednesday";
            break;

        case 0:
            day = "Thursday";
            break;

        case 0:
            day = "Friday";
            break;

        case 0:
            day = "Saturday";
            break;
        default:
            break;
    }
    
    // Inside list.ejs, find 'kindOfDay' and set 'day' as a value : <%= xxx >
    res.render("list", {kindOfDay : day});
})

app.listen(port, function(){
    console.log("Server started on port " + port);
});
```

# 5. How to code inside ejs file? <% xxx %>
```
<% if(kindOfDay === "Saturday" || kindOfDay === "Sunday"){ %>
    <h1 style="color: purple;">It's <%= kindOfDay %>!</h1>
<% } else { %>
    <h1 style="color: blue;">It's <%= kindOfDay %>!</h1>
<% } %>
```

# 6. Data from web page to server
    - list.ejs
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <% if(kindOfDay === "Saturday" || kindOfDay === "Sunday"){ %>
            <h1 style="color: purple;">It's <%= kindOfDay %>!</h1>
        <% } else { %>
            <h1 style="color: blue;">It's <%= kindOfDay %>!</h1>
        <% } %>

        // -----------------------------------------
        <ul>
            <% for(let i = 0; i < newListItems.length; i++){ %>
                <li> <%= newListItems[i] %></li>    
            <% } %>
        </ul>
        <form action="/" method="POST">
            <input type="text" name="newItem">
            <button type="submit" name="button">Add</button>
        </form>
        // -----------------------------------------
    </body>
</html>
```
    
    - app.js
```
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

let newItems = ["Buy Food", "Eat Food", "Cook Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res)
{
    let today = new Date();

    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    let day = today.toLocaleDateString("en-US", options);


    res.render("list", {
        kindOfDay : day,
        newListItems : newItems
    });
});

// get data from home & add to data array & redirect to home
app.post("/", function(req, res){
    let newItem = req.body.newItem;
    newItems.push(newItem);

    res.redirect("/");
});

app.listen(port, function(){
    console.log("Server started on port " + port);
});
```

# 7. Add css file
    - Create public folder
    - Inseide public folder, create css file
    - Set express to use css file
```
app.use(express.static("public"));
```

# 8. Repeated code handling
    - Use [EJS Layouts](https://ejs.co/)
    - Ex : header.html & footer.html : Inside every ejs file
```
<%- include("header") -%>
<%- include("footer") -%>
```
