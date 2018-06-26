/** */
const Vacancy = require('../models/Vacancy');

module.exports = {
    //get all vacancy
    getAll: (req, res) => {
        Vacancy.find({},'',function(err,docs){
            if(err)
                console.log("Error:", err);
            else
                res.send(docs);
        });
    }

    //get all vacancy by id
    // findById:function(req,res){
    //     Vacancy.findById(req.params.id)
    //            .then((data) =>{
    //               console.log(data);
    //             res.json(data)
    //        }).catch((err )=>{
    //         res.status(422).json(err);
    //     });
    //
    //
    // },

// save vacancy

    // create: function(req, res) {
    //     Vacancy
    //         .create(req.body)
    //         .then(data => res.json(data))
    //         .catch(err => { console.log(err)
    //             return res.status(422).json(err)});
    // },

    // update: function(req, res) {
    //     Vacancy
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then(data => res.json(data))
    //         .catch(err => res.status(422).json(err));
    // },


    // remove: function(req, res) {
    //     Vacancy
    //         .findById({ _id: req.params.id })
    //         .then(data => data.remove())
    //         .then(data => res.json(data))
    //         .catch(err => res.status(422).json(err));
    // }
};