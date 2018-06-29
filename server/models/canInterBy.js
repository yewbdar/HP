const mongoose = require('mongoose');

let CandidateIntrviewBySchema= new mongoose.Schema(
    {
        candidateId: String,
        vacancyId: String,
        interviwerId: String

    }
);
module.exports = mongoose.model('canInterBy', CandidateIntrviewBySchema);