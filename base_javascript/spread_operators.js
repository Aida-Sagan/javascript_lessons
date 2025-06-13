const names = ['Aida', 'Ayaulym', 'Masha', "Tom"];
const names_second = ['Tim', 'Ann', 'Petr']

// spread operator
const copy_names = [...names,  ...names_second ]

console.log(copy_names);


// rest operator
// деструктуризация
function sum(...args) {
    return args.reduce((a,b) => a + b);
}

console.log(sum(1,2,3, 4,5));

console.log('-------------------------')
// разделение массива
const [first, ...first_array] = [1, 2, 3,4 ,5,6];
console.log(first);
console.log(first_array);

console.log('#####################')

// деструктуризация обьекта
const user = {
    name: 'Student',
    age: 23,
    city: 'Almaty'
};

const { name, city } = user;
console.log('Name: ', name);
console.log('City = ', city);

console.log('#####################')
// деструктуризация массива
const colors = ['red', 'yellow', 'white', 'black'];
const [firstColor, secondCol, thirdColor] = colors;

console.log(firstColor);
console.log(secondCol);
console.log(thirdColor);

console.log('---------------------------')
const person = {
    name: 'Tom',
    type: 'pupil',
    city: 'Astana',
    age: 12
}

// получить все ключи обьекта person
const keys = Object.keys(person);
console.log(keys); // [ 'name', 'type', 'city' ]


// получить все значения обьекта person
const values = Object.values(person);
console.log(values); //[ 'Tom', 'pupil', 'Astana', 12 ]

console.log('-*******-')

// как можно обьект перевести в двумерный массив в js?
// получить все пары: key - value
const entries = Object.entries(person);
console.log(entries);
/**
 *
[
  [ 'name', 'Tom' ],
  [ 'type', 'pupil' ],
  [ 'city', 'Astana' ],
  [ 'age', 12 ]
] - матрица 4 на 2 (4 строки и 2 столбца))
 */

// итерируемые обьекты - у которых есть встроенный итератор
/**
 * for ... of работает с:
 * Array
 * String
 * Map
 * Set
 * 
 * for ... of НЕ РАБОТАЕТ С ОБЫЧНЫМИ ОБЬЕКТАМИ {}
 * для обычных обьектов {} используется цикл for ... in
 */

const book = {
    year: 2009,
    janr: 'comedy',
    author: 'Bon Bin'
}

for (const val of Object.values(book)){
    console.log(`value = ${val}`);
}

// key value
for (const [key, val] of Object.entries(book)){
     console.log(`${key} - ${val}`);
}

console.log('******************************');
// сумма всех чисел в массиве, for ... of
const arr = [1,2,3,4,5];
let summa = 0;
for (const el of arr){
    summa += el;
}
console.log(summa);


