//const ticTacToe = (function () {
//	const p1 = 'X';
//	const p2 = '0';
//
//	return {p1};
//})();

const GAME_BOARD = (function () {
	const BOARD = [
		['*', '*', '*'],
		['*', '*', '*'],
		['*', '*', '*']
	];
	const GET_BOARD = () => {
		console.log(BOARD);
	};

	const UPDATE_BOARD = (row, col, player) => {
		BOARD[row].splice(col, 1, player);
	};

	const CHECK_POS_AVAIL = (row, col, player) => {
		BOARD[row][col] === "*" ? UPDATE_BOARD(row, col, player) : console.log('This square is already in use, pick again');
	}
	return {GET_BOARD, CHECK_POS_AVAIL};
})();

console.log('end');