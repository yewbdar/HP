/** */
const FeedBack = require('./../models/FeedBack');

module.exports = {
    getAll: (req, res) => {
        FeedBack.find({},'',function(err,docs){
            if(err)
                console.log("Error:", err);
            else
                res.send(docs);
        });
    }

};

//     //get all FeedBack by id
//
//     // findById:function(req,res){
//     //     FeedBack.findById(req.params.id)
//     //            .then((data) =>{
//     //               console.log(data);
//     //             res.json(data)
//     //        }).catch((err )=>{
//     //         res.status(422).json(err);
//     //     });
//     //
//     //
//     // },
//
// // save FeedBack
//
//     // create: function(req, res) {
//     //     FeedBack
//     //         .create(req.body)
//     //         .then(data => res.json(data))
//     //         .catch(err => { console.log(err)
//     //             return res.status(422).json(err)});
//     // },
//
//     // update: function(req, res) {
//     //     FeedBack
//     //         .findOneAndUpdate({ _id: req.params.id }, req.body)
//     //         .then(data => res.json(data))
//     //         .catch(err => res.status(422).json(err));
//     // },
//
//
//     // remove: function(req, res) {
//     //     FeedBack
//     //         .findById({ _id: req.params.id })
//     //         .then(data => data.remove())
//     //         .then(data => res.json(data))
//     //         .catch(err => res.status(422).json(err));
//     // }
// };