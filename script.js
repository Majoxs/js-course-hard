'use strict';

let str = prompt('Введите произвольную строку!');

function foo(arg) {

   while (typeof arg !== 'string' || typeof arg === null || arg === '') {
      alert('Это не строка!');
      arg = prompt('Введите произвольную строку');
   };
   arg = arg.trim();
   if (arg.length > 30) {
      let newStr = arg.slice(0, 30).padEnd(33, '...');
      alert(newStr);
   } else {
      alert(arg);
   }
   console.log(arg);
}

foo(str);