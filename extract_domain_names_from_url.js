function domainName(url) {
  // your code here
  let x = /(\/{2}|\.)/g;
  let domain = url.match(x);
  let str = '';
  
  if (domain[0] == '//') {
    if (url.charAt(url.indexOf(domain[0]) + 2) == "w") {
      str = url.slice(url.indexOf(domain[1]) + 1, url.indexOf(domain[1], url.indexOf(domain[1])+1));
    }
    else {
      str = url.slice(url.indexOf(domain[0]) + 2, url.indexOf(domain[1]));
    }
    
  }
    else {
      str = url.slice(url.indexOf(domain[0]) + 1, url.lastIndexOf(domain[1]));
    }
  
    return str;
}



