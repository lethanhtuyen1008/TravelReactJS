const config = require("./common/config/env.config.js");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const AuthorizationRouter = require('./authorization/routes.config');
const UsersRouter = require('./users/routes.config');
const TourRouter = require('./route.config');
const LoaiTourRouter = require('./loaiTour/route.config');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.send(200);
  } else {
    return next();
  }
});

//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);
TourRouter.routesConfig(app);
LoaiTourRouter.routesConfig(app);

app.listen(process.env.PORT || config.port, function() {
  console.log("app listening at port %s", config.port);
});
