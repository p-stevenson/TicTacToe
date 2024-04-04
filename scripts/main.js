const TIC_TAC_TOE = (function () {
	const _PLAYERS_LIST = [];

	const GAME_BOARD = (function () {
		const _BOARD = [
			['*', '*', '*'],
			['*', '*', '*'],
			['*', '*', '*']
		];
		const DISPLAY_BOARD = () => {
			console.log(_BOARD);
		};

		const _UPDATE_BOARD = (row, col, playerSymbol) => {
			_BOARD[row].splice(col, 1, playerSymbol);
		};

		return {DISPLAY_BOARD, _BOARD, _UPDATE_BOARD};
	})();

	const PLAYER = (function () {
		const _CREATE_PLAYER = (playerNumber) => {
			const name = prompt('Enter your name.');
			const playerSymbol = playerNumber === 1 ? 'X' : 'O';
			const score = 0;
			return {name, playerNumber, playerSymbol, score};
		}

		const ADD_PLAYER = (playerNumber) => {
			_PLAYERS_LIST.push(_CREATE_PLAYER(playerNumber));
		}

		const DISPLAY_PLAYERS = () => {
			console.log(_PLAYERS_LIST);
		}

		return {ADD_PLAYER, DISPLAY_PLAYERS};
	})();

	const GAME = (function () {
		let _move_counter = 0;

		const _p1_win_states = [
			// Rows
			[['X', 'X', 'X'], ['*', '*', '*'], ['*', '*', '*']],
			[['*', '*', '*'], ['X', 'X', 'X'], ['*', '*', '*']],
			[['*', '*', '*'], ['*', '*', '*'], ['X', 'X', 'X']],

			// Columns
			[['X', '*', '*'], ['X', '*', '*'], ['X', '*', '*']],
			[['*', 'X', '*'], ['*', 'X', '*'], ['*', 'X', '*']],
			[['*', '*', 'X'], ['*', '*', 'X'], ['*', '*', 'X']],

			// Diagonals
			[['X', '*', '*'], ['*', 'X', '*'], ['*', '*', 'X']],
			[['*', '*', 'X'], ['*', 'X', '*'], ['X', '*', '*']]
		];

		const _p2_win_states = [
			// Rows
			[['0', '0', '0'], ['*', '*', '*'], ['*', '*', '*']],
			[['*', '*', '*'], ['0', '0', '0'], ['*', '*', '*']],
			[['*', '*', '*'], ['*', '*', '*'], ['0', '0', '0']],

			// Columns
			[['0', '*', '*'], ['0', '*', '*'], ['0', '*', '*']],
			[['*', '0', '*'], ['*', '0', '*'], ['*', '0', '*']],
			[['*', '*', '0'], ['*', '*', '0'], ['*', '*', '0']],

			// Diagonals
			[['0', '*', '*'], ['*', '0', '*'], ['*', '*', '0']],
			[['*', '*', '0'], ['*', '0', '*'], ['0', '*', '*']]
		]

		const MAKE_MOVE = (row, col, index) => {
			_move_counter % 2 === 0 ? index = 0 : index = 1;
			_CHECK_FOR_TIE(row, col, index)
		}

		const _CHECK_POS_AVAIL = (row, col, index) => {

			if (GAME_BOARD._BOARD[row][col] === "*") {
				GAME_BOARD._UPDATE_BOARD(row, col, _PLAYERS_LIST[index].playerSymbol);
				_INCREMENT_MOVE_COUNTER();
			} else {
				console.log('This square is already in use, pick again.');
			}
		}
		const _CHECK_FOR_TIE = (row, col, index) => {
			_move_counter !== 9 ? _CHECK_POS_AVAIL(row, col, index) : alert("It's a tie");
		}

		const _CHECK_FOR_WIN = () => {
			if (_move_counter >= 5) {
				if (_CHECK_P1_WIN_STATES()) {
					alert('P1 Wins');
				} else if (_CHECK_P2_WIN_STATES()) {
					alert('P2 Wins');
				} else {
					console.log(`continue`);
				}
			} else {
				console.log(_move_counter);
			}
		}

		const _CHECK_P1_WIN_STATES = () => {
			_p1_win_states.forEach((element) => {
				if (JSON.stringify(element) === JSON.stringify(GAME_BOARD._BOARD)) {
					return true;
				}
			});
		};

		const _CHECK_P2_WIN_STATES = () => {
			_p2_win_states.forEach((element) => {
				if (JSON.stringify(element) === JSON.stringify(GAME_BOARD._BOARD)) {
					return true;
				}
			});
		};

		const
			_INCREMENT_MOVE_COUNTER = () => {
				_move_counter += 1;
				console.log(_move_counter);
			}

		return {MAKE_MOVE, _CHECK_FOR_WIN, _CHECK_P1_WIN_STATES, _CHECK_P2_WIN_STATES};
	})();

	return {GAME_BOARD, GAME, PLAYER};
})();

//TODO create method for win condition check
//TODO link to DOM
//TODO create method for rendering board?
//TODO make methods private where appropriate


console.log('end');