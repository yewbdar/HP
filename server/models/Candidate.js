const mongoose = require('mongoose');

let CandidateSchema= new mongoose.Schema(
    {
        candidateId:   String,
        firstName: String,
        lastName: String,
        dob: String,
        image: String,
        resume: String,
        coverPage:String
    }
);
module.exports = mongoose.model('candidate', CandidateSchema);