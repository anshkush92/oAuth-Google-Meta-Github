require("dotenv").config();
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new googleStrategy({
    // Options for the google strategy
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL ----> Redirect the user after the user has clicked allow on the /auth/google
    callbackURL: "http://localhost:8000/auth/google/callback"

}, (accessToken, refreshToken, profile, done) => {
    // Function which gets fired up when we are redirected to /auth/google/callback
    // This function is used to exchange the code for the profile information 
    console.log("Passport callback function fired");
    console.log(profile);
}))