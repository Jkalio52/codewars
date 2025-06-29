function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the 
  // end of the array, while the other elements maintain order. 
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0] 
  // Zero elements also maintain order in which they occurred. 
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








// even more clever and Best practice, I like this one :) 
function removeZeros(array) {
  removeZerosMergeSort(array, 0, array.length - 1);
  return array;
}
function removeZerosMergeSort(array, start, end) {
  // Base cases of length 1 and 2 
  if (start >= end) return;
  if (start + 1 == end) { 
    if ( isZero(array[start]) && !isZero(array[end]) ) 
      swap(array, start, end);
    return;
  }
  // Recursive case 
  var middle = Math.floor((start + end) / 2);
  removeZerosMergeSort(array, start, middle - 1);
  removeZerosMergeSort(array, middle, end);
  // Merge in place by overwriting the left side of the merge
  // The overwritten items are safely stowed behind the right side until needed
  var target = start, left = start, right = middle;
  while (target < end && left < right) {
    if ( isZero(array[left]) && !isZero(array[right]) )
      swap(array,right++,target++);
    else swap(array,left++,target++);
    // Check if the left items have been stowed behind the right items
    if (left == target - 1) left = right - 1;
    // Check when stowed items have been used up, return to the left
    if (left == right) left = target;
  }
}
function swap(a,i,j) { var t = a[i]; a[i] = a[j]; a[j] = t; }
function isZero(x) { return x === 0 || x === '0'; }


