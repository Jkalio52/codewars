function smaller(arr) {
  // .map iterates through each element 'x' at index 'y'
  return arr.map((x, y) => {
    // .slice(y) creates a new sub-array from the current position to the end
    // .filter(num => num < x) creates another array of only smaller numbers
    // .length counts them
    return arr.slice(y).filter(num => num < x).length;
  });
}



/**
The Refactor (an optimized approach)
*/
