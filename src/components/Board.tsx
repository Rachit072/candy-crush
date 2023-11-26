import React from 'react'
import { useSelector } from 'react-redux'
import Cell from './Cell'

function Board() {
    const board = useSelector(({candyCrush:{board}})=>board)
  return (
    <div>
      {board.map((candy:string,index:number)=>
        <Cell candy={candy} key={index} candyId={index}/>
      )}
    </div>
  )
}

export default Board
