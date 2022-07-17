require("dotenv").config();
// Using passport to use the passport middleware
const passport = require("passport");
// Using the Schema defined for the Google user
const GoogleUser = require("../models/googleModel");
// Using the Schema defined for Github users
const GithubUser = require("../models/githubModel");
// Using the Schema defined for the Facebook users
const FacebookUser = require("../models/facebookModel");

// Using the oAuth2.0 which authenticates the users with their google account
const googleStrategy = require("passport-google-oauth20").Strategy;
// Using the oAuth2.0 which authenticates users with their github account
const githubStrategy = require("passport-github2").Strategy;
// Using the oAuth2.0 which authenticates users with their facebook account
const facebookStrategy = require("passport-facebook").Strategy;

// Read the Passport Js workflow to understand better about the Passport Js
// Test --------------------------- Seriazliing -------------------------------------------------
passport.serializeUser((user, done) => {
    console.log(`Serialized User by encrypting cookie with the ${user.id} from passportSetup.js`);
    done(null, user.id);
});

// Test --------------------------- Deserializing -------------------------------------------------
passport.deserializeUser(async (id, done) => {
    let findUser = await GoogleUser.findById(id);

    if (findUser === null) {
        console.log(`User not found in Google users database, so searching in Github Users database`);
        findUser = await GithubUser.findById(id);
    }

    if (findUser === null) {
        console.log(`User not found in Github users database, so searching in Facebook Users database`);
        findUser = await FacebookUser.findById(id);
    }

    console.log(`User found after de-serializing the cookie --> ${findUser} passportSetup.js`);
    done(null, findUser);
});

// Test ----------------------------------- Google oAuth --------------------------------------------
// Telling the passport JS that we are going to the use the oAuth for the Google
passport.use(new googleStrategy({
    // Options for the google strategy
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL ----> Redirect the user after the user has clicked allow on the /auth/google
    callbackURL: "http://localhost:8000/auth/google/callback"

}, async (accessToken, refreshToken, profile, done) => {
    // Function which gets fired up when we are redirected to /auth/google/callback 
    console.log("Passport callback function fired ---> passportSetup.js");

    // SO when this is fired, first we will look for that id in the database and if not ever logged in then create a new user
    const oldGoogleUser = await GoogleUser.findOne({ googleId: profile.id });

    // Checking for User, so that we don't end up adding duplicate users
    if (oldGoogleUser) {
        // The user has already used the Google to sign in 
        console.log(`User already exists in the database ---> Google ----> ${oldGoogleUser}`);
        // Passing the oldGoogleUser data in MongoDb to the Serialize user, which will create a encrypted cookie with this info
        done(null, oldGoogleUser);
    } else {
        // Adding the new google User
        const newGoogleUser = await GoogleUser.create({ googleId: profile.id, displayName: profile.displayName, avatar: profile.photos[0].value });
        console.log(`New Google User is ---> passportSetup.js ---> ${newGoogleUser}`);
        // Passing the oldGoogleUser data in MongoDb to the Serialize user, which will create a encrypted cookie with this info
        done(null, newGoogleUser);
    }
}))

// Test ----------------------------------- Github oAuth --------------------------------------------
// Telling the passport JS that we are going to the use the oAuth for the Github
passport.use(new githubStrategy({
    // Options for the github strategy
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // callbackURL ----> Redirect the user after the user has clicked allow on the /auth/github
    callbackURL: "http://localhost:8000/auth/github/callback"

}, async (accessToken, refreshToken, profile, done) => {
    // Function which gets fired up when we are redirected to /auth/github/callback 
    console.log("Passport callback function fired ---> Github");

    // SO when this is fired, first we will look for that id in the database and if not ever logged in then create a new user
    const oldGithubUser = await GithubUser.findOne({ githubId: profile.id });

    // Checking for User, so that we don't end up adding duplicate users
    if (oldGithubUser) {
        // The user has already used the Github to sign in 
        console.log(`User already exists in the database ---> passportSetup.js ----> ${oldGithubUser}`);
        // Passing the oldGithubeUser data in MongoDb to the Serialize user, which will create a encrypted cookie with this info
        done(null, oldGithubUser);
    } else {
        // Adding the new Github User
        const newGithubUser = await GithubUser.create({ githubId: profile.id, displayName: profile.displayName, avatar: profile.photos[0].value });
        console.log(`New Github User is ---> passportSetup.js ---> ${newGithubUser}`);
        // Passing the newGithubUser data in MongoDb to the Serialize user, which will create a encrypted cookie with this info
        done(null, newGithubUser);
    }
}))

// Test ----------------------------------- Facebook oAuth --------------------------------------------
// Telling the passport JS that we are going to the use the oAuth for the Facebook
passport.use(new facebookStrategy({
    // Options for the facebook strategy
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // callbackURL ----> Redirect the user after the user has clicked allow on the /auth/facebook
    callbackURL: "http://localhost:8000/auth/facebook/callback",
}, async (accessToken, refreshToken, profile, done) => {
    // Function which gets fired up when we are redirected to /auth/facebook/callback 
    console.log("Passport callback function fired ---> Facebook", profile);

    // SO when this is fired, first we will look for that id in the database and if not ever logged in then create a new user
    const oldFacebookUser = await FacebookUser.findOne({ facebookId: profile.id });

    // Checking for User, so that we don't end up adding duplicate users
    if (oldFacebookUser) {
        // The user has already used the Facebook to sign in 
        console.log(`User already exists in the database ---> passportSetup.js ----> ${oldFacebookUser}`);
        // Passing the oldFacebookUser data in MongoDb to the Serialize user, which will create a encrypted cookie with this info
        done(null, oldFacebookUser);
    } else {
        // Adding the new Facebook User
        const newFacebookUser = await FacebookUser.create({ facebookId: profile.id, displayName: profile.displayName, avatar: profile.photos[0].value || undefined });
        console.log(`New Facebook User is ---> passportSetup.js ---> ${newFacebookUser}`);
        // Passing the newFacebookUser data in MongoDb to the Serialize user, which will create a encrypted cookie with this info
        done(null, newFacebookUser);
    }
}))