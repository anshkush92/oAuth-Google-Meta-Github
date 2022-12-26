const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const githubUser = new Schema({
    githubId: {
        type: String
    },

    displayName: {
        type: String,
    },

    avatar: {
        type: String,
    },
});

const GithubUser = mongoose.model("githubUser", githubUser);

module.exports = GithubUser;