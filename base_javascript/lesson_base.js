function counter() {
    let count = 5;

    return function() {
        count++;
        return count;
    }
}

const c = counter();

console.log(c()); // 6
/*console.log(c());
console.log(c());
console.log(c());
console.log(c()); // 5 */

/*
var
1. область видимости: блочная (работает внутри функции)
2. hoisting ("вспылитие"): есть
3. возможность переобъявлять переменную: есть
4. в цикле не создает новую переменную в каждый итерации (один i на все время в цикле)
undefined - переменная есть, но БЕЗ значения (это не ошибка)
*/

function testVar() {
    console.log("a BEFORE init: ", a); // undefined
    var a = 'good day!'
    console.log("a AFTER init: ", a); // good day!
    
    a = 65;
    console.log('a after editing: ', a);
}

//const f1 = testVar();

/*
let - современный стандарт
1. область видимости: блочная (внутри функции)
2. hoisting ("вспылитие"): нет
3. возможность переобъявлять переменную: да 
4. создает новую копию переменной на каждой итерации (у каждой итерации свой i)
undefined - переменная есть, но БЕЗ значения (это не ошибка)
*/

function testLet() {
    // console.log('x before init = ', x); - error
    let x;
    console.log('x = ', x); // undefined
    x = 10;
    console.log('x after init = ', x);
    x = 'TEST';
    console.log('x after second init = ', x);
}


//testLet();

/*
const - как let, НО нельзя менять значение
1. область видимости: блочная (внутри функции)
2. hoisting ("вспылитие"): нет
3. возможность переобъявлять переменную: да 

undefined - переменная есть, но БЕЗ значения (это не ошибка)
*/

function testConst() {
    // console.log("const before declaration = ", temp); ReferenceError: Cannot access 'temp' before initialization
    const temp = 10;
    console.log("const after declaration = ", temp);
    temp = 'test';
    console.log("const = ", temp); //TypeError: Assignment to constant variable.

}
// testConst();

//hoisting - всплытие
//function declaration
/* */
//DeclareFun();
function DeclareFun() {
    console.log('Hello from function declaration!')
}


// function expression
//myFun(); // ReferenceError: Cannot access 'myFun' before initialization
let myFun = function TestFun() {
    console.log('Hello from function expression!')
}

// arrow function
//testFun();
let testFun = () => {
    console.log('Hello from arrow function!')
}

function printNumbers() {
    for(let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log('i = ', i);
        }, i * 1000);
    }
}
/* 


*/
printNumbers(); 
/* 

ждет 1 сек
1
ждет 2 сек
2
ждет 3 сек
3
ждет 4 сек
4
ждет 5 сек
5

*/