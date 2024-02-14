// Simplest solution
function arrayDiff(a, b) {
  let diff = a.filter(x => b.indexOf(x) === -1)
    return diff;
}




// Other solutions...
function arrayDiff(a, b) {
  let diff = [];
  a = a.toString().split(',').map(Number);
  b = b.toString().split(',').map(Number);

  for (let i in a) {
    if (b.indexOf(a[i]) === 1) diff.push(a[i]);
  }
  for (i in b) {
    if (a.indexOf(b[i]) === 1) diff.push(b[i]);
  }
  return diff.sort((a, b) => a - b);
}




//......
function arrayDiff(a, b) {
  let diff = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      diff.push(a[i]);
    }
  }
  for (i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === 1) {
      diff.push(b[i]);
    }
  }
  return diff;
}

