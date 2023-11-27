import React from 'react'
import { useDispatch } from 'react-redux';
import './Cell.css';
import { dragDrop, dragEnd, dragStart } from "../utils/candyCrushSlice";

function Cell({candy,candyId}:{candy:string,candyId:number}) {
  const dispatch= useDispatch();
  return (
    <div className='cell'>
        {
          candy && <img width={40} src={candy} alt="" candy-id={candyId}
          draggable={true}
          onDragStart={(e) => dispatch(dragStart(e.target))}
          onDrop={(e) => dispatch(dragDrop(e.target))}
          onDragEnd={() => dispatch(dragEnd())}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
           />
        }
    </div>
  )
}

export default Cell;
