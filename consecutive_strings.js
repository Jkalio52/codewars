function longestConsec(strarr, k) {
    // your code
    if (strarr.length == 0 || k > strarr.length || k <= 0) return '';

    let longestString = '';
    let newString = '';

    for (let i = 0; i < strarr.length; i++) {
        newString = strarr.slice(i, i + k);
        if (newString.join('').length > longestString.length ) {
        longestString = newString.join('');
        }
    }

    return longestString;
}





// A clever solution ...I like this :)
// I got lost at line #25, but I got it now lol
function longestConsec(strarr, k) {
  if( strarr.length==0 || k> strarr.length || k <1 ) return "";
  let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
      i = lens.indexOf( Math.max(...lens) );
  return strarr.slice(i,i+k).join('')
}



