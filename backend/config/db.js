const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_DB_ATLAS_URL;

// Connecting to the MongoDB Atlas, which returns a Promise
mongoose.connect(url, { useNewUrlParser: true })

// Making thhe connetion to the mongoDB Atals (Sync task)
const connection = mongoose.connection;
// Checking whether the connection made was successfull or not 
connection.once("open", () => {
    console.log("Successfully connected to the Mongo DB Atlas Cloud");
});

module.exports = connection;