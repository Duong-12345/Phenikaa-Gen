import { DETAIL } from "../action/type";
import { DataNew } from "../components/DataNew";

const initialState = {
    isFetching: false,
    data: DataNew,
    dataDetail:{}
};


export default function NewDetailReducer(state = initialState, action){
    switch(action.type){
        case "GET_DETAIL_NEW_FETCHING":{
            return state.merge({
                isFetching: true
            });
        }
        case "GET_DETAIL_NEW_SUCCESS":{
            return state.merge({
                isFetching: false,
                data: action.payload
            });
        }
        case "GET_DETAIL_NEW_FAILURE":{
            return state.merge({
                isFetching: false
            });
        }
        case DETAIL :{
            return {
                ...state,
                dataDetail: state.data[action.payload-1]
            }
        }
        default:
            return state
    }
}