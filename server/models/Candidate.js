const mongoose = require('mongoose');

let CandidateSchema = new mongoose.Schema(
    {

        account: {userName: String, password: String},
        firstName: String,
        lastName: String,
        gender: String,
        dob: Date,
        contact: {
            telephone: String,
            email: String,
            address: {
                street: String,
                city: String,
                country: String,
                zip: Number
            }
        },
        profile: {
            qualifications: [{type: mongoose.Schema.Types.ObjectId, ref: 'qualification'}],
            skills: String,
            yearsOfExperience: String,
            coverPage: {data: Buffer, contentType: String},
            image: {data: Buffer, contentType: String},
            resume: {data: Buffer, contentType: String}

        },
        appliedPositions: [
            {type: mongoose.Schema.Types.ObjectId, ref: 'position'},
            [
                {
                    interviewedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'employee'},
                    interviewedOn: Date,
                    comment: String,
                    passed: Boolean,
                    interviewType: String
                }
            ]
        ],

        createdOn: Date
    });
module.exports = mongoose.model('candidate', CandidateSchema);