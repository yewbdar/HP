/** */
const Candidate = require(' ./../models/Candidate');

module.exports = {
    //get all Candidate

    findAll:function(req,res){
        Candidate.find({})
            .then((data) =>{
                console.log(data);
                res.json(data)
            }).catch((err )=>{
            res.status(422).json(err);
        });
    },

    //get all Candidate by id

    // findById:function(req,res){
    //     Candidate.findById(req.params.id)
    //            .then((data) =>{
    //               console.log(data);
    //             res.json(data)
    //        }).catch((err )=>{
    //         res.status(422).json(err);
    //     });
    //
    //
    // },

// save Candidate

    // create: function(req, res) {
    //     Candidate
    //         .create(req.body)
    //         .then(data => res.json(data))
    //         .catch(err => { console.log(err)
    //             return res.status(422).json(err)});
    // },

    // update: function(req, res) {
    //     Candidate
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then(data => res.json(data))
    //         .catch(err => res.status(422).json(err));
    // },


    // remove: function(req, res) {
    //     Candidate
    //         .findById({ _id: req.params.id })
    //         .then(data => data.remove())
    //         .then(data => res.json(data))
    //         .catch(err => res.status(422).json(err));
    // }
};