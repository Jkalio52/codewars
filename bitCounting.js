var countBits = function(n) {
  // Program Me
  // Create an array with bit output
   let binary = (n).toString(2).split('');
   
   // Then create a sum with the array and make the index a Number
   let output = binary.reduce((sum, num) => sum + Number(num), 0);
   
   return output;
};

