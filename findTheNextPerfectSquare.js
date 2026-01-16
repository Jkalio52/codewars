function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise 
  
  // Declaring variables at the top (older style)
  let square;
  let nextSquare;
  
  // Check if the square root is a whole number. 
  // The modulo operator (%) returns the remainder. 
  // If a number divided by 1 has 0 remainder, it's an integer.
  if (Math.sqrt(sq) % 1 === 0) {
    square = Math.sqrt(sq);   // Calculate the root (e.g., if sq is 121, square is 11)
    nextSquare = square + 1;  // Increment the root (11 becomes 12)
  } else {
      return -1; // Early exit if it's not a perfect square
  }
  
  // Multiply the next root by itself to get the final answer
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

