const CandidateController = require('./../controllers/candidate.ctrl');
module.exports = (router) => {

    /**
     * get all candidate
     */
    router
        .route('/candidate')
        .get(CandidateController.getAll);

}