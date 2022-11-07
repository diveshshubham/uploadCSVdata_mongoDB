const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;
var corsOptions = {
  origin: "http://localhost:8086"
};
app.use(cors(corsOptions));
setInterval(()=>{
 
})


app.use(require('express-status-monitor')())

const route = require('./router/index');

app.use(express.urlencoded({ extended: true }));

route.uploadRoutes(app);
route.defaultPage(app);
route.searchRoutes(app);
route.userPolicyRoutes(app);

function initializeDatabaseConnection(){
  require('./database/mongo/connection')
}



initializeDatabaseConnection()

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});