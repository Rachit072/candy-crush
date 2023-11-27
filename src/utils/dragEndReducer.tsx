import { WritableDraft } from "immer/dist/types/types-external";
import {forColumnOfFour,forColumnOfThree,forInvalidMoves} from "../utils/config";
import {checkForColumnOfThree,checkForRowOfFour,checkForRowOfThree,isColumnOfFour} from "../utils/moves";
import { updateScore } from "./candyCrushSlice";

export const dragEndReducer = (
  state: WritableDraft<{
    board: string[];
    boardSize: number;
    squareBeingReplaced: Element | undefined;
    squareBeingDragged: Element | undefined;
  }>
) => {
  const newBoard = [...state.board];
  let { boardSize, squareBeingDragged, squareBeingReplaced } = state;
  const squareBeingDraggedId: number = parseInt(
    squareBeingDragged?.getAttribute("candy-id") as string
  );
  const squareBeingReplacedId: number = parseInt(
    squareBeingReplaced?.getAttribute("candy-id") as string
  );

  newBoard[squareBeingReplacedId] = squareBeingDragged?.getAttribute(
    "src"
  ) as string;
  newBoard[squareBeingDraggedId] = squareBeingReplaced?.getAttribute(
    "src"
  ) as string;

  const validMoves: number[] = [
    squareBeingDraggedId - 1,
    squareBeingDraggedId - boardSize,
    squareBeingDraggedId + 1,
    squareBeingDraggedId + boardSize,
  ];

  const validMove: boolean = validMoves.includes(squareBeingReplacedId);

  const isAColumnOfFour: boolean | undefined = isColumnOfFour(
    newBoard,
    boardSize,
    forColumnOfFour(boardSize)
  );

  const isARowOfFour: boolean | undefined = checkForRowOfFour(
    newBoard,
    boardSize,
    forInvalidMoves(boardSize, true)
  );

  const isAColumnOfThree: boolean | undefined = checkForColumnOfThree(
    newBoard,
    boardSize,
    forColumnOfThree(boardSize)
  );

  const isARowOfThree: boolean | undefined = checkForRowOfThree(
    newBoard,
    boardSize,
    forInvalidMoves(boardSize)
  );

  if (
    squareBeingReplacedId &&
    validMove &&
    (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)
  ) {
    squareBeingDragged = undefined;
    squareBeingReplaced = undefined;
  } else {
    newBoard[squareBeingReplacedId] = squareBeingReplaced?.getAttribute(
      "src"
    ) as string;
    newBoard[squareBeingDraggedId] = squareBeingDragged?.getAttribute(
      "src"
    ) as string;
  }
//   const candyReplaced = squareBeingReplacedId !== undefined;
//   if (candyReplaced) {
//     const scoreIncrease = 1; 
//     updateScore(scoreIncrease);

//   }
  state.board = newBoard;
};
