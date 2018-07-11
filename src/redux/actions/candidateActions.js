/** */
import axios from 'axios';
import * as types from './actionType';


//This will be evaluated to const url = "http://localhost:5000/api/" for dev environment
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/hp-api";
/**
 * Get Candidates Begin >>
 * @returns {function(*)}
 */
export default {
    getCandidates: function () {
        console.log("_>>>getting Candidates . . .");
        return (dispatch) => {
            dispatch(beginGetCandidates());
            axios.get(`${url}/candidates`)
                .then((res) => {
                    dispatch(getCandidatesSuccess(res.data));
                }).catch((err) => {
                dispatch(getCandidatesFailure(err));
                console.log(err)
            })
        }
    },
    getAppliedPositionsStatusForCandidate : function(candidateId){
        return (dispatch) => {
            dispatch(beginGetCandidateAppliedPositionStatus());
            axios.get(`${url}/candidate?id=`+ candidateId)
                .then((res) => {
                    /**
                     * Parsing data to this format
                     * Candidate (Last, First Name), Applied Position Title , Behavioural Status , Technical Status
                     */
                    let parsedData = [];
                        let lastFirstName =  res.data.lastName + ", " + res.data.firstName;
                        if(res.data.appliedPositions){

                            res.data.appliedPositions.map((appliedPosition , index) =>{

                                let positionTitle = appliedPosition.position.title
                                let interviewType = "";
                                let result = "";
                                let comment = "";
                                if(appliedPosition.interview){
                                    appliedPosition.interview.map(interview => {
                                        interviewType = interview.interviewType;
                                        comment = interview.comment;
                                        result = interview.passed ? "Passed" : "Failed";
                                        parsedData.push ({lastFirstName, positionTitle ,interviewType,result,comment });
                                    });
                                }

                            });
                    }
                    dispatch(getCandidateSuccessAppliedPositionStatus(parsedData));
                }).catch((err) => {
                dispatch(getCandidateFailureAppliedPositionStatus(err));
                console.log(err)
            })
        }

    },
    getCandidatesByPosition: function (data) {
        console.log("_>>>getting Candidates . . .");
        return (dispatch) => {
            dispatch(beginGetCandidates());
            axios.get(`${url}/candidates-position?id=` + data)
                .then((res) => {
                    dispatch(getCandidatesSuccess(res.data));
                }).catch((err) => {
                dispatch(getCandidatesFailure(err));
                console.log(err)
            })
        }
    },
    getCandidatesByPositionStatus: function (data) {
        console.log("_>>>getting Candidates . . .");
        return (dispatch) => {
            dispatch(beginGetCandidates());
            axios.get(`${url}/candidates-position-Status?id=` + data)
                .then((res) => {
                    let parsedData = [];
                    let lastFirstName =  res.data.lastName + ", " + res.data.firstName;
                    if(res.data.appliedPositions){

                        res.data.appliedPositions.map((appliedPosition , index) =>{

                            if(appliedPosition.interview){
                                appliedPosition.interview.filter(interview => {
                                    interview.passed ===true

                                });
                            }


                        });
                    }
                    dispatch(getCandidateSuccessAppliedPositionStatus(parsedData));
                }).catch((err) => {
                dispatch(getCandidateFailureAppliedPositionStatus(err));
                // console.log(err)
                //     dispatch(getCandidatesSuccess(res.data));
                // }).catch((err) => {
                // dispatch(getCandidatesFailure(err));
                // console.log(err)
            })
        }
    },
    getById: function (data) {
        console.log("_>>>getting Candidates . . .");
        return (dispatch) => {
            dispatch(beginGetCandidates());
            console.log(data);
            axios.get(`${url}/candidate?id=` + data)
                .then((res) => {
                    dispatch(getCandidatesSuccess(res.data));
                }).catch((err) => {
                dispatch(getCandidatesFailure(err));
                console.log(err)
            })
        }
    },

     applyForPosition: function (data) {
            console.log("_>>>updating  Candidates . . .",data);
            return (dispatch) => {
                dispatch(beginGetCandidates());
                axios.put(`${url}/apply`, data)
                    .then((res) => {
                        dispatch(getCandidatesSuccess(res.data));
                    }).catch((err) => {
                    dispatch(getCandidatesFailure(err));
                    console.log(err)
                })
            }
        },

    feedbackForApplyedPosition: function (data) {
        console.log("_>>>updating  Candidates . . .",data);
        return (dispatch) => {
            dispatch(beginGetCandidates());
                axios.put(`${url}/addfeedback`, data)
                .then((res) => {
                    dispatch(getCandidatesSuccess(res.data));
                }).catch((err) => {
                dispatch(getCandidatesFailure(err));
                console.log(err)
            })
        }
    }

}
function beginGetCandidates (){ return { type: types.BEGIN_GET_CANDIDATE } }

function getCandidatesSuccess (candidates){
    return {
        type : types.GET_CANDIDATE_SUCCESS,
        candidates :candidates
    }
}


function getCandidatesFailure (errMsg){
    return {
        type: types.GET_CANDIDATE_FAILURE,
        errMsg
    }
}

function beginGetCandidateAppliedPositionStatus (){ return { type: types.BEGIN_GET_CANDIDATE_APPLIED_POSITION_STATUS } }

function getCandidateSuccessAppliedPositionStatus (candidateAppliedPositionStatus){
    return {
        type : types.GET_CANDIDATE_SUCCESS_APPLIED_POSITION_STATUS,
        candidateAppliedPositionStatus :candidateAppliedPositionStatus
    }
}


function getCandidateFailureAppliedPositionStatus (errMsg){
    return {
        type: types.GET_CANDIDATE_FAILURE_APPLIED_POSITION_STATUS,
        errMsg
    }
}


/**
 * Get Candidate Ends <<
 */
