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
    req.logout((error) => { console.log(error ? error : "Logged out succesfully") });
    res.redirect("http://localhost:3000/login");
})

// Path -----> /auth/google ------> When we are choosing an account screen using the passport.authenticate("google")
// Passport js takes control and sends us to the consent screen
router.get("/google", passport.authenticate("google", {
    // Basically the scope tells what information we wanna retrieve from the google account
    scope: ['profile']
}))

// Path ----> auth/google/callback -----> Now we have the code, given by google which we will use to take the information from google account 
// This time we have the code, and again using passport.authenticate("google") will fire the callback function in the passportSetup which is responsible for exchanging the information for the code
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    console.log(`Message from /google/callback ${req.user}`);
    res.redirect("http://localhost:3000/");
});

// Path ----> /login/success ----> We will use the useEffect to send request to this path, and get the user data
router.get("/login/success", (req, res) => {
    console.log(`Message from /auth/login/success ---> ${req.user}`);
    if (req.user) {
        res.status(200).json({
            success: true,
            user: req.user,
            cookies: req.cookies,
            message: "Login Successful",
        });
    }
    res.send(`Message from /auth/login/success ---> ${req.user}`);
});

// Path ----> /login/failed
router.get("/login/failed", (req, res) => {
    console.log("Authentication failed from googleAuth.js");
    res.status(401).json({
        success: false,
        message: "Login Failed Please try again",
    });
});
// Test -------------------------- Exporting the server side code ------------------------
module.exports = router;