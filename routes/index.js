var express = require("express");
var router = express.Router();

const User = require("../models/userSchema");
const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(User.authenticate()));

router.get("/", function (req, res, next) {
    res.render("index");
});

router.get("/login", function (req, res, next) {
    res.render("login");
});

router.get("/register", function (req, res, next) {
    res.render("register");
});

router.post("/register-user", async function (req, res, next) {
    try {
        const { username, email, name, password } = req.body;
        await User.register({ name, username, email }, password);
        res.redirect("/login");
    } catch (error) {
        res.send(error);
    }
});

router.get("/about", function (req, res, next) {
    res.render("about");
});

router.get("/profile", function (req, res, next) {
    res.render("profile");
});

module.exports = router;
