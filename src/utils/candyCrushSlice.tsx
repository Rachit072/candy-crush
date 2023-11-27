import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {dragEndReducer} from './dragEndReducer';
import {moveBelowReducer} from './moveBelowReducer';
interface CandyCrushState {
    board: string[]; 
    boardSize: number;
    score:number
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    squareBeingReplaced: Element | undefined;
    squareBeingDragged: Element | undefined;
}
  
const initialState: CandyCrushState = {
    board: [],
    boardSize: 10,
    score:0,
    gamesPlayed: 0,
    gamesWon: 0,
    gamesLost: 0,
    squareBeingReplaced: undefined,
    squareBeingDragged: undefined,
};

const candyCrushSlice = createSlice({
    name : "candycrush",
    initialState,
    reducers:{
        updateBoard:(state,action:PayloadAction<string[]>)=>{
            state.board = action.payload;
        },
        dragStart: (state, action: PayloadAction<any>) => {
            state.squareBeingDragged = action.payload;
          },
        dragDrop: (state, action: PayloadAction<any>) => {
            state.squareBeingReplaced = action.payload;
          },
        updateScore: (state, action: PayloadAction<number>) => {
            state.score += action.payload;
        },
        dragEnd: dragEndReducer,
        moveBelow: moveBelowReducer,
    }
})
export default candyCrushSlice.reducer;
export const { updateBoard, moveBelow, dragDrop, dragEnd, dragStart,updateScore } =
  candyCrushSlice.actions;

