const user = require('./user')
const article = require('./article')
const vacancy=require('./vacancy')

module.exports = (router) => {
    user(router)
    article(router)
    vacancy(router)
}