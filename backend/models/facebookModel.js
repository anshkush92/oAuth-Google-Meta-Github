const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facebookUser = new Schema({
    facebookId: {
        type: String
    },

    displayName: {
        type: String,
    },

    avatar: {
        type: String,
    },
});

const FacebookUser = mongoose.model("facebookUser", facebookUser);

module.exports = FacebookUser;