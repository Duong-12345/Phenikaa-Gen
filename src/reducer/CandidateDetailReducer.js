import { FACE, TALENT } from "../action/type";
import { DataCandidate, DataTalent } from "../components/DataCandidate";

const initialState = {
  dataFace: DataCandidate,
  dataTalent: DataTalent,
  faceDetail: {},
  faceChildren:[],
  talentDetail: {},
  isFetching: false,
};

export default function CandidateDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FACE: {
      return {
        ...state,
        faceDetail: state.dataFace[action.payload - 1],
      };
    }
    case TALENT: {
      return {
        ...state,
        talentDetail: state.dataTalent[action.payload - 1],
      };
    }
    default:
      return state;
  }
}

export const CandidateDetailReducer1 = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_CANDIDATE_BY_ID_REQUEST": {
      return { 
          ...state,
           isFetching: true 
        };
    }
    case "GET_DATA_CANDIDATE_BY_ID_SUCCESS": {
      return {
        ...state,
        faceDetail: action.payload,
        isFetching:false 
      };
    }
    case "GET_DATA_CANDIDATE_BY_ID_ERROR":{
        return{
            ...state,
            isFetching:false
        }
    }
    case  "GET_ALL_DATA_CANDIDATE_REQUEST": {
      return { 
          ...state,
           isFetching: true 
        };
    }
    case "GET_ALL_DATA_CANDIDATE_SUCCESS": {
      return {
        ...state,
        faceChildren: action.payload,
        isFetching:false 
      };
    }
    case "GET_ALL_DATA_CANDIDATE_ERROR":{
        return{
            ...state,
            isFetching:false
        }
    }
    case "UPDATE_DATA_CANDIDATE_BY_ID_REQUEST":{
        return{
            ...state,
            isFetching:true
        }
    }
    case "UPDATE_DATA_CANDIDATE_BY_ID_SUCCESS":{
        return{
            ...state,
            isFetching:false,
            faceDetail: action.payload,
        }
    }
    case "UPDATE_DATA_CANDIDATE_BY_ID_ERROR":{
        return{
            ...state,
            isFetching:false,
        }
    }
    default:
      return state;
  }
};
