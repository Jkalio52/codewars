function scramble(str1, str2) {
 // code me
  if (str1.length < str2.length) return false;
  
  const word2 = str2.split("");
  
  str1.split("").forEach(val => {
    if (word2.includes(val)) word2.splice(word2.indexOf(val), 1);
  });

    return word2.length == 0;
}





// A clever solution... I like :)
function scramble(str1, str2) {
 var arr = []; 

  [...str2].map(function(v) {
    arr.push( [...str1].includes(v) );
  });

  return arr.every(function(v) { return v === true });
}


