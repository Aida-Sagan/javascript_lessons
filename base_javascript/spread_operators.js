const names = ['Aida', 'Ayaulym', 'Masha', 'Tom'];

// копирование по ссылке (оба имени names copy указывают на один и тот же массив в памяти)
const copy = names;
copy.push('aaa');
//console.log('copy = ', copy);
//console.log(names);
//spread operator

const copy_names = [...names]; 
//копирование по значению (создаем новый независимый массив)

copy_names.push('bbbbbb');
console.log('copy_names: ', copy_names);
console.log(names);



//rest operator
// деструктуризация
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1,2,3));

// разделение массива
const [first, ...first_array] = [1, 2, 3, 4, 5, 6];
console.log(first);
console.log(first_array);

//деструктуризация объекта
const user = {
    name: 'Student',
    age: 23,
    city: 'Almaty'
};

const {name, city} = user;
console.log('Name: ', name);
console.log('City: ', city);

//деструктуризация массива
const colors = ['red', 'yellow', 'white', 'black'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(thirdColor);

console.log('----------------------');
const person = {
    name: 'Tom',
    type: 'pupil',
    city: 'Astana',
    age: 12
}

//получить все ключи объекта person
const keys = Object.keys(person);
console.log(keys); //[ 'name', 'type', 'city' ]

//получить все значения объекта person
const values = Object.values(person);
console.log(values); //[ 'Tom', 'pupil', 'Astana', 12 ]
console.log('----------------------');

//как можно объект перевести в двумерный массив в js?
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
] - матрица 4 на 2
 */


// итерируемые объекты - объекты у которых есть встроенный итератор
/**
 * for ... of работает с
 * Array
 * String
 * Map
 * Set
 * 
 * for ... of не работает с обычными объектами {}
 * для обычных объектов используется цикл for ... in
 */

console.log('------------')
const book = {
    year: 2009,
    genre: 'comedy',
    author: 'Bon Bin'
}

for (const val of Object.values(book)){
    console.log(`value: ${val}`);
}

for (const [key, value] of Object.entries(book)){
    console.log(`${key} - ${value}`);
}


//сумма чисел в массиве for ... of
const arr = [1,2,3,4,5];
let summa = 0;
for (const el of arr){
    summa += el;
}
console.log(summa);



