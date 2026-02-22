function smaller(arr) {
  // .map iterates through each element 'x' at index 'y'
  return arr.map((x, y) => {
    // .slice(y) creates a new sub-array from the current position to the end
    return arr.slice(y).filter(num => num < x).length;
  });
}
