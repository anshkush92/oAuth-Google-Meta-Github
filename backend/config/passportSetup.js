const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new googleStrategy({
    // Options for the google strategy
}), () => {
    // Passport callback function 
})