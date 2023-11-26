import React from 'react'
import './Cell.css';

function Cell({candy,candyId}:{candy:string,candyId:number}) {
  return (
    <div className='cell'>
        {
          candy && <img src={candy} alt="" candy-id={candyId} />
        }
    </div>
  )
}

export default Cell;
