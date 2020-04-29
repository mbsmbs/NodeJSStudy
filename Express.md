# Express

# 1. Create Project Folder :
  ```
  mkdir ProjectFolderName
  ```

# 2. Go to Project Folder :
  ```
  cd ProjectFolderName
  ```
  
# 3. Create ServerFile.js : 
  ```
  touch ServerFileName
  ```
  
# 4. Initialise npm :
  ```
  npm init
  ```
  
# 5. Answer the questions.

# 6. Check package.json file.

# 7. [Install Express](https://expressjs.com/ko/starter/installing.html)
  ```
  npm install express
  ```
  - Check node_modules added.
  
# 8. [Install Nodemon](https://www.npmjs.com/package/nodemon)
  - Help Tool : Automatically restart the node app when file changes are detected.
  
  - Install
  ```
  npm install -g nodemon
  ```
  
  - Execute ServerFile with nodemon
  ```
  nodemon ServerFile
  ```

# 9. Test Hello World Example

  - ServerFile.js :
  ```
  const express = require('express');
  
  const app = express();
  
  const port = 3000;
  
  app.get('/', (req, res) => res.send('Hello World!'));

  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
  
  ```
  
  - Run ServerFile.js : 
  ```
  node ServerFile.js
  ```
  
  - check console.log & site at localhost:3000

# 10. Get()
  ```
  // When we type some address like localhost:3000/someContentPage
  app.get("/someContentPage", (req, res) => res.send("This is some content page."));
  
  // same code
  app.get("/someContentPage", function(req, res){
    res.send("This is some content page."));
  }
  ```
