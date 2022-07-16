require("dotenv").config();
const passport = require("passport");
const GoogleUser = require("../models/googleModel");
const googleStrategy = require("passport-google-oauth20").Strategy;

// This functions takes the user information from the database, and encrypt cookie with the information
passport.serializeUser((user, done) => {
    console.log(`Serialized User by encrypting cookie with the ${user.id}`);
    // Using the mongoDB id created to encrypt the cookie to tell that the user is authenticated
    // done () ---> similar to what next() does
    done(null, user.id);
});

// This functions takes the cookie and deserialize and then looks up for the info in the database
passport.deserializeUser(async (id, done) => {
    // Using the mongoDB id created to encrypt the cookie to tell that the user is authenticated
    const findUser = await GoogleUser.findById(id);
    console.log(`User found after de-serializing the cookie --> ${findUser}`);
    done(null, findUser);
});


passport.use(new googleStrategy({
    // Options for the google strategy
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL ----> Redirect the user after the user has clicked allow on the /auth/google
    callbackURL: "http://localhost:8000/auth/google/callback"

}, async (accessToken, refreshToken, profile, done) => {
    // Function which gets fired up when we are redirected to /auth/google/callback
    // This function is used to exchange the code for the profile information 
    console.log("Passport callback function fired");

    // SO when this is fired, first we will look for that id in the database and if not ever logged in then create a new user
    const oldGoogleUser = await GoogleUser.findOne({ googleId: profile.id });

    // Checking for User, so that we don't end up adding duplicate users
    if (oldGoogleUser) {
        // The user has already used the Google to sign in 
        console.log(`User already exists in the database ${oldGoogleUser}`);
        // Passing the oldGoogleUser data in MongoDb to the Serialize user, which will create a encrypted cookie with this info
        done(null, oldGoogleUser);
    } else {
        // Adding the new google User
        const newGoogleUser = await GoogleUser.create({ googleId: profile.id, displayName: profile.displayName, avatar: profile.photos[0].value });
        console.log(`New Google User is ---> ${newGoogleUser}`);
        // Passing the oldGoogleUser data in MongoDb to the Serialize user, which will create a encrypted cookie with this info
        done(null, newGoogleUser);
    }
}))