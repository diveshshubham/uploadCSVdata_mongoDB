# Upload CSV file detais in mongoDB

## Details

- In this project you can upload your data of a csv file into mongoDb and then can perform a search operation by userName (regex) and get policy details by each userId 

## How to Start

- install the pacakages and dependencies by running npm install --save
- make and .env file and write your credentials there as per the sample_env.txt file
- after installation of npm pacakages run the command npm start or nodemon server.js in the default project directory

## Paths

- http://localhost:8086/uploadDataCSV -> POST to upload CSV details in MongoDB

- http://localhost:8086/searchUser?userSearchString={userName String min 3 charcter} -> GET search policy details by useName

- http://localhost:8086/userPolicyDetailsById/{userId} -> GET get policy by each userId

## Author

**Shubham Divesh**

- [Profile](https://github.com/diveshshubham "Shubham Divesh")
- [Email](mailto:divesh.shubham@gmail.com?subject=Hi "Hi!")


## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!