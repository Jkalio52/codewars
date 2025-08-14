// Codewars Challenge 
// Find The Parity Outlier 
function findOutlier(integers) {
  // your code here 
  const oddArr = [];
  const evenArr = [];
  
  for (let int of integers) {
    if (int % 2 === 0) {
      evenArr.push(int);
    } else {
      oddArr.push(int);
    }
  }
  
  return oddArr.length === 1 ? oddArr[0] : evenArr[0]
};








/*
This other solution (below) looks a lot cleaner than mine :( 
*/
function findOutlier(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
