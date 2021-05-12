// Help the general decode secret enemy messages solution
console.log (device.encode ('What is this ?')) ;
device.decode = function (w) {
  return w ; 
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
