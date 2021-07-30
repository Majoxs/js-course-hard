'use strict';

let num = 266219;

let arr = num.toString().split('');
let result = 1;

for (let i = 0; i < arr.length; i++) {

   result *= arr[i];
}
console.log(result);

result **= 3;
console.log(result);

result = result.toString();
console.log(+(result.substring(0, 2)));