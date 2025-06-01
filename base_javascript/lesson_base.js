function counter() {
    let count = 5;
    
    return function() {
        count++;
        return count;
    }
}

// let
// const
// var

const c = counter();



// console.log(c()); // 6
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c()); 


// var
/**
 * 1. область видимости: блочная (работает внутри функции { })
 * 2. hoisting ("всплытие"): работает (есть) 
 * 3. возможность переобьявлять переменную: ДА
 * 
 * undefined - переменная есть, но БЕЗ значения ( ЭТО НЕ ОШИБКА)
 */


function testVar() {
    var b = 3;
    console.log('B = ', b);

    console.log("a BEFORE init: ", a); // undefined
    var a = "good day!";
    console.log("a AFTER init: ", a); // good day!

    a = 65;
    console.log('a after editing:', a);
}

// console.log('B after function: ', b); // b is not defined
//const f1 = testVar();

// let - современный стандарт
/**
 * 1. область видимости: внутри функции { } - блочная
 * 2. hoisting ("всплытие"): доступа до обьявления к переменной НЕТ, но после обьявления доступ есть
 * 3. возможность переобьявлять переменную: ДА
 * 
 * 
 */
function testLet() {
    console.log('x before init = ', x); // ReferenceError: Cannot access 'x' before initialization
    let x;
    console.log('x = ', x); //undefined
    x = 10;
    console.log('x after init =  ', x); // 10
    x = 'TEST';
    console.log('x after second init =  ', x);
}

//  console.log('x after function =  ', x); // x is not defined

// testLet();

// const - как let, НО нельзя менять значение
/**
 * 1. область видимости: внутри функции { } - блочная
 * 2. hoisting ("всплытие"): доступа до обьявления к переменной НЕТ, но после обьявления доступ есть
 * 3. возможность переобьявлять переменную: ДА
 * 
 * 
 */
function testConst() {
    // console.log('const before declaration = ', temp); //ReferenceError: Cannot access 'temp' before initialization
    const temp = 10; 
    console.log('const after declaration = ', temp);
    temp = 'test';
    console.log('const = ', temp); // TypeError: Assignment to constant variable. - НЕЛЬЗЯ менять значение у конст
}
// testConst();



// hoisting - всплытие


// function declaration 
/**
 * функции function declaration 
 */

//function declaration 
/**
 * функции function declaration всплывают, и можем вызвыать их ДО обьявления
 */
DeclareFun(); //Hello from function declaration!
function DeclareFun() {
    console.log('Hello from function declaration!');
}
console.log('------------------------------------------------')


// myFun(); //ReferenceError: Cannot access 'myFun' before initialization
// function expression
/**
 * функции function expression НЕ всплывают, и НЕ можем вызвыать их ДО обьявления
 */
let myFun = function TestFun() {
    console.log('Hello from function < expression >!')
}
myFun(); // Hello from function < expression >!

console.log('------------------------------------------------')

// arrow function
// testFun(); // ReferenceError: Cannot access 'testFun' before initialization
let testFun = () => {
    console.log('Hello from  < arrow > function!')
}
testFun(); //Hello from  < arrow > function!







function printNumbers() {
    for(let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log('i = ', i);
        }, i * 1000);
    }
}
// 1000 ms = 1 s
/**
 * i = 1, 1 <= 5 (TRUE)=> 'i = 1' (вып-ся через 1 * 1000 = 1 сек) => i = 2
 * i = 2, 2 <= 5 (TRUE) => 'i = 2' (вып-ся через 2 * 1000 = 2 сек) => i = 3
 * i = 3, 3 <= 5 (TRUE) => 'i = 3' (вып-ся через 3 * 1000 = 3 сек) => i = 4
 * i = 4, 4 <= 5 => (вып-ся через 4 * 1000 = 4 сек) => i = 5
 * i = 5 5<= 5 => (вып-ся через 5 * 1000 = 5 сек) => i = 6
 * i = 6 6 <= 5 (FALSE)
 */

printNumbers(); 
/**
 * 1 
 * 2
 * 3
 * 4
 * 5 - через 5 секунд
 */