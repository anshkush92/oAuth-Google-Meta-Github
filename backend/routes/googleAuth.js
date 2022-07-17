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
    // Handle the logout process with passport js (after update needs callback function)
    req.logout((error) => { console.log(error ? error : "Logged out succesfully") });
    res.redirect("http://localhost:3000/login");
})

// Path -----> /auth/google ------> 
// Passport JS takes us to the google accounts screen, where we can allow or deny to login from certain account
router.get("/google", passport.authenticate("google", {
    // Basically the scope tells what information we wanna retrieve from the google account
    scope: ['profile']
}))

// Path ----> auth/google/callback -----> 
// Now we get the code after clicking allow on google accounts
// Then callback function in google Strategy is fired up as we are using that middleware which extracts info from profile
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    console.log(`Message from /google/callback ${req.user}`);
    res.redirect("http://localhost:3000/");
});

// Path ----> /login/success ----> 
// We will use the useEffect to send request to this path, and get the user data
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