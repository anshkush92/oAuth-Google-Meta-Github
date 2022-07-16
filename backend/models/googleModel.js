const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleUser = new Schema({
    googleId: {
        type: string
    },

    displayName: {
        type: string,
    },

    avatar: {
        type: string,
    },
});

const GoogleUser = mongoose.model("googleUser", googleUser);

module.exports = GoogleUser;