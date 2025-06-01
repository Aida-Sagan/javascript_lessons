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