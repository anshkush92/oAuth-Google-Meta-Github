const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleUser = new Schema({
    googleId: {
        type: String
    },

    displayName: {
        type: String,
    },

    avatar: {
        type: String,
    },
});

const GoogleUser = mongoose.model("googleUser", googleUser);

module.exports = GoogleUser;