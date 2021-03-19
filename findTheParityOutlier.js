// Codewars Challenge
// Find The Parity Outlier
function findOutlier(integers){
  //your code here
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
