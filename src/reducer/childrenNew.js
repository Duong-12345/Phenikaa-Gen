import { DataNew } from "../components/DataNew";

const initialState = {
    news: DataNew,
}

const NewChilrenReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SEE_NEW':
          {  return state;}
        default:
        return state;
    }
}
export default NewChilrenReducer;