const canInterBy = require('./../controllers/canInterBy.ctrl');
module.exports = (router) => {

    /**
     * get all candidate
     */
    router
        .route('/can-inter-by')
        .get(canInterBy.getAll);

}