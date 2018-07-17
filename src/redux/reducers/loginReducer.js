import * as types from '../actions/actionType';
const initialState = {
    userInfo: {},
    isGettingUserInfo : false,
    error:"",
    isGettingCurrentUser : false,
    currentInfoError : "",
    userNotFound:""
};
export default (state=initialState, action) => {
    switch (action.type) {
        case types.BEGIN_LOGGING_IN :
            return {...state, isGettingUserInfo: true, userNotFound:"" };
        case types.LOGGING_IN_SUCCESS :
            return {...state, userInfo: action.userInfo, isGettingUserInfo: false , error :"" , userNotFound:""};
        case types.LOGGING_IN_FAILURE :
            return {...state, isGettingUserInfo: false, error: action.errMsg , userNotFound:""};
        case types.USER_NOT_FOUND :
            return {...state, isGettingUserInfo: false, userNotFound: action.userNotFound };
        case types.BEGIN_GET_CURRENT_USER :
            return {...state, isGettingCurrentUser: true, userNotFound:"" };
        case types.GET_CURRENT_USER_SUCCESS :
            return {...state, userInfo: action.userInfo, isGettingCurrentUser: false , currentInfoError :"",userNotFound:"" };
        case types.GET_CURRENT_USER_FAILURE :
            return {...state, isGettingCurrentUser: false, currentInfoError: action.errMsg,userNotFound:"" };
        case types.LOGOUT_CURRENT_USER :
            return {...state, userInfo : action.userInfo, userNotFound:""};
        default:
            return state
    }
}
