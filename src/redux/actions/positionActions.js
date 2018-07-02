/** */
import axios from 'axios';
import * as types from './actionType';


//This will be evaluated to const url = "http://localhost:5000/api/" for dev environment
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/hp-api";
/**
 * Get Position Begin >>
 * @returns {function(*)}
 */

export default {
      getPosition: function() {
        console.log("_>>>getting positions . . .");
        return (dispatch) => {
            dispatch(beginGetPosition());
            axios.get(`${url}/position`)
                .then((res) => {
                    dispatch(getPositionSuccess(res.data));
                }).catch((err) => {
                dispatch(getPositionFailure(err));
                console.log(err)
            })
        }
    },
    postPosition:function(data) {
        console.log(data);
        console.log("_>>>posting position . . .");
        // return (dispatch)=>{
        //     dispatch(beginPostVacancy());
        axios.post(`${url}/position-save`, data)
        // .then((res)=>{
        // dispatch(postVacancySuccess(res.data))
        //  console.log("saved data");
        // }).catch((err)=>{postVacancyFailure(err)
        //     console.log(err);
        // });
        // }

    }
}
function beginPostPosition (){
    console.log("beginPostPosition")
    return { type: types.BEGIN_POST_POSITION } }
function postPositionSuccess(position) {
    return {
        type : types.POST_POSITION_SUCCESS,
        position :position
    }
}
function postPositionFailure (errMsg){
    return {
        type: types.POST_POSITION_FAILURE,
        errMsg
    }
}
function beginGetPosition (){ return { type: types.BEGIN_GET_POSITION } }

function getPositionSuccess (position){
    return {
        type : types.GET_POSITION_SUCCESS,
        position :position
    }
}


function getPositionFailure (errMsg){
    return {
        type: types.GET_POSITION_FAILURE,
        errMsg
    }
}
/**
 * Get Position Ends <<
 */
