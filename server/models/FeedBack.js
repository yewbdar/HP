const mongoose = require('mongoose');

let FeedBackSchema= new mongoose.Schema(
    {
        interviewId:   String,
        candidateName: String,
        hub: String,
        interviewSchedule: String,
        feedBack: String,
        seggestion: Boolean
    }
);
module.exports = mongoose.model('feedback', FeedBackSchema);