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

	return {GET_BOARD, UPDATE_BOARD};
})();


