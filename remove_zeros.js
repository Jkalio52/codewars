function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the 
  // end of the array, while the other elements maintain order. 
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0] 
  // Zero elements also maintain the order in which they occurred. 
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"] 
  
  // Do not use any temporary arrays or objects. Additionally, you're not able 
  // to use any Array or Object prototype methods such as .shift(), .push(), etc 
  
  // The correctly sorted array should be returned. 
  // return array; 
  
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







// Other solutions with .Math() method, clever... 
const removeZeros = array => {
  for (let i = array.length - 1; i > 0; i--) {
    if ((array[i] !== 0 && array[i] !== `0`) && (array[i - 1] === 0 || array[i - 1] === `0`)) {
      [array[i], array[i - 1]] = [array[i - 1], array[i]];
      i = Math.min(i + 2, array.length);
    }
  }
  return array;
}

