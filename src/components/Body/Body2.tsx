import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateBoard } from '../../utils/candyCrushSlice';
import { createBoard } from '../../utils/createBoard'
import Board from '../Board'

export default function Body2() {
    const dispatch = useDispatch();
    const boardSize = useSelector(
        ({candyCrush:{boardSize}})=>boardSize
    )
    useEffect(()=>{
        dispatch(updateBoard(createBoard(boardSize)))
    },[])
  return (
    <div>
      <Board/>
    </div>
  )
}
