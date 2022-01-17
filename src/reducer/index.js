import { combineReducers } from "redux";
import candidateReducer from "./Candidate";
import CandidateDetailReducer, { CandidateDetailReducer1 } from "./CandidateDetailReducer";
import NewChilrenReducer from "./childrenNew";
import NewDetailReducer from "./NewDetailReducer";

const rootReducer = combineReducers({
  candidate: candidateReducer,
  newList: NewChilrenReducer,
  newDetail: NewDetailReducer,
  candidateDetail: CandidateDetailReducer,
  candidateDetail1: CandidateDetailReducer1
});

export default rootReducer;
