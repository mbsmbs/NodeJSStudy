# [Body Parser](http://expressjs.com/en/resources/middleware/body-parser.html)

# 1. Install body-parser
```
npm install body-parser
```

# 2. Require body-parser
```
// In ServerFile.js

const bodyParser = require("body-parser");    // Import body-parser
```

# 3. body-parser works with express
```
const app = express();

app.use(bosyParser.urlencoded{extended : true});
```
