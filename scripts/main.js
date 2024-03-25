const TIC_TAC_TOE = (function () {

	const GAME_BOARD = (function () {
		const _BOARD = [
			['*', '*', '*'],
			['*', '*', '*'],
			['*', '*', '*']
		];
		const GET_BOARD = () => {
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
			const _PLAYERS = []
			const CREATE_PLAYER = () => {
				name = prompt('Enter your name.');
				const _PLAYER_1 = {name, player: 'Player1', symbol: 'X', score: 0}
				const _PLAYER_2 = {name, player: 'Player2', symbol: '0', score: 0}

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

		const MAKE_MOVE = (row, col, player) => {
			GAME_BOARD.CHECK_POS_AVAIL(row, col, player)
			console.log(GAME_BOARD.GET_BOARD())
		}
		return {MAKE_MOVE}
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