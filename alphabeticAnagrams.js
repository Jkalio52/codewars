function listPosition(word) {
  let obj = {};
  let counter = [];
  let counts = 0;

  word.split("").sort().forEach(function(x) {
      if ( obj[x] == undefined ) {
          obj[x] = counts;
          counter[counts] = 0;
          counts ++;
      }
  });

  let min = 1;
  let sum = min;

  word.split("").reverse().forEach(function(x, i) {
      let step = i + 1, idx = obj[x];
      counter[idx] ++;
      min /= counter[idx];
      for (let j = 0; j < idx; ++j) 
          if (counter[j] != 0) 
              sum += min * counter[j];
      min *= step;
  });

  return sum;
}



/**
Refactor this to use ES6+ syntax (Map, reduce)...
*/
