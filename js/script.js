
'use strict';

 const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest: function(){
    console.log('Test');
  }
 };

 options.makeTest();

 const {border, bg} = options.colors;
 console.log(border);

//  console.log(Object.keys(options).length);

//  const family = {
//    olga: 37,
//    nikita: 32,
//    kiril: 8,
//    bogdan: 6,
//    platon: 3,
//    marusa: 2
//  };

//  console.log(Object.keys(family).length);

//  console.log(options.name);

//  delete options.name;
//  console.log(options);


// let counter = 0;
//  for (let key in options){
//    if (typeof(options[key]) === 'object'){
//      for (let i in options[key]){
//       console.log(`Свойство ${i} имеет начение ${options[key][i]}`);
//       counter++;
//      }
//    }else {
//      console.log(`Свойство ${key} имеет начение ${options[key]}`);
//      counter++;
//    }  
//  }
//  console.log(counter);



