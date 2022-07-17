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

// Path -----> /auth/facebook ------> 
// Passport JS takes us to the facebook accounts screen, where we can allow or deny to login from certain account
router.get("/facebook", passport.authenticate("facebook", {
    // Basically the scope tells what information we wanna retrieve from the facebook account
    scope: ["public_profile", "email"],
}), () => { console.log("/auth/facebook") });

// Path ----> auth/facebook/callback -----> 
// Now we get the code after clicking allow on facebook accounts
// Then callback function in facebook Strategy is fired up as we are using that middleware which extracts info from profile
router.get("/facebook/callback", passport.authenticate("facebook"), (req, res) => {
    console.log(`Message from /facebook/callback ${req.user}`);
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
    console.log("Authentication failed from facebookAuth.js");
    res.status(401).json({
        success: false,
        message: "Login Failed Please try again",
    });
});
// Test -------------------------- Exporting the server side code ------------------------
module.exports = router;