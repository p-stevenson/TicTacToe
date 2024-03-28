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

		const _UPDATE_BOARD = (row, col, player) => {
			_BOARD[row].splice(col, 1, player);
		};

		const CHECK_POS_AVAIL = (row, col, player) => {
			_BOARD[row][col] === "*" ? _UPDATE_BOARD(row, col, PLAYER._PLAYERS[player].symbol) : console.log('This square is already in use, pick again');
		}
		return {GET_BOARD, CHECK_POS_AVAIL};
	})();

	const PLAYER = (function () {
		const _CREATE_PLAYER = (playerNumber) => {
			const name = prompt('Enter your name.');
			const playerSymbol = playerNumber === 1 ? 'X' : 'O';
			const score = 0;
			return {name, playerNumber, playerSymbol, score};
		}

				_PLAYERS[0] === undefined ? _PLAYERS[0] = _PLAYER_1 : _PLAYERS[1] = _PLAYER_2;
				console.log(_PLAYERS);
			}
			const INCREMENT_SCORE = (playerNumber) => {
				_PLAYERS[playerNumber].score += 1;
				console.log(_PLAYERS);
			}
			return {CREATE_PLAYER, INCREMENT_SCORE, _PLAYERS}
		}
	)
	();

	const GAME = (function () {
		let _move_counter = 0;

		const DISPLAY_MOVE_COUNTER = () => console.log(_move_counter);

		const _INCREMENT_MOVE_COUNTER = () => {
			_move_counter += 1;
			console.log(_move_counter);
		}

		const MAKE_MOVE = (row, col, index) => {
			_move_counter % 2 === 0 ? index = 0 : index = 1;
			CHECK_FOR_TIE(row, col, index)
			console.log(GAME_BOARD.DISPLAY_BOARD());
		}

		const CHECK_FOR_TIE = (row, col, index) => {
			_move_counter === 2 ? alert("It's a tie") : CHECK_POS_AVAIL(row, col, index);
		}

		const CHECK_POS_AVAIL = (row, col, index) => {
			GAME_BOARD._BOARD[row][col] === "*" ? GAME_BOARD._UPDATE_BOARD(row, col, _PLAYERS_LIST[index].playerSymbol) :
				console.log('This square is already in use, pick again');
		}

		return {MAKE_MOVE, DISPLAY_MOVE_COUNTER, _INCREMENT_MOVE_COUNTER, CHECK_FOR_TIE, CHECK_POS_AVAIL};
	})();
	return {GAME_BOARD, GAME, PLAYER}
})();

//TODO create move counter that only increments after a valid move
//TODO select P1 or P2 for next move based on move counter odd vs even values
//TODO create method for win condition check
//TODO link to DOM
//TODO create method for rendering board
//TODO make methods private where appropriate


console.log('end');