function dblLinear(n) {
    // your code
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
