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
# 8. Check node_modules added.

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
