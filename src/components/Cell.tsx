import React from 'react'

function Cell({candy,candyId}:{candy:string,candyId:number}) {
  return (
    <div>
        {
            <img src={candy} alt="" candy-Id={candyId} />
        }
    </div>
  )
}

export default Cell;
