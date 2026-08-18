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
