// Способ через строки
// function isPalindrome(x: number): boolean {
//   return x.toString().split('').reverse().join('') === x.toString();
// }
// Способ через числа
function isPalindrome(x) {
    if (x < 0 || (x != 0 && x % 10 === 0))
        return false;
    var res = 0;
    while (x > res) {
        res = res * 10 + (x % 10);
        x /= 10;
    }
    return x === res || x === res / 10;
}

console.log(isPalindrome(121));
