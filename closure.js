// Замыкание 

/*
1. это функция, которая запоминает переменные из своей внешней (глобальной) области видимости 
ДАЖЕ после завершения выполнения этой области


function f () {
    let a = 1;
}

f(); // 1 вызов этой функции => сразу в памяти компьютера создалась новая область 
f(); // 2 call
f();  // 3 call
f();  // 4 call


    2 области видимости: глобальная область видимости и локальная область видимости

*/

function outer() {
    let message = 'Hello!'; // переменная внешней функции

    return function inner() { // вложенная функция
        console.log('Good luck!'); // используем переменную message
    }
}

const outerFunc = outer(); // вызов внещней функции 
outerFunc();

/**
 * Лексическое окружение - это в памяти JS - это "скрытый"  технический обьект( {key: value} ): лок. окр
 *  и Глоб окр
 * 
 * 
 * Лекс.окр функции outer (при вызове этой функции)
 * { message : 'Hello!' }
 * 
 * Лекс окр функции inner() (при вызове , outerFunc();)
 * { message : 'Hello!' } так как inner() ищет message и находит { message : 'Hello!' } в функции outer()
 * 
 * когда функция outer() завершается, его Лекс окр НЕ УДАЛЯЕТСЯ , потому что функция inner продолжает ссылаться
 * на него
 */

// обьявление функции
// лексическое окружение не создается до вызова функции
function createCounter() {
    let count = 0; // локльная переменная для функции createCounter

    return function () { // вложенная функция
        count++; // использует внешнюю переменную
        console.log(count);
    }
}

const counter = createCounter(); // вызываем внешнюю  функцию createCounter => созад новая область памяти
counter(); //1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5
counter(); //  6

// Замыкание запоминает переменные ДАЖЕ после выхода из функции.

// Задача: создать Банк
/**
 * вносить деньги (deposit)
 * снимать деньги (withdraw)
 * проверять баланс (checkBalance)
 */

function createBank(initialBalance) {
    let balance = initialBalance; // переменная "замкнута"

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Пополнение: ${amount}. Баланс: ${balance}`);
        },

        withdraw(amount){
            if (balance > amount) {
                balance -= amount;
                console.log(`Снятие: ${amount}. Баланс: ${balance}` )
            } else {
                console.log('Недостаточно средств!!!')
            }
        },

        checkBalance() {
            console.log(`Баланс: ${balance}`);
        }
    }
   
}

// function deposit() {
//     balance += 1;
// }

const myBank = createBank(1000); // вызов внешней функции, положили стартовый баланс
// myBank.deposit(500); // 1500
// myBank.withdraw(2000); // недост средств
// myBank.withdraw(300); // 1200
// balance(); //Uncaught ReferenceError: balance is not defined
