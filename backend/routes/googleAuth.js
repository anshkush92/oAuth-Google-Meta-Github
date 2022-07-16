// Test -------------------------- Importing the Packages ---------------------------------
const express = require("express");
const router = express.Router();
const passport = require("passport");

// Test -------------------------- The Server Side Code ----------------------------------
// Path -----> /auth/login 
router.get("/login", (req, res, next) => {
    // Get the different ways of logging in GMG
    res.send("Login with different options");
});

// Path -----> /auth/logout
router.get("/logout", (req, res) => {
    // Handle the logout process with passport js 
    res.send("Logout")
})

// Path -----> /auth/google ------> When we are choosing an account screen using the passport.authenticate("google")
// Passport js takes control and sends us to the consent screen
router.get("/google", passport.authenticate("google", {
    // Basically the scope tells what information we wanna retrieve from the google account
    scope: ['profile']
}))

// Path ----> auth/google/callback -----> Now we have the code, given by google which we will use to take the information from google account 
// This time we have the code, and again using passport.authenticate("google") will fire the callback function in the passportSetup which is responsible for exchanging the information for the code
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "http://localhost:3000/login" }, (req, res) => {
    // Successfull Redirection
    res.redirect("http://localhost:3000/");
}))

// Test -------------------------- Exporting the server side code ------------------------
module.exports = router;