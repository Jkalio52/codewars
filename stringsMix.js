function mix(s1, s2) {
  // your code 
  let alphabetsArr = [], arr1 = cal(s1), arr2 = cal(s2);

  for (let i in arr1) {
    if (arr2[i]) {
      arr1[i] > arr2[i] && alphabetsArr.push('1:'+i.repeat(arr1[i]))   
      arr1[i] < arr2[i] && alphabetsArr.push('2:'+i.repeat(arr2[i]))
      arr1[i] == arr2[i] && alphabetsArr.push('=:'+i.repeat(arr1[i])) 
    } else {
      alphabetsArr.push('1:'+i.repeat(arr1[i])) 
    }
  } 

  for (let i in arr2) {
       !arr1[i] && alphabetsArr.push('2:'+i.repeat(arr2[i]))
  }        

  function cal(str) {
      const emptyObj = {};
      str.replace(/[^a-z]/g,'').split('').map(x => emptyObj[x] ? emptyObj[x] ++ : emptyObj[x] = 1)

      for (let i in emptyObj) {
        emptyObj[i] == 1 &&　delete emptyObj[i]
      }
    
    return emptyObj
  }
  
  return alphabetsArr.sort(function(a, b) {
    return (b.length - a.length) || (a < b ? -1 : 1);
  }).join('/')
};








// Solution by 0lexa
const mix = (s1, s2) =>
  [...`abcdefghijklmnopqrstuvwxyz`].map(val => [val, s1.split(val).length - 1, s2.split(val).length - 1])
    .filter(([a, b, c]) => b > 1 || c > 1)
    .map(([a, b, c]) => [a, b > c ? `1` : b < c ? `2` : `=`, Math.max(b, c)])
    .sort((a, b) => b[2] - a[2] || a[1].charCodeAt() - b[1].charCodeAt() || a[0].charCodeAt() - b[0].charCodeAt())
    .map(([a, b, c]) => `${b}:${a.repeat(c)}`).join(`/`);

