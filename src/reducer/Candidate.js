import { DataCandidate, DataTalent } from "../components/DataCandidate";

const initialState = {
  candidate: DataCandidate,
  talent:DataTalent,
};

const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEE_CANDIDATE': {
      return state;
    }
    default:
      return state;
  }
};
export default candidateReducer;
