// Test -------------------------- Importing the Packages ---------------------------------
require("dotenv").config();
const express = require("express");

// Auth routes for the google
const authRoutes = require("./routes/googleAuth");
// Auth routes for the github
const githubAuthRoutes = require("./routes/githubAuth");
// Auth routes for the facebook
const facebookAuthRoutes = require("./routes/facebookAuth");

// Making sure that the server is able to connect with the database
const db = require('./config/db');
// For making request to different URLs 
const cors = require("cors");

// Passport Setup ----> This is the file responsible for oAuth with Google
const passportSetup = require("./config/passportSetup");

// Session is stored on the server and that session is encrypted on the cookie which is stored on the browser
const session = require('express-session');

// Passport JS is an middleware 
const passport = require("passport");

const app = express();
const PORT = 8000 || process.env.PORT;

// Test ------------------------ Middlewares (Use this code on every route) ----------------
// ORDER of the middlewares matters, so don't forget that

// Converting the JSON data received by client into the JS object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using the auth Routes 

// Adding the session, automatically logs out if the session has expired
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    // This sessions get expired after 1 min, session encrypted in cookie, cookie expires in 1 min
    // This removes the cookie from the browser storeage after 30s
    cookie: { maxAge: 0.5 * 60 * 1000 }
}));

// Initializing the passport.js
app.use(passport.initialize());
// Using the session that we have created
app.use(passport.session());

// Using cors, so that we can communicate with our client which is on other server
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    // This is why we are able to login using the oAuth in Google
    credentials: true,
}))

// Test -------------------------- The Server Side Code ----------------------------------
// Using the googleAuth Routes for oAuth authentication related to Google using passport js
app.use("/auth", authRoutes);

// Using the githubAuth Routes for oAuth authentication related to the Github using passsport js
app.use("/auth", githubAuthRoutes);

// Using the facebookAuth Routes for oAuth authentication related to the facebook using passport js
app.use("/auth", facebookAuthRoutes);

// Checking whether server is running or not 
app.get("/", (req, res) => { res.send("Hello World") });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// Sending the error middleware at last, so that we can get the error  -----> Best Practice
app.use((err, req, res, next) => { console.log(err) });
