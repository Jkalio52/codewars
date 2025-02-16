function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise 
  let square;
  let nextSquare;
  
  if (Math.sqrt(sq) % 1 === 0) {
    square = Math.sqrt(sq)
    nextSquare = square +1
  } else {
        return -1;
    }
  
    return nextSquare * nextSquare;
}







// This ternary operator solution looks a lot cleaner, and simpler 
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) +1, 2);
}






// Other solution with ternary operator 
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
