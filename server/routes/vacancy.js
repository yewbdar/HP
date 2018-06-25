const vacancycontroller = require('./../controllers/vacancy.ctrl');


module.exports = (router) => {

    /**
     * get all vacancy
     */
    router
        .route('/vacancy')
        .get(vacancycontroller.getAll);

}