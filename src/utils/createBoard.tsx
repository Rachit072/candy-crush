const candyColors: string[] = [
    "url(https://github.com/kubowania/candy-crush/blob/master/images/blue-candy.png?raw=true)",
    "url(https://github.com/kubowania/candy-crush/blob/master/images/green-candy.png?raw=true)",
    "url(https://github.com/kubowania/candy-crush/blob/master/images/orange-candy.png?raw=true)",
    "url(https://github.com/kubowania/candy-crush/blob/master/images/purple-candy.png?raw=true)",
    "url(https://github.com/kubowania/candy-crush/blob/master/images/red-candy.png?raw=true)",
    "url(https://github.com/kubowania/candy-crush/blob/master/images/yellow-candy.png?raw=true)"
  ];
  
  export const createBoard = (boardSize: number = 10) => {
    const board = Array.from({ length: boardSize * boardSize }, () =>
      candyColors[Math.floor(Math.random() * candyColors.length)]
    );
    return board;
  };
  