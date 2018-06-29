const user = require('./user')
const article = require('./article');
const vacancy=require('./vacancy');
const sample=require('./sample');
const feedBack=require('./feedBack');
const candidate=require('./candidate');
const canInterBys=require('./canInterBy');
const canAppVac=require('./canAppVac');
module.exports = (router) => {
    user(router);
    article(router);
    vacancy(router);
    sample(router);
    feedBack(router);
    candidate(router);
    canInterBys(router);
    canAppVac(router);
}