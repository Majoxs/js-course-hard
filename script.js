'use strict';

const num = 266219;

const arr = num.toString().split('');
let result = 1;

arr.forEach(function (item, i, arr) {
   result *= arr[i];
});

console.log(result);

result **= 3;
console.log(result);

result = result.toString();
console.log(+(result.substring(0, 2)));