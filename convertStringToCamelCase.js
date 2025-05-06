function toCamelCase(str) {
  const regExp = /[-_]\w/ig;
  return str.replace(regExp, function(match) {
    
    return match.charAt(1).toUpperCase();
  });
}





// Alternative solution with just two lines of code 
function toCamelCase(str) {
  return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
}


