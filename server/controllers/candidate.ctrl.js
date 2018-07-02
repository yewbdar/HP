/** */
const mongoose = require('mongoose');
const Candidate = require('./../models/Candidate');
//const Position = require('./../models/Position');

// const Position = require.model('Position');

module.exports = {
    getAll:function(req,res){
        Candidate.find({})
            .populate('appliedPositions')
                 .then((result) =>{ res.json(result) }).catch((err )=>{
                                    res.status(422).json(err);
                                 });
    },

    create: function(req, res) {
        // const { candidateId, firstName,lastName, dob ,resume , profile , appliedPositions} = req.body;
        console.log(req.body);
        Candidate
            .create(req.body )
            .then(dbModel => res.json(dbModel))
            .catch(err => { console.log(err) ;
                return res.status(422).json(err)});

    },


    getById:function (req,res) {
        Candidate.findById(req.params.id)
            .then((data) =>{
                console.log(data);
                res.json(data)
            }).catch((err )=>{
            res.status(422).json(err);
        });
    },

    update: function(req, res) {
        Candidate
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        Candidate
            .findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    getAppliedPositions: async(req,res,next) => {
        const {candidateId} = req.params;
        const candidate = Candidate.findById(candidateId);
        console.log('candidate',  candidate);
    },
    newCandidateApplication: async (req,res, next) => {
        const {candidateId} = req.params;
        //creating new Position
        const newPosition = new Position(req.body);
        //Get the Candidate Object
        const candidate = await Candidate.findById(candidateId);

        //save Position
        await newPosition.save();

        //assign position to the candidate (Since multiple is an option TODO:// use push)
        candidate.positions.push(newPosition);
        //save Candidate
        await candidate.save();
        //201 Data Created
        res.status(201).json(candidate)
        console.log('new Postions', newPosition);

    }

};