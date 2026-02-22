function smaller(arr) {
  // .map iterates through each element 'x' at index 'y'
  return arr.map((x, y) => {
    // 
    return arr.slice(y).filter(num => num < x).length;
  });
}
