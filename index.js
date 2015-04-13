// REST API template project
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

/**
 * router
 */
var router = express.Router();

// GET: /
router.get("/", function(req, res){
    res.json({ message: "Hello, World!" });
});

// regist router
app.use("/api", router);

// start server
app.listen(port);
console.log("http://localhost:" + port);
