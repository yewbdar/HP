const user = require('./user')
const article = require('./article');
const vacancy=require('./vacancy');
const sample=require('./sample');
const feedBack=require('./feedBack');
const candidate=require('./candidate');
module.exports = (router) => {
    user(router);
    article(router);
    vacancy(router);
    sample(router);
    feedBack(router);
    candidate(router);
}