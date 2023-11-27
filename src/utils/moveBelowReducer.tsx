import { candyColors } from "../utils/createBoard";
import { forMoveBelow } from "../utils/config";
import { WritableDraft } from "immer/dist/types/types-external";

export const moveBelowReducer = (
  state: WritableDraft<{
    board: string[];
    boardSize: number;
    squareBeingReplaced: Element | undefined;
    squareBeingDragged: Element | undefined;
  }>
) => {
  const newBoard: string[] = [...state.board];
  const { boardSize } = state;
  let boardChanges: boolean = false;
  const formulaForMove: number = forMoveBelow(boardSize);
  for (let i = 0; i <= formulaForMove; i++) {
    const firstRow = Array(boardSize)
      .fill(0)
      .map((_value: number, index: number) => index);

    const isFirstRow = firstRow.includes(i);

    if (isFirstRow && newBoard[i] === "") {
      let randomNumber = Math.floor(Math.random() * candyColors.length);
      newBoard[i] = candyColors[randomNumber];
      boardChanges = true;
    }

    if (newBoard[i + boardSize] === "") {
      newBoard[i + boardSize] = newBoard[i];
      newBoard[i] = "";
      boardChanges = true;
    }
    if (boardChanges) state.board = newBoard;
  }
};
