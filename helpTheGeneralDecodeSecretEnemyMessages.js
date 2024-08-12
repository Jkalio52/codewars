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


