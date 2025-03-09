const numbers = [1,2,3,4,5]

// map()
/**
 * map проходится по КАЖДОМУ элементу массива и изменяет этот элемент массива
 * !!!!!!!!!! метод map НЕ изменяет исходный массив, а создаем новый 
 * map принимает callback функцию
 */

// удвоить каждое число в массиве 
const doubled = numbers.map((num) => {
    return num * 2;
})
console.log(doubled);
console.log(`Исходный массив: ${numbers}`)

// filter
/**
 * создаем новый массив (то есть не изменяет исходный массив)
 * в новый массив попадают только те элементы, которые прошли проверку (вернули true)
 */

// оставить только нечетные числа
const newNums = numbers.filter((num) => {
    return num % 2 === 1;
})
console.log(newNums); //[1, 3, 5]
console.log(`Исходный массив: ${numbers}`) //Исходный массив: 1,2,3,4,5


// reduce
/***
 * этот метод используется для преобразования данных в массиве. Проходится по массиву и аккумулирует рез-т 
 * в одной переменной.
 * 
 * 
 * ARRAY.reduce( (accumulator, currentValue ) => {
 *      // логика обработки
 *      return обновленное_значение_аккумулятора;
 * }, начальное_значение)
 */

const nums = [10, 20, 30, 40, 50, 60, 70]

// найти сумму всех чисел в массиве
const sum = nums.reduce( (acc, currNum) => {
    return acc + currNum;
}, 0)

console.log('Summa: ', sum)

const numbers1 = [1, 2, 3, 4, 5, 6, 7]
const multi = numbers1.reduce( (acc, currNum) => {
    return acc * currNum;
}, 1)

console.log('Multi: ', multi)

// find max num in array
const maxNum = nums.reduce( (max, numCurr ) => {
    if (numCurr > max) {
        return numCurr;
    } else {
        return max;
    }
}, nums[0])
console.log(maxNum)

