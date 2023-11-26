import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface CandyCrushState {
    board: string[]; 
    boardSize: number;
}
  
const initialState: CandyCrushState = {
    board: [],
    boardSize: 10,
};

const candyCrushSlice = createSlice({
    name : "candycrush",
    initialState,
    reducers:{
        updateBoard:(state,action:PayloadAction<string[]>)=>{
            state.board = action.payload;
        }
    }
})
export default candyCrushSlice.reducer;
export const {updateBoard} = candyCrushSlice.actions;
