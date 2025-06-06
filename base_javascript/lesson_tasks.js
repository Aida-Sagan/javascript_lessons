// console.log(name); // error Reference

// let name = 'Test';


// console.log(age); // undefined - ЭТО НЕ ОШИБКА 
// var age = 30;

// for(var i = 0; i < 3; i++) {
//     console.log('i = ', i);

//     setTimeout(() =>{
//         console.log(i)
//     }, 100);

//     console.log('i after for = ', i)
// }
/**
 * output:
 * 0
 * 1
 * 2
 * 
 * 
 * var не создает новую переменную каждый раз  в цикле  (один i на все время в цикле)
 * 
 * 
 * let - создает новую копию i на каждой итерации (у каждой итерации свой i)
 * {
 *  let i = 0
 * setTimeout() => console.log(i), 100
 * }
 * {
 *  let i = 1
 * setTimeout() => console.log(i), 100
 * }
 * {
 *  let i = 2
 * setTimeout() => console.log(i), 100
 * }
 */

