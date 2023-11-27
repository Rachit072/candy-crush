export const forColumnOfFour = (boardSize: number) =>
  boardSize * boardSize - 3*(boardSize) - 1;

export const forColumnOfThree = (boardSize: number) =>
  boardSize * boardSize - 2*(boardSize) - 1;

export const forMoveBelow = (boardSize: number) =>
  boardSize * boardSize - boardSize - 1;

export const forInvalidMoves = (
  boardSize: number,
  isFour: boolean = false
) => {
  const invalidMoves: Array<number> = [];
  for (let i: number = boardSize; i <= boardSize * boardSize; i += boardSize) {
    if (isFour) invalidMoves.push(i - 3);
    invalidMoves.push(i - 2);
    invalidMoves.push(i - 1);
  }
  return invalidMoves;
};
