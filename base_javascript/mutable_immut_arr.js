// mutable -методы которые изменяют наш массив

// push - добавляет элемент в массив (В КОНЕЦ МАССИВА)
let arr = [10, 20, 30];
arr.push(1050); 
console.log(arr); //[ 10, 20, 30, 1050 ]

// pop - удаляет эл с конца массива - возврашает удаленный элемент
let names = ['tom', 'ann', 'tina'];
let deleted_name = names.pop();
console.log(names); //[ 'tom', 'ann' ]
console.log(deleted_name); // tina

let countries = ['USA', "Italy", 'Spain'];
let deleted_country = countries.shift();
console.log(countries);
console.log(deleted_country);

let nums = [1,2,3];
nums.splice(1, 2, 'new value', 'stroka');
console.log(nums)


console.log('----------------------------------------------------');

// filter - фильтрует элементы по какому-то условию
const years = [2005, 2004, 2015, 2028];
const oddYears = years.filter(year => year % 2 !== 0);
console.log('years = ', years);
console.log('new years array =', oddYears);

// map - преобразует каждый элемент массива 
let numbers = [2, 3, 4, 5];
let squareNum = numbers.map(num => num * num);
console.log('numbers = ', numbers);
console.log('new array = ', squareNum);
console.log('----------------------------------------------------');

// slice 
const part = numbers.slice(1, 3);
console.log('old arr = ', numbers);
console.log('part = ', part);

console.log('----------------------------------------------------');
// find - находит ПЕРВЫЙ элемент кот проходит по условию - не выводит массив, а возрашает найденный элемент
const found = numbers.find(num => num > 3);
console.log('old arr = ', numbers);
console.log('found = ', found);