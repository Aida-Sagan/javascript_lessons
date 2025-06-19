// mutable - методы которые изменяют наш массив

// push - добавляет элемент в массив в конец
let arr = [10,20,30];
arr.push(1050);
console.log(arr); //[ 10, 20, 30, 1050 ]


//pop() - удаляет элемент с конца массива и возвращает удаленный элемент 
let names = ['tom', 'ann', 'tina'];
let deleted_name = names.pop();
console.log(names); //[ 'tom', 'ann' ] 
console.log(deleted_name); //tina


//shift
let countries = ['USA', 'Italy', 'Spain'];
let deleted_country = countries.shift()
console.log(countries); // [ 'Spain' ]
console.log(deleted_country); //USA

//splice
let nums = [1,2,3];
nums.splice(1,2,'new value', 'stroka');
console.log(nums);



//immutable 
console.log('------------------------------');

//filter() - фильтрует элементы по какомуөто условию
const years = [2005, 2004, 2015, 2028];
const oddYears = years.filter(year => year % 2 !== 0);
console.log('years = ', years);
console.log('new years array = ', oddYears);

// map() - преобразует каждый элемент массива
let numbers = [2, 3, 4, 5];
let squaredNums = numbers.map(num => num ** 2);
console.log('numbers = ', numbers);
console.log('new array = ', squaredNums);

// slice
const part = numbers.slice(1, 3);
console.log('old arr = ', numbers);
console.log('part = ', part);

console.log('------------------------------');

// find - находит ПЕРВЫЙ  элемент который подходит по условию
const found = numbers.find(num => num > 3);
console.log('old arr = ', numbers);
console.log('found = ', found);


//task1
const strings = ['aaa', 'ababab', 'eee'];
const string5 = strings.find(string => string.length > 5)
console.log('first string with length more than 5: ', string5);

//task2
const nums13 = numbers.slice(1, 3);
console.log(num13);