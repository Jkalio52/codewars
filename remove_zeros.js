function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.
  //return array;
  
  const start = []
  const stop = []
  for (const elem of array) {
    if (elem === 0 || elem === "0") {
      stop[stop.length] = elem;
    } else {
      start[start.length] = elem;
    }
  }
  
  return [...start, ...stop]
};
