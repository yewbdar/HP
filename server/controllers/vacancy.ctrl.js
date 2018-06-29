/** */
const Vacancy = require('../models/Vacancy');

module.exports = {
    //get all vacancy

    getAll:function(req,res){
        Vacancy.find({})
            .then((result) =>{
                console.log("DB")
                console.log(result)
                res.json(result)
            }).catch((err )=>{
            res.status(422).json(err);
        });
    },

    save: function(req, res) {
        console.log(req.body)
        Vacancy
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => { console.log(err) ;
                return res.status(422).json(err)});
    },


    getById:function (req,res) {
        Vacancy.findById(req.params.id)
               .then((data) =>{
                  console.log(data);
                res.json(data)
           }).catch((err )=>{
            res.status(422).json(err);
        });
    },

    update: function(req, res) {
        Vacancy
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        Vacancy
            .findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};