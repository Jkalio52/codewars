function createPhoneNumber(numbers) {
  // Solution with .split() and .join() methods 
  // return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`
  
  
  

  // Solution with .replace() method 
  let tel = '(xxx) xxx-xxxx';
  
  for (let i = 0; i < numbers.length; i++) {
    tel = tel.replace('x', numbers[i]);
  }
  
  return tel;
}

