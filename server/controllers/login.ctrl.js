/** */
const mongoose = require('mongoose');
const Candidate = require('./../models/Candidate');
const Employee = require('./../models/Employee');
const bcrypt = require('bcrypt');
const session = require('express-session');

module.exports = {

    login:function(req,res){
        const {userName, password} = req.body;

            Candidate.findOne({ 'account.userName': userName},
                (err, result) => {
                        if( bcrypt.compareSync(password, result.account.password)){
                                req.session.user = result;
                                console.log("Found Account", result);

                        }//found account , register user info and redirect
                });

    },
    validateLogin: function(req, res) {
        /**
         * Check if the Session have a user object if not redirect to login
         */
        if(!req.session.user) {
            return res.status(401).send();
        }
        return res.status(200).send();
    }

};

