// Test -------------------------- Importing the Packages ---------------------------------
const express = require("express");
const router = express.Router();

// Test -------------------------- The Server Side Code ----------------------------------
// Path -----> /auth/login 
router.get("/login", (req, res, next) => {
    // Get the different ways of logging in GMG
    res.send("Login with different options");
});

// Path -----> /auth/logout
router.get("/logout", (req, res) => {
    // Handle the logout process with passprot js 
    res.send("Logout")
})

// Path -----> /auth/google ------> When we are choosing an account screen
router.get("/google", (req, res) => {
    // Handle the google login process with the passport js oAuth startegy
    res.send("Login with google account")
})

// Test -------------------------- Exporting the server side code ------------------------
module.exports = router;