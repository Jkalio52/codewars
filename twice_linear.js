function dblLinear(n) {
    // your code
    // 
  let arr = [1], x = 0, y = 0
    for (let i = 0; i < n; i++) {
        let arrStart = 2 * arr[x] + 1, arrEnd = 3 * arr[y] + 1
        if (arrStart <= arrEnd) {
            arr.push(arrStart)
            x++
            if (arrStart == arrEnd)
                y++
        } else {
            arr.push(arrEnd)
            y++
        }
    }
  
    return arr[n]
}



// Solution #2
function dblLinear(n) {
    //
    let arr = [1], x = 0, y = 0;
    
    for (let i = 1; i <= n; i++) {
      arr[i] = Math.min(2 * arr[x] + 1, 3 * arr[y] + 1);
      if (arr[i] == 2 * arr[x] + 1) x++;
      if (arr[i] == 3 * arr[y] + 1) y++;
    }

    return arr[n];
  
}
