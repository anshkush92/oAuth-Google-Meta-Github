const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_DB_ATLAS_URL;

mongoose.connect(url, { useNewUrlParser: true })

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Successfully connected to the Mongo DB Atlas Cloud");
});

module.exports = connection;