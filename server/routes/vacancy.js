const vacancycontroller = require('./../controllers/vacancy.ctrl');


module.exports = (router) => {

    /**
     * get all vacancy
     */
    //maches with "/hp-api/vacancy
    router
        .route('/vacancy')
        .get(vacancycontroller.findAll)
        .post(vacancycontroller.create);



    // maches with "/hp-api/vacancy/:id"
    router.route('/vacancy/:id')
        .get(vacancycontroller.findById)
        .put(vacancycontroller.update)
        .delete(vacancycontroller.remove)


}