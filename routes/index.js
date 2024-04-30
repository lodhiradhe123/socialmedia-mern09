var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index");
});

router.get("/login", function (req, res, next) {
    res.render("login");
});

router.get("/register", function (req, res, next) {
    res.render("register");
});

router.get("/about", function (req, res, next) {
    res.render("about");
});

module.exports = router;
