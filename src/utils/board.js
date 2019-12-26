const EMPTY_BOARD = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

export function generateBoard() {
  // TESTING ONE:
  // return [
  //   [0, 1, 0, 0, 0],
  //   [0, 0, 1, 1, 0],
  //   [1, 1, 0, 0, 1],
  //   [1, 0, 0, 0, 0],
  //   [0, 0, 1, 1, 1],
  // ];

  const roundsToMakeAFakeMove = 300;
  let board = EMPTY_BOARD;

  for (let i = 0; i < roundsToMakeAFakeMove; i++) {
    const square = getRandomPositionOnBoard();

    board = updateBoard(board, square);
  }

  return board;
}

export function updateBoard(board, { x, y }) {
  const newBoard = JSON.parse(JSON.stringify(board));

  newBoard[y][x] = newBoard[y][x] ? 0 : 1;

  if (x > 0) {
    newBoard[y][x - 1] = newBoard[y][x - 1] ? 0 : 1;
  }
  if (x < newBoard[y].length - 1) {
    newBoard[y][x + 1] = newBoard[y][x + 1] ? 0 : 1;
  }
  if (y > 0) {
    newBoard[y - 1][x] = newBoard[y - 1][x] ? 0 : 1;
  }
  if (y < newBoard.length - 1) {
    newBoard[y + 1][x] = newBoard[y + 1][x] ? 0 : 1;
  }

  return newBoard;
}

export function isWin(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf(1) !== -1) {
      return false;
    }
  }

  return true;
}

export function getInitialSolutionCountBoard() {
  return EMPTY_BOARD;
}

export function updateSolutionCountBoard(solutionBoard, { x, y }) {
  const newSolutionBoard = JSON.parse(JSON.stringify(solutionBoard));

  newSolutionBoard[y][x] = newSolutionBoard[y][x] ? 0 : 1;

  return newSolutionBoard;
}

export function getMinimumMoves(solutionBoard) {
  return solutionBoard.reduce((totalCount, row) => totalCount + row.filter(x => x).length, 0);
}

function getRandomPositionOnBoard() {
  const boardLength = EMPTY_BOARD.length;

  return {
    x: Math.floor(Math.random() * boardLength),
    y: Math.floor(Math.random() * boardLength),
  };
}
