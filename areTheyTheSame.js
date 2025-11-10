function comp(array1, array2) {
  // your code here
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  
  return array1.map(x => x * x).sort().toString() === array2.sort().toString();
}






// I like this solution, it seems simpler. :)
function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}
