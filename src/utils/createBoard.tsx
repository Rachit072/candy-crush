import candyRed from './images/red-candy.png';
import candyBlue from './images/blue-candy.png'
import candyOrange from './images/orange-candy.png'
import candyPurple from './images/purple-candy.png'
import candyYellow from './images/yellow-candy.png'
import candyGreen from './images/green-candy.png'

export const candyColors: string[] = [
  candyRed,candyBlue,candyOrange,candyPurple,candyYellow,candyGreen,
  ];
  
  export const createBoard = (boardSize: number = 10) => {
    const board = Array.from({ length: boardSize * boardSize }, () =>
      candyColors[Math.floor(Math.random() * candyColors.length)]
    );
    return board;
  };
  