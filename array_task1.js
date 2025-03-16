//const words = ["apple", "banana", "cherry"];
//const upperCaseWords = words.map(word => word.toUpperCase());
//console.log(upperCaseWords);

//const words = ["apple", "banana", "kiwi", "strawberry"];
//const wordsLength5 = words.filter(word => word.length > 5)
//console.log(wordsLength5);
//console.log(words);

const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 25 }
]; // элемент массива ө объект
// keys - name, age
const Adults = users.filter(user => user.age >= 18);
console.log(Adults);
