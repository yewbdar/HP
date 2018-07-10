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
    getCandidatesByPosition: function () {
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
/**
 * Get Candidate Ends <<
 */
