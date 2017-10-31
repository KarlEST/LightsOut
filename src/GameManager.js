export default class GameManager {
	constructor() {
		this.field = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
	}

	generateInitialField() {
		// return [[0, 1, 0, 0, 0], [0, 0, 1, 1, 0], [1, 1, 0, 0, 1], [1, 0, 0, 0, 0], [0, 0, 1, 1, 1]];
		const roundsToMakeAFakeMove = 300;

		for (let i = 0; i < roundsToMakeAFakeMove; i++) {
			const fieldPosition = this.generateRandomFieldPosition();
			const { x, y } = fieldPosition;
			console.log('x: ', x, ' & y: ', y, '& value: ', this.field[x][y]);

			const square = {
				squareValue: this.field[y][x],
				x,
				y,
			};

			this.updateField(square);
		}
	}

	generateRandomFieldPosition() {
		const fieldLength = this.field.length;

		return {
			x: Math.floor(Math.random() * fieldLength),
			y: Math.floor(Math.random() * fieldLength),
		};
	}

	getField() {
		return this.field;
	}

	updateField(square) {
		const { squareValue, x, y } = square;
		const newGameField = JSON.parse(JSON.stringify(this.field)); // for multi-dimensional array deepcopy

		newGameField[y][x] = squareValue ? 0 : 1;

		if (x > 0) {
			newGameField[y][x - 1] = newGameField[y][x - 1] ? 0 : 1;
		}
		if (x < newGameField[y].length - 1) {
			newGameField[y][x + 1] = newGameField[y][x + 1] ? 0 : 1;
		}
		if (y > 0) {
			newGameField[y - 1][x] = newGameField[y - 1][x] ? 0 : 1;
		}
		if (y < newGameField.length - 1) {
			newGameField[y + 1][x] = newGameField[y + 1][x] ? 0 : 1;
		}

		this.field = newGameField;
	}

	isWin() {
		for (let i = 0; i < this.field.length; i++) {
			if (this.field[i].indexOf(1) !== -1) {
				return false;
			}
		}

		return true;
	}
}
