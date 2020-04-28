# 1. [NPM Documentation](https://docs.npmjs.com/)

# 2. Creating a new package.json file
  - In CMD, move to project folder
  - Run the following command:
  ```
  npm init
  ```
  - Answer the questions

# 3. How to install some npm package?
  - In CMD : 
  ```
  npm install PackageName
  ```
  
  - After Installation, check 'dependencies' in JSON file
  
  - In index.js :
  ```
  var somePackageName = require('somePackageName');       // use some module
  ```
