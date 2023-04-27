var a = 50;
var b = 64;
var c = 75;
var miniNum;
var maxNum;

//definine minimum #
if (a < b && a < c) {
    miniNum= a;
} /*else if (b < a && b < c) {
    miniNum =b;
} else {
 miniNum= c;
}*/ //does it need this?
console.log(`The min of ${a},${b},${c} is ${miniNum}`)

//-------------------------------------------------------------------------------------

//define maximum 
if (a <= b && a <= c) {
    maxNum= a;
} else if (a >= b && b >= c) {
    maxNum =b;
} else {
 maxNum= c;
}
console.log(`The max of ${a},${b},${c} is ${maxNum}`)

