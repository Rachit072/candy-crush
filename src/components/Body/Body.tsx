import React, { useState,useEffect} from 'react'

interface GameState {
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    score: number;
  }
  
interface Candy{
    id:string;
    color:string;
}

export default function Body() {
    const numRows=10;
    const numCols=10;

    const [gameState, setGameState] = useState<GameState>(() => ({
        gamesPlayed: 0,
        gamesWon: 0,
        gamesLost: 0,
        score: 0,
      }));

    const [board,setBoard] = useState<Candy[][]>(createBoard);
    
    useEffect(() => {
        const updatedBoard = checkForMatches();
      
        if (updatedBoard !== null && updatedBoard !== undefined) {
          setBoard(updatedBoard);
          setGameState((prev) => ({ ...prev, score: prev.score + 1 }));
        }
      }, [checkForMatches, setBoard, setGameState]); 
      
      
    
      function checkForMatches(){
        const updatedBoard: Candy[][] = JSON.parse(JSON.stringify(board)); // Create a deep copy
        for (let row = 0; row < numRows; row++) {
          for (let col = 0; col < numCols - 2; col++) {
            const color = updatedBoard[row][col].color;
            if (
              color === updatedBoard[row][col + 1].color &&
              color === updatedBoard[row][col + 2].color
            ) {
              updatedBoard[row][col].color = '';
              updatedBoard[row][col + 1].color = '';
              updatedBoard[row][col + 2].color = '';
              setGameState((prev) => ({ ...prev, score: prev.score + 1 }));
            }
          }
        }
        for (let col = 0; col < numCols; col++) {
          for (let row = 0; row < numRows - 2; row++) {
            const color = updatedBoard[row][col].color;
            if (
              color === updatedBoard[row + 1][col].color &&
              color === updatedBoard[row + 2][col].color
            ) {
              updatedBoard[row][col].color = '';
              updatedBoard[row + 1][col].color = '';
              updatedBoard[row + 2][col].color = '';
              setGameState((prev) => ({ ...prev, score: prev.score + 1 }));
            }
          }
        }
    
        setBoard(updatedBoard);

      }
    function handleCellClick(row:number,col:number,id:string){
        const clickedColor = board[row][col].color;
        for (let c = col - 2; c <= col + 2; c++) {
          if (board[row][c]?.color === clickedColor) {
            setGameState((prev) => ({ ...prev, score: prev.score + 1 }));
            setBoard((prevBoard) => {
              const newBoard = [...prevBoard];
              newBoard[row][c].color = '';
              return newBoard;
            });
          }
        }
        for (let r = row - 2; r <= row + 2; r++) {
          if (board[r]?.[col]?.color === clickedColor) {
            setGameState((prev) => ({ ...prev, score: prev.score + 1 }));
            setBoard((prevBoard) => {
              const newBoard = [...prevBoard];
              newBoard[r][col].color = '';
              return newBoard;
            });
          }
        }

    }

    function createBoard(): Candy[][] {
        const newBoard: Candy[][] = [];
        for (let row = 0; row < numRows; row++) {
          const newRow: Candy[] = [];
          for (let col = 0; col < numCols; col++) {
            newRow.push({ id: `${row}-${col}`, color: getRandomColor() });
          }
          newBoard.push(newRow);
        }
        return newBoard;
      }
      function getRandomColor(): string {
        const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        return colors[Math.floor(Math.random() * colors.length)];
      }
  return (
    <div>
      <div>
        <p>Games Played: {gameState.gamesPlayed}</p>
        <p>Games Won: {gameState.gamesWon}</p>
        <p>Games Lost: {gameState.gamesLost}</p>
        <p>Score: {gameState.score}</p>
      </div>
      <div>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={cell.id}
                className="cell"
                style={{ backgroundColor: cell.color }}
                onClick={() => handleCellClick(rowIndex,colIndex, cell.id)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
