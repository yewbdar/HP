const mongoose = require('mongoose');

let CandidateApplayVacancySchema= new mongoose.Schema(
    {
        candidateId:   String,
        vacancyId: String,

    }
);
module.exports = mongoose.model('candidateApplayVacancy', CandidateApplayVacancySchema);