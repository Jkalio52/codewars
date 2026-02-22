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
 * The Refactor (an optimized approach)
 * Counts how many elements to the right are smaller than the current element.
 * Refactored for better memory management by avoiding repeated array slicing.
 */
function smaller(arr) {
  const result = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    const current = arr[i];

    // Look only at elements to the right of the current index
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < current) {
        count++;
      }
    }
    result[i] = count;
  }

  return result;
}
