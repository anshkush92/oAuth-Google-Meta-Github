const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new googleStrategy({
    // Options for the google strategy
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback"

}), () => {
    // Passport callback function 
})