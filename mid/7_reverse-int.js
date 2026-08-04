/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const str = x.toString();
    let newStr = '';
    
    if (str[0] === '-') {
        newStr = '-'
    }
    
    for (let i = str.length - 1; i >=0; i--) {
        newStr += str[i]
    }
    const result = parseInt(newStr)
    if (Math.pow(-2, 31) > result || Math.pow(2, 31) - 1 < result) {
    return 0;
    }
    return result;
};

const result = reverse(-321);
console.log(result)