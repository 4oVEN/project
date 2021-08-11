'use strict';

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(Number(String('4')));
// 2)
console.log(typeof(+'5'));
// 3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

//To boolean

// 0, '', null, undefined, Nan; 
// 1)
let switcher = null;
if (switcher){
  console.log('Working...');
}

switcher = 1;
if (switcher){
  console.log('Working...');
}
// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'99999999999999'));
