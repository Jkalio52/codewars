// Tribonacci Sequence
function tribonacci(signature,n){
  //your code here
  let arr = signature;
  
  for (i = 3; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  
  return arr.slice(0, n);
}
