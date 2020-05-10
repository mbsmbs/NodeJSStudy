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
    
    // Inside list.ejs, find 'kindOfDay' and set 'day' as a value 
    res.render("list", {kindOfDay : day});
})

app.listen(port, function(){
    console.log("Server started on port " + port);
});
```
