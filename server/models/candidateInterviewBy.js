const mongoose = require('mongoose');

let CandidateIntrviewBy= new mongoose.Schema(
    {
        candidateId:   String,
        vacancyId: String,

    }
);
module.exports = mongoose.model('candidateApplayVacancy', CandidateIntrviewBy);