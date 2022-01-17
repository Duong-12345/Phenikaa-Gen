import { createSlice } from "@reduxjs/toolkit";

export const counterVote = createSlice({
    name: 'counter',
    initialState: {
        value:1,
        vote: 0,
    },
    reducers:{
        increment:(state)=>{
            state.value += 1;
            state.vote += 1;
        },
        decrement:(state)=>{
            state.value -=1;
            state.vote -=1;
            if(state.vote < 0){
            state.vote = 0;    
            }
        }
    }
});

export const {increment, decrement} = counterVote.actions;
export const selectCount = (state)=>state.counterVote.value;
export const selectVote = (state)=>state.counterVote.vote;
export default counterVote.reducer;