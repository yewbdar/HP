const loginController = require('./../controllers/login.ctrl');


module.exports = (router) => {

    /**
     * upload File
     */
    router
        .route('/login')
        .post(loginController.login);
    router
        .route('/validateLogin')
        .get(loginController.validateLogin);

};