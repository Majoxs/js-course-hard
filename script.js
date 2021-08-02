'use strict';

// Задача №1
const lang = 'ru';
const arrRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const arrEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const arr = {
   ru: arrRu,
   en: arrEn,
};

if (lang === 'ru') {
   console.log(arrRu);
} else if (lang === 'en') {
   console.log(arrEn);
} else {
   console.log('Язык не определён');
}

switch (lang) {
   case 'ru':
      console.log(arrRu);
      break;
   case 'en':
      console.log(arrEn);
      break;
   default:
      console.log('Язык не определён');
}

console.log(arr[lang]);

//Задача №2

let namePerson = 'Артем';

namePerson = namePerson === 'Артем' ? console.log('директор') :
   namePerson === 'Максим' ? console.log('преподаватель') :
      console.log('студент');
