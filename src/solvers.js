/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n, board) {
  board = board || new Board({n: n});
  var solution = [];
  var pieces = 0;

  var findSolution = function(row, column, board) {

    board.togglePiece(row, column);

    if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(column)) {
      pieces++;
      if (pieces >= n) {
        for (var k = 0; k < n; k++) {
          solution.push(board.attributes[k]);
        }
        return;
      }
    } else {
      board.togglePiece(row, column);
    }
    column++;
    if (column === n) {
      column = 0;
      row++;
      if (row === n) {
        return;
      }
    }
    findSolution(row, column, board);

  };

  findSolution(0, 0, board);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  if (n === 1) {
    return 1;
  }

  var board = new Board({n: n});
  
  var solutionCount = 0;
  var rookLocations = {};
  for (var i = 0; i < n; i++) {
    rookLocations[i] = 0;
  }

  var rook = 0;
  var column = 0;

  while (!(rook === 0 && column === n)) {
    console.log(board.attributes);

    if (column > n - 1) {
      rook--;
      column = rookLocations[rook] + 0;
      board.togglePiece(rook, column);
      column++;
    }

    board.togglePiece(rook, column);

    // check for good location
    if (!board.hasRowConflictAt(rook) && !board.hasColConflictAt(column)) {

      // save location
      rookLocations[rook] = column + 0;

      if (rook === n - 1) {

        solutionCount++;
        board.togglePiece(rook, column);     
        debugger;
        rook--;
        column = rookLocations[rook] + 0;
        board.togglePiece(rook, column);
        column++;

      } else {  
        debugger;
        rook++;
        column = 0;

      }
    } else {

      if (column === n - 1) {
        board.togglePiece(rook, column);
        debugger;
        rook--;
        column = rookLocations[rook] + 0;
      }
      debugger;
      board.togglePiece(rook, column);
      column++;
    }

  }


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 1) {
    return 1;
  }

  var board = new Board({n: n});
  
  var solutionCount = 0;
  var rookLocations = {};
  for (var i = 0; i < n; i++) {
    rookLocations[i] = 0;
  }

  var rook = 0;
  var column = 0;

  while (!(rook === 0 && column === n)) {
    console.log(board.attributes);

    if (column > n - 1) {
      rook--;
      column = rookLocations[rook] + 0;
      board.togglePiece(rook, column);
      column++;
    }

    board.togglePiece(rook, column);

    // check for good location
    if (!board.hasRowConflictAt(rook) && !board.hasColConflictAt(column) && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts()) {

      // save location
      rookLocations[rook] = column + 0;

      if (rook === n - 1) {

        solutionCount++;
        
        board.togglePiece(rook, column);     
        debugger;
        rook--;
        column = rookLocations[rook] + 0;
        board.togglePiece(rook, column);
        column++;

      } else {  
        debugger;
        rook++;
        column = 0;

      }
    } else {

      if (column === n - 1) {
        board.togglePiece(rook, column);
        debugger;
        rook--;
        column = rookLocations[rook] + 0;
      }
      debugger;
      board.togglePiece(rook, column);
      column++;
    }

  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
