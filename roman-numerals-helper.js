// TODO: create a RomanNumerals helper object
const RomanNumerals = {
  toRoman: function(value) {
    let map = { 
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9, 
      V: 5,
      IV: 4,
      I: 1 
    };
    
    let roman = '';
    while (value > 0) {
      for (var r in map) {
        if (map[r] <= value) {
          roman += r;
          value -= map[r];
          break;
        }
      }
    }
    
    return roman;
  },
  
  fromRoman: function(roman) {
    let map = { 
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000 
    };
    
    let value = 0;
    for (var i = 0; i < roman.length; i++) {
      let two = map[roman[i] + roman[i + 1]], one = map[roman[i]];
      if (two != null) { 
        value += two; 
        i++; 
      } else if (one != null) value += one;
    }
    
    return value;
  }
};









// The simplified refactor (June 2026) 
/**
Here we leverage Array.entries(), reduce(), and for...of loops to make the code more declarative, readable, and less prone to the "index tracking" bugs
*/
const RomanNumerals = {
  // Define a single source of truth for the values
  map: [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
    ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
  ],

  toRoman(value) {
    let result = '';
    for (const [symbol, number] of this.map) {
      while (value >= number) {
        result += symbol;
        value -= number;
      }
    }
    return result;
  },

  fromRoman(roman) {
    // Map individual chars to values for the lookahead logic
    const charMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    
    return [...roman].reduce((acc, char, i, arr) => {
      const current = charMap[char];
      const next = charMap[arr[i + 1]];
      // If the current value is less than the next, subtract it (like IV = 4)
      return next > current ? acc - current : acc + current;
    }, 0);
  }
};
