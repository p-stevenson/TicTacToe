const TIC_TAC_TOE = (function () {
	
	const _PLAYERS_LIST = [];

	const GAME_BOARD = (function () {
		const BOARD = [
			['*', '*', '*'],
			['*', '*', '*'],
			['*', '*', '*']
		];

		const UPDATE_BOARD = (row, col, playerSymbol) => {
			BOARD[row].splice(col, 1, playerSymbol);
		};

		return {BOARD, UPDATE_BOARD};
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

		return {ADD_PLAYER};
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
			[['O', 'O', 'O'], ['*', '*', '*'], ['*', '*', '*']],
			[['*', '*', '*'], ['O', 'O', 'O'], ['*', '*', '*']],
			[['*', '*', '*'], ['*', '*', '*'], ['O', 'O', 'O']],

			// Columns
			[['O', '*', '*'], ['O', '*', '*'], ['O', '*', '*']],
			[['*', 'O', '*'], ['*', 'O', '*'], ['*', 'O', '*']],
			[['*', '*', 'O'], ['*', '*', 'O'], ['*', '*', 'O']],

			// Diagonals
			[['O', '*', '*'], ['*', 'O', '*'], ['*', '*', 'O']],
			[['*', '*', 'O'], ['*', 'O', '*'], ['O', '*', '*']]
		]

		const MAKE_MOVE = (row, col, index) => {
			_move_counter % 2 === 0 ? index = 0 : index = 1;
            _CHECK_POS_AVAIL(row, col, index) ? _CHECK_FOR_WIN() : _CHECK_FOR_TIE();
		}

		const _CHECK_POS_AVAIL = (row, col, index) => {
			if (GAME_BOARD.BOARD[row][col] === "*") {
				GAME_BOARD.UPDATE_BOARD(row, col, _PLAYERS_LIST[index].playerSymbol);
				return true
			} else {
				console.log('This square is already in use, pick again.');
				return false
			}
		}
		const _CHECK_FOR_TIE = () => {
			if (_move_counter === 9) alert("It's a tie");
		}

		const _CHECK_FOR_WIN = () => {
            let _modifiedBoard;
			_INCREMENT_MOVE_COUNTER();
			if ((_move_counter >= 5) && (_move_counter % 2 !== 0)) {
				_modifiedBoard = JSON.stringify(GAME_BOARD.BOARD).replaceAll(/(?!X)[A-Z]/gm, '*');
				_CHECK_P1_WIN_STATES(_modifiedBoard);
			} else if ((_move_counter >= 5) && (_move_counter % 2 === 0)) {
				_modifiedBoard = JSON.stringify(GAME_BOARD.BOARD).replaceAll(/(?!O)[A-Z]/gm, '*');
                _CHECK_P2_WIN_STATES(_modifiedBoard);
			}
		}

		const _CHECK_P1_WIN_STATES = (_modifiedBoard) => {
			_p1_win_states.forEach((element) => {
				if(JSON.stringify(element) === _modifiedBoard) {
                    return alert(`P1 Wins`);
				}
			});
		};

		const _CHECK_P2_WIN_STATES = (_modifiedBoard) => {
			_p2_win_states.forEach((element) => {
				if (JSON.stringify(element) === _modifiedBoard) {
					return alert(`P2 Wins`);
				}
			});
		};

		const _INCREMENT_MOVE_COUNTER = () => {
				_move_counter += 1;
				console.log(_move_counter);
			}

		return {MAKE_MOVE};
	})();

	return {GAME, PLAYER};
})();

console.log('end');