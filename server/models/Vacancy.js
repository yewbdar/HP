const mongoose = require('mongoose');

let VacancySchema = new mongoose.Schema(
    {
        vacancyId: String,
        jobTitle: String,
        hub: String,
        summary: String,
        qualification: String,
        additionalTechnicalSkill: String
    }
);
module.exports = mongoose.model('vac', VacancySchema);