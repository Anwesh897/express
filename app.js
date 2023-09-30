var express = require("express");
var app = express();

app.get("/", function (req, res) {
    // req.write("Hello world");
    res.send("Though wise men at their and know dar is right")
})

app.listen(3000, function (req, res) {
    console.log("Go to port 3000")
})   