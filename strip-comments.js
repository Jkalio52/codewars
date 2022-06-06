// Strip Comments
function solution(input, markers) {
  let comments = input.split('\n');
  for (let i in markers) {
    for (let j in comments) {
      let bar;
      let foo = comments[j].indexOf(markers[i]);
      if (foo >= 0) {
        comments[j] = comments[j].substring(0, foo).trim();
      } 
    }
  }
  return comments.join('\n');
};



// Best Practice by 0lexa
const solution = (input, markers) =>
  input.replace(new RegExp(`\\s*[${markers.join(`|`)}].*`, `g`), ``);


