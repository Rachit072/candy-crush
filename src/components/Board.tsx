import React from 'react'
import { useSelector } from 'react-redux'
import Cell from './Cell'
import './Board.css';


function Board() {
    const board = useSelector(({candyCrush:{board}})=>board)
    const gamesPlayed = useSelector(({candyCrush:{gamePlayed}})=>gamePlayed)
    const gamesWon = useSelector(({candyCrush:{gamesWon}})=>gamesWon)
    const gamesLost = useSelector(({candyCrush:{gameLost}})=>gameLost)
    const score = useSelector(({candyCrush:{score}})=>score)
  return (
    <div className='board-container'>
      <div className='candy-board'>
        {board.map((candy:string,index:number)=>
          <Cell candy={candy} key={index} candyId={index}/>
        )}
      </div>
      <div className='score-container'>
        <div className='scoreBoard'>Games Played: {gamesPlayed}</div>
        <div className='scoreBoard'>Games Won: {gamesWon}</div>
        <div className='scoreBoard'>Games Lost: {gamesLost}</div>
        <div className='scoreBoard'>Score: {score}</div>
      </div>
    </div>
  )
}

export default Board
