import React from 'react'
import { useSelector } from 'react-redux'
import Cell from './Cell'
import './Board.css';

function Board() {
    const board = useSelector(({candyCrush:{board}})=>board)
  return (
    <div className='board-container'>
      <div className='candy-board'>
        {board.map((candy:string,index:number)=>
          <Cell candy={candy} key={index} candyId={index}/>
        )}
      </div>
      <div className='score-container'>
        <div className='scoreBoard'>Games Played: {0}</div>
        <div className='scoreBoard'>Games Won: {0}</div>
        <div className='scoreBoard'>Games Lost: {0}</div>
        <div className='scoreBoard'>Score: {0}</div>
      </div>
    </div>
  )
}

export default Board
