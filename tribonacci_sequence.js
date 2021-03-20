// Tribonacci Sequence
function tribonacci(signature,n){
  //your code here
  let tribon = signature;
  
  for (i = 3; i < n; i++) {
    tribon.push(tribon[i - 1] + tribon[i - 2] + tribon[i - 3]);
  }
  
  return tribon.slice(0, n);
}
