const user = require('./user')
const article = require('./article');
const position=require('./position');
const sample=require('./sample');
const feedBack=require('./feedBack');
const candidate=require('./candidate');
const canInterBys=require('./canInterBy');
const employee = require('./employee');
const qualification = require("./qualification");
module.exports = (router) => {
    user(router);
    article(router);
    position(router);
    sample(router);
    feedBack(router);
    candidate(router);
    canInterBys(router);
    employee(router);
    qualification(router);
};