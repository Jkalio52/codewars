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



// The ternary operator solution looks a lot cleaner, and simpler
