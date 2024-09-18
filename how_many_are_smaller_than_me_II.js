function smaller(arr) {
   // code me 
  return arr.map((x, y) => {
   return arr.slice(y).filter(num => num < x).length;
 });
}

