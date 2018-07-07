/** */
const mongoose = require('mongoose');
const Candidate = require('./../models/Candidate');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

module.exports = {

    uploadFile:function(req,res){
        Candidate.insertOne({'imagePath' : 'public/images/uploads/' + req.file.filename  }, (err, result) => {
            assert.equal(err, null);
        });
    }

};
