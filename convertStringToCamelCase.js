function toCamelCase(str) {
  const regExp = /[-_]\w/ig;
  return str.replace(regExp, function(match) {
    return match.charAt(1).toUpperCase();
  });
}



// Alternative solution
