function order(words) {
  //...
  let wordsArray = words.split(' ');
  let numArray = words.match(/[1-9]/g);
  let newArray = [];
  if (words.length == 0) {
    return words
  }
  
  for (let i = 1; i <= numArray.length; i++) {
    let num = numArray.indexOf(i.toString())
    newArray.push(wordsArray[num])
  }
  return newArray.join(' ')
}






// Other Solution
// A simpler and cleaner solution 
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}

