const TIC_TAC_TOE = (function () {

	let _playerList = [];

	//Cache DOM
	let p1Button = document.getElementById("p1Button");
	let p2Button = document.getElementById("p2Button");
	let boardSquares = document.querySelectorAll('.square');
	let resetButton = document.getElementById("resetButton");

	//Bind Events
	p1Button.addEventListener('click', () => {
		PLAYER.addPlayer(1);
	});

	p2Button.addEventListener('click', () => {
		PLAYER.addPlayer(2);
	});

	boardSquares.forEach((item) => {
		item.addEventListener('click', () => {
			GAME.makeMove(item.getAttribute('data-row'), item.getAttribute('data-column'));
		});
	});

	resetButton.addEventListener('click', () => {
		location.reload();
	});

	const GAME_BOARD = (function () {
		let board = [
			[' ', ' ', ' '],
			[' ', ' ', ' '],
			[' ', ' ', ' ']
		];

		let updateBoard = (row, col, playerSymbol) => {
			board[row].splice(col, 1, playerSymbol);
		};

		return {board, updateBoard};
	})();

	const PLAYER = (function () {
		let _createPlayer = (playerNumber) => {
			let name = prompt('Enter your name.');
			let playerSymbol = playerNumber === 1 ? 'X' : 'O';
			let score = 0;
			return {name, playerNumber, playerSymbol, score};
		};

		let addPlayer = (playerNumber) => {
			_playerList.push(_createPlayer(playerNumber))
		};

		return {addPlayer};
	})();

	const GAME = (function () {
		let _moveCounter = 0;

		let _p1WinState = [
			// Rows
			[['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']],
			[[' ', ' ', ' '], ['X', 'X', 'X'], [' ', ' ', ' ']],
			[[' ', ' ', ' '], [' ', ' ', ' '], ['X', 'X', 'X']],

			// Columns
			[['X', ' ', ' '], ['X', ' ', ' '], ['X', ' ', ' ']],
			[[' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' ']],
			[[' ', ' ', 'X'], [' ', ' ', 'X'], [' ', ' ', 'X']],

			// Diagonals
			[['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X']],
			[[' ', ' ', 'X'], [' ', 'X', ' '], ['X', ' ', ' ']]
		];

		let _p2WinState = [
			// Rows
			[['O', 'O', 'O'], [' ', ' ', ' '], [' ', ' ', ' ']],
			[[' ', ' ', ' '], ['O', 'O', 'O'], [' ', ' ', ' ']],
			[[' ', ' ', ' '], [' ', ' ', ' '], ['O', 'O', 'O']],

			// Columns
			[['O', ' ', ' '], ['O', ' ', ' '], ['O', ' ', ' ']],
			[[' ', 'O', ' '], [' ', 'O', ' '], [' ', 'O', ' ']],
			[[' ', ' ', 'O'], [' ', ' ', 'O'], [' ', ' ', 'O']],

			// Diagonals
			[['O', ' ', ' '], [' ', 'O', ' '], [' ', ' ', 'O']],
			[[' ', ' ', 'O'], [' ', 'O', ' '], ['O', ' ', ' ']]
		];

		let makeMove = (row, col) => {
			let index;
			_moveCounter % 2 === 0 ? index = 0 : index = 1;
			_checkPosAvail(row, col, index) ? _checkWin() : _checkTie();
		};

		let _checkPosAvail = (row, col, index) => {
			if (GAME_BOARD.board[row][col] === ' ') {
				GAME_BOARD.updateBoard(row, col, _playerList[index].playerSymbol);
				_render();
				return true
			} else {
				console.log('This square is already in use, pick again.');
				return false
			}
		};
		let _checkTie = () => {
			if (_moveCounter === 9) alert("It's a tie");
		};

		let _checkWin = () => {
			let _sanatizedBoard;
			_incrementMoveCounter();
			if ((_moveCounter >= 5) && (_moveCounter % 2 !== 0)) {
				_sanatizedBoard = JSON.stringify(GAME_BOARD.board).replaceAll(/(?!X)[A-Z]/gm, ' ');
				_checkP1Win(_sanatizedBoard);
			} else if ((_moveCounter >= 5) && (_moveCounter % 2 === 0)) {
				_sanatizedBoard = JSON.stringify(GAME_BOARD.board).replaceAll(/(?!O)[A-Z]/gm, ' ');
				_checkP2Win(_sanatizedBoard);
			}
		};

		let _checkP1Win = (_sanatizedBoard) => {
			_p1WinState.forEach((element) => {
				if (JSON.stringify(element) === _sanatizedBoard) {
					return alert(`P1 Wins`);
				}
			});
		};

		let _checkP2Win = (_sanatizedBoard) => {
			_p2WinState.forEach((element) => {
				if (JSON.stringify(element) === _sanatizedBoard) {
					return alert(`P2 Wins`);
				}
			});
		};

		let _incrementMoveCounter = () => {
			_moveCounter += 1;
		};

		return {makeMove};
	})();

	let _render = () => {
		let counter = 0
		GAME_BOARD.board.forEach((row) => {
			row.forEach((element) => {
				document.getElementById(`#${counter}`).textContent = element;
				counter += 1;
			});
		});
	};
	_render()
	return {GAME, PLAYER};
})();

console.log('end');