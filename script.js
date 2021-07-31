'use strict';

const num = 266219;

const arr = num.toString().split('');

let result = arr.reduce((pro, current) => pro *= current, 1);

console.log(result);

result **= 3;
console.log(result);

result = result.toString();
console.log(+(result.substring(0, 2)));