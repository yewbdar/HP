import * as types from '../actions/actionType';
const initialState = {
    candidates: [],
    isGettingCandidates : false,
    error:""
}
export default (state=initialState, action) => {
    switch (action.type) {
        case types.BEGIN_GET_CANDIDATE :
            return {...state, isGettingCandidates: true };
        case types.GET_CANDIDATE_SUCCESS :
            return {...state, candidates: action.candidates, isGettingCandidates: false , error :"" };
        case types.GET_CANDIDATE_FAILURE :
            return {...state, isGettingCandidates: false, error: action.errMsg };
        default:
            return state
    }
}