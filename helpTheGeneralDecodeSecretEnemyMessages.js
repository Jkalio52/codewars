// Help the general decode secret enemy messages solution 
// This first line is just testing the device's behavior
console.log(device.encode('What is this ?'));

/**
 * The strategy here is to build a lookup table by encoding strings of 
 * repeating characters to see how the 'device' transforms them 
 * at specific string indices.
 */
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.? -';

device.decode = function (w) {
  let solve = '';
  let wrdfinder = {};
  
  // STEP 1: Build the 'Rainbow Table'
  // We iterate through every possible character in our known alphabet
  for (let y = 0; y < chars.length; y++) {
    let code = '';
    
    // Create a string of the current character that matches the length of the secret message
    // This accounts for ciphers that change based on character position (index)
    for (let x = 0; x < w.length; x++) {
      code += chars[y];
    }
    
    // Store the encoded version as the KEY and the original character as the VALUE
    // wrdfinder['encoded_string'] = 'A'
    wrdfinder[device.encode(code)] = chars[y];
  }
  
  // STEP 2: Reverse Mapping
  // Now we iterate through each character position of the secret message 'w'
  for (let x = 0; x < w.length; x++) {
    // Look through our generated lookup table
    for (let i in wrdfinder) {
      // If the character at position 'x' in the encoded sample matches 
      // the character at position 'x' in our secret message...
      if (i[x] == w[x]) {
        // ...then we've found the original character!
        solve += wrdfinder[i];
      }
    }
  }
  
  return solve; 
};




/**
// Help the general decode secret enemy messages solution 
console.log (device.encode ('What is this ?'));
device.decode = function (w) {
  return w; 
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.? -';
device.decode = function (w) {
  let solve = '';
  let wrdfinder = {};
  
  for (let y = 0; y < chars.length; y++) {
    let code = '';
    for (let x = 0; x < w.length; x++)
      code += chars[y];
    
    wrdfinder[device.encode(code)] = chars[y];
  }
  
  for (let x = 0; x < w.length; x++) {
    for (let i in wrdfinder) {
      if (i[x] == w[x])
        solve += wrdfinder[i];
    }
  }
  
  return solve; 
};
*/






// Other solution by firstonline, MaxiimRandob, d@rude1337 -- Very easy to read :) 
device.decode = function (w) {
  for (j = 0; j < 65; j++){
    w = device.encode (w)
  }
  return w; 
}






// Clean and easy to read solution by 0lexa
device.decode = w =>
  [...Array(65)].reduce(pre => device.encode(pre), w);


