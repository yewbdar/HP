const mongoose = require('mongoose');

let VacancySchema = new mongoose.Schema(
    {
        vacancyId:   String,
        jobTitle: String,
        hub: String,
        summary: String,
        qualification: String,
        additionalTechnicalSkill: string
    }
);
module.exports = mongoose.model('vacancy', VacancySchema);