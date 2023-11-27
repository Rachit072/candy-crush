import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { moveBelow, updateBoard, updateScore } from '../../utils/candyCrushSlice';
import { forColumnOfFour, forColumnOfThree, forInvalidMoves } from '../../utils/config';
import { createBoard } from '../../utils/createBoard'
import { checkForColumnOfThree, checkForRowOfFour, checkForRowOfThree, isColumnOfFour } from '../../utils/moves';
import Board from '../Board'

export default function Body() {
    const dispatch = useDispatch();
    const board = useSelector(({ candyCrush: { board } }) => board);
    const score = useSelector(({ candyCrush: { score } }) => score);
    const prevBoardRef = useRef(board);
    const boardSize = useSelector(({candyCrush:{boardSize}})=>boardSize)
    useEffect(()=>{
        dispatch(updateBoard(createBoard(boardSize)))
    },[])
    
    useEffect(()=>{
      const newBoard = [...board];
      const candyReplaced = hasCandyReplaced(prevBoardRef.current, newBoard);
      if (candyReplaced) {
        const scoreIncrease = 1; 
        dispatch(updateScore(score + scoreIncrease));
      }
      prevBoardRef.current = newBoard;
    })
    
    useEffect(() => {
      const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, forColumnOfFour(boardSize));
      checkForRowOfFour(
        newBoard,
        boardSize,
        forInvalidMoves(boardSize, true)
      );
      checkForColumnOfThree(
        newBoard,
        boardSize,
        forColumnOfThree(boardSize)
      );
      checkForRowOfThree(newBoard, boardSize, forInvalidMoves(boardSize));
      dispatch(updateBoard(newBoard));
      dispatch(moveBelow());
    },100);
    return () => clearInterval(timeout);
  }, [board, dispatch, boardSize]);

  function hasCandyReplaced(prevBoard: string[], newBoard: string[]): boolean {
    let candyReplaced = false;
    for (let i = 0; i < prevBoard.length; i++) {
      if (prevBoard[i] !== newBoard[i]) {
        candyReplaced = true; 
        break; 
      }
    }
  
    return candyReplaced;
  }

  return (
    <div>
      <Board/>
    </div>
  )
}
