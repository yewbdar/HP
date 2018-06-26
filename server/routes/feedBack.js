const feedBackController = require('./../controllers/feedBack.ctrl');


module.exports = (router) => {

    /**
     * get all feedBack
     */
    router
        .route('/feedback')
        .get(feedBackController.getAll);

}


